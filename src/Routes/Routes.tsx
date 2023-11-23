import { createBrowserRouter } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login/Login";
import NotFound from "../Screens/NotFound/NotFound";
import Register from "../Screens/Register/Register";
import Workspace from "../Screens/Workspace/Workspace";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Screens/Workspace/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/workspace",
    element: <PrivateRoute children={<Workspace />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute children={<Dashboard />} />,
    errorElement: <NotFound />,
  },
]);
