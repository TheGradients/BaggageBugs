import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login/login";
import Register from "./Register/register";
import Partneroverview from "./Partner/Partneroverview";
import LandingPage from "./landingPage/LandingPage";
import DashboardDetails from "./DashboardDetails/DashboardDetails";
const Body = () => {
  const approuter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/partneroverview", element: <Partneroverview /> },
    { path: "/landingpage", element: <LandingPage /> },
    {path: "/profile", element: <DashboardDetails />},
  ]);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
