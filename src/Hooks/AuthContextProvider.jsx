import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
  const createUser = (mail, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, mail, pass);
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
  const datas = { user, loading, createUser, updateUser, signUser, signOutUSer };
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
