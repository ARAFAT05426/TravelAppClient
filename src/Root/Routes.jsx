import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Outlets/Error";
import Home from "../Outlets/Home";
import About from "../Outlets/About";
import Contact from "../Outlets/Contact";
import All_Spots from "../Outlets/All_Spots";
import Add_Spots from "../Outlets/Add_Spots";
import SignUp from "../Outlets/SignUp/SignUp";
import LogIn from "../Outlets/LogIn/LogIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allTouristSpots",
        element: <All_Spots />,
      },
      {
        path: "/addSpots",
        element: <Add_Spots />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/logIn',
        element: <LogIn />
      },
      {
        path: '/signUp',
        element: <SignUp />
      }
    ],
  },
]);
export default routes;
