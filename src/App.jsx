import React from "react";

import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import UserDetails from "./pages/UserDetails";
import { House } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    handle: { breadcrumb: <House size={20}/> },  // Root breadcrumb label
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

function App() {
  return(
   <ThemeProvider>
   <RouterProvider router={router} />
   </ThemeProvider>
) 
}
export default App;
// Home / Settings / Profile
// Home / User / Details