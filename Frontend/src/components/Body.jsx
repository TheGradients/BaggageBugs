import React from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './login/login'
import Register from './Register/register'
import Partneroverview from './Partner/Partneroverview'
const Body = () => {
    const approuter = createBrowserRouter([
        {path: '/', element: <Login/>},
        {path: '/register',element:<Register/>},
        {path: '/partneroverview',element:<Partneroverview/>}
    ]);
  return (
    <div>
    <RouterProvider router={approuter} />
  </div>
  )
}

export default Body
