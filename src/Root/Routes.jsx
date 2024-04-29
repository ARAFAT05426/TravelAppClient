import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../Outlets/Error";
import Home from "../Outlets/Home";
import Contact from "../Outlets/Contact";
import All_Spots from "../Outlets/All_Spots";
import Add_Spots from "../Outlets/Add_Spots";
import SignUp from "../Outlets/SignUp/SignUp";
import LogIn from "../Outlets/LogIn/LogIn";
import Private from "../Outlets/Private";
import SpotDetails from "../Outlets/SpotDetails";
import MyList from "../Outlets/MyList";
import UpdateSpot from "../Outlets/UpdateSpot";
import CountrySpots from "../Outlets/CountrySpots";

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
        element: <All_Spots />
      },
      {
        path: "/addSpots",
        element: <Private><Add_Spots /></Private>,
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
      },
      {
        path: '/spotdetails/:id',
        element: <Private><SpotDetails/></Private>,
        loader: ({params}) => fetch(`http://localhost:5426/spots/${params.id}`)
      },
      {
        path: '/myList',
        element: <Private><MyList /></Private>
      },
      {
        path: '/updateSpot/:id',
        element: <Private><UpdateSpot /></Private>,
        loader: ({params}) => fetch(`http://localhost:5426/spots/${params.id}`)
      },
      {
        path: '/coutrySpot/:name',
        element: <CountrySpots/>,
        loader: ({params}) => fetch(`http://localhost:5426/coutrySpot/${params.name}`)
      }
    ],
  },
]);
export default routes;
