import { createBrowserRouter } from "react-router-dom";
import Home from "./views/home/main";
import Login from "./views/login/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
    {
    path: "/login",
    element: <Login />,
  },
]);
