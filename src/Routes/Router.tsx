import Login from "../Screens/Login/Login";
import NotFound from "../Screens/NotFound/NotFound";
import Register from "../Screens/Register/Register";

export const router = createBrowserRouter([
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
]);
