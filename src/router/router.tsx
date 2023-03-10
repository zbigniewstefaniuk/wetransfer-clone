import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/pages/Root/Error";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Root, { loader as rootLoader } from "@/pages/Root/Root";
import ConfirmMail from "@/pages/Auth/ConfirmMail";
import ThanksForRegistration from "@/pages/Auth/ThanksForRegistration";
import AuthGuard, { loader as authGuardLoader } from "@/pages/Auth/AuthGuard";
import Account, { loader as accountLoader } from "@/pages/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/confirm-mail",
        element: <ConfirmMail />,
      },
      {
        path: "/thanks-for-registration",
        element: <ThanksForRegistration />,
      },
      {
        element: <AuthGuard />,
        loader: authGuardLoader,
        children: [
          {
            path: "/account",
            loader: accountLoader,
            element: <Account />,
          },
          {
            path: "/transfers",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

export default router;
