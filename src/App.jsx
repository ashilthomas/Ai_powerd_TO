import React from "react";

import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Setting from "./pages/Setting";
import Dashbaord from "./pages/Dashboard";

function App() {

  let router = createBrowserRouter([
  {
    path: "/",
     element: <MainLayout />,
     children: [
       {
         index: true,  
         element: <Dashbaord />,
       },
       {
        path:"settings",
        element:<Setting/>
       }
     ]

    
  },
]);
   return <RouterProvider router={router} />;
}

export default App;
