import React from "react";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Employee from "./Employee";
import Manager from "./Manager";
import { useSelector } from "react-redux";
import Error from "./Error";
import Hr from "./Hr";

const Body = () => {
  const role = useSelector((store) => store?.user?.role);
  //   console.log(role);
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/employee",
      element: role === "Employee" ? <Employee></Employee> : <Error></Error>,
    },
    {
      path: "/manager",
      element: role === "Manager" ? <Manager></Manager> : <Error></Error>,
    },
    {
      path: "/hr",
      element: role == "Hr" ? <Hr></Hr> : <Error></Error>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={approuter}></RouterProvider>
    </div>
  );
};

export default Body;
