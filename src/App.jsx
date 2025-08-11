import React from "react";

import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";


function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    handle: { breadcrumb: "Home" },  // Root breadcrumb label
    children: [
      {
        index: true,
        element: <Dashboard />,
        handle: { breadcrumb: "Dashboard" },
      },
      {
        path: "settings",
        element: <Setting />,
        handle: { breadcrumb: "Settings" },
      },
      {
        path: "user",// Nested route's parent route 
        element: <UserProfile />,// Nested route 
        handle: { breadcrumb: "User" },// Nested route 
        children: [
          {
            path: ":userId",// Nested route
            element: <UserDetails />,// Nested route
            handle: {
              breadcrumb: (match) => `Details: ${match.params.userId}`, // Dynamic breadcrumb
            },
          },
        ],
      },
    ],
  },
]);
   return <RouterProvider router={router} />;
}

export default App;
// Home / Settings / Profile
// Home / User / Details