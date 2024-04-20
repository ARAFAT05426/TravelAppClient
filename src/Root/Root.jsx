import { Outlet } from "react-router-dom";
import Navbar from "./Navigation/Navbar";

const Root = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    );
};

export default Root;