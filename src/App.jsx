import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { House } from "lucide-react";
import { ThemeProvider } from "./context/ThemeContext";

// Import only the MainLayout eagerly as it's needed for the initial render
import MainLayout from "./layout/MainLayout";

// Lazy load all other components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Setting = lazy(() => import("./pages/Setting"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const UserDetails = lazy(() => import("./pages/UserDetails"));
const ErrorPage = lazy(() => import("./components/ErrorPage/ErrorPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);


function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    handle: { breadcrumb: <House size={20}/> },  // Root breadcrumb label
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Dashboard />
          </Suspense>
        ),
        handle: { breadcrumb: "Dashboard" },
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Setting />
          </Suspense>
        ),
        handle: { breadcrumb: "Settings" },
      },
      {
        path: "user",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <UserProfile />
          </Suspense>
        ),
        handle: { breadcrumb: "User" },
        children: [
          {
            path: ":userId",
            element: (
              <Suspense fallback={<LoadingFallback />}>
                <UserDetails />
              </Suspense>
            ),
            handle: {
              breadcrumb: (match) => `Details: ${match.params.userId}`,
            },
          },
        ],
      },
    ],
  },
  // Error page
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <ErrorPage />
      </Suspense>
    ),
  }
]);
   return(
   <ThemeProvider>
   <RouterProvider router={router} />
   </ThemeProvider>
) 
}
export default App;
// Home / Settings / Profile
// Home / User / Details