import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./login/login";
import Register from "./Register/Register";
import Partneroverview from "./Partner/Partneroverview";
import LandingPage from "./landingPage/LandingPage";
import DashboardDetails from "./DashboardDetails/DashboardDetails";
import Bookingpage from "./Bookingpage/Bookingpage";
import Storage from "./Bookingpage/Storage";
import UserOverview from "./User/UserOverview";
import Profile from "./Profile/Profile";
import Reviews from "./Reviews/Reviews";
import Reservation from "./reservation/Reservation";
import UserBookings from "./User/UserBookings";
const Body = () => {
  const approuter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/partneroverview", element: <Partneroverview /> },
    { path: "/landingpage", element: <LandingPage /> },
    { path: "/dashboard", element: <DashboardDetails /> },
    { path: "/bookingpage", element: <Bookingpage /> },
    { path: "/storage", element: <Storage /> },
    { path: "/useroverview", element: <UserOverview /> },
    { path: "/profile", element: <Profile /> },
    { path: "/reviews", element: <Reviews /> },
    { path: "reservation", element: <Reservation /> },
    { path: "/userbookings", element: <UserBookings /> },
  ]);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
