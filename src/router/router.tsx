import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/Root/Error";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Root from "@/pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
