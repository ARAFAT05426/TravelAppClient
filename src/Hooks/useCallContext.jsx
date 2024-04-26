import { useContext } from "react";
import authContext from "./authContext";

const useCallContext = () => {
    const datas = useContext(authContext);
    return datas
};

export default useCallContext;