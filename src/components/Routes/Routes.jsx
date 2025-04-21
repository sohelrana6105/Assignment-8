import React from "react";
import { createBrowserRouter } from "react-router";
import Roots from "../Roots/Roots";
import ErrorPages from "../pages/ErrorPages/ErrorPages";
import Home from "../Home/Home";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement: <ErrorPages></ErrorPages>,

    children: [
      {
        index: true,
        path: "/",
        loader: () =>
          fetch("/public/DoctorsData.json").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
    ],
  },
]);
