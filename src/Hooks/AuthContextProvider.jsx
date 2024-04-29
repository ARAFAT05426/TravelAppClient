import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import authContext from "./authContext";
import PropTypes from "prop-types";
import auth from "../Config/firebase";
import { useEffect, useState } from "react";
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const createUser = (mail, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, mail, pass);
  };
  const signUserWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signUserWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const updateUser = (name, url) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: url,
    })
      .then(() => {
        setLoading(false);
        return setUser({ ...auth.currentUser });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const signUser = (mail, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, mail, pass);
  };
  const signOutUSer = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };
  const datas = { user, loading, createUser, updateUser, signUser, signUserWithGoogle, signOutUSer, signUserWithGithub };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return <authContext.Provider value={datas}>{children}</authContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthContextProvider;
