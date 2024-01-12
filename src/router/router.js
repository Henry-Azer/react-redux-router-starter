import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Login } from "../views/login/Login";
import { Profile } from "../views/profile/Profile";
import { MainLayout, RootError } from "../components";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      {
        path: "/profile",
        element: <Profile />,
        lazy: () => import("../views/profile/Profile"),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <RootError />,
    lazy: () => import("../views/login/Login"),
  },
]);

export function Router() {
  return React.createElement(RouterProvider, { router });
}
