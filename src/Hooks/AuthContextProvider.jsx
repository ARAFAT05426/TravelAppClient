import authContext from './authContext'
import PropTypes from 'prop-types'; 
const AuthContextProvider = ({children}) => {
    const datas = {name: "arafat"}
    return (
        <authContext.Provider value={datas}>
            {children}
        </authContext.Provider>
    );
};

AuthContextProvider.propTypes ={
    children: PropTypes.node
}
export default AuthContextProvider;