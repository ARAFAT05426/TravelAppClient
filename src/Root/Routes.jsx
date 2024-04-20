import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Components/Outlets/Home";
import Error from "../Components/Outlets/Error";
import About from "../Components/Outlets/About";
import Contact from "../Components/Outlets/Contact";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
])
export default routes;