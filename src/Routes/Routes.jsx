import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Bookings from "../pages/Bookings/Bookings";
import Blogs from "../pages/Blogs/Blogs";
import LawyerDetails from "../pages/LawyerDetails/LawyerDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/lawyersData.json").then((res) => res.json()),
        Component: Home,
      },
      {
        path: "/bookings",
        loader: () => fetch("/lawyersData.json").then((res) => res.json()),
        Component: Bookings,
      },
      {
        path: "/blogs",
        loader: () => fetch("/blogs.json").then((res) => res.json()),
        Component: Blogs,
      },
      {
        path: "/profile/:lawyerLicense",
        loader: () => fetch("/lawyersData.json").then((res) => res.json()),
        Component: LawyerDetails,
      },
    ],
  },
]);
