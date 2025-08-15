import { Slash } from "lucide-react";
import React from "react";
import { Link, useMatches } from "react-router-dom";


const Breadcrumbs = () => {
  const matches = useMatches();// Get the current route matches
  
  

  // Filter routes with breadcrumb handle
  const crumbs = matches// Get the current route matches
    .filter((match) => match.handle?.breadcrumb)// Filter routes with breadcrumb handle finde breadcrums routi from we put in handle in app.jsx
    .map((match, index, array) => {// Map over the filtered routes
      const isLast = index === array.length - 1;// Check if it's the last route

      // Resolve breadcrumb label (string or function)
      const label =
        typeof match.handle.breadcrumb === "function"// Check if breadcrumb is a function
          ? match.handle.breadcrumb(match)// Call the function we asained this function in app.jsx
          : match.handle.breadcrumb;// Use the string

      return isLast ? (// If it's the last route
        <span className="inline-flex items-center gap-3"  key={match.pathname}>{label}</span>// Render the label
      ) : (
        <span className="inline-flex items-center gap-3" key={match.pathname}>
          <Link to={match.pathname}>{label}</Link> <Slash size={20} />{" "}
        </span>
      );
    });
   
    

  return <nav className="flex gap-3 items-center">{crumbs}</nav>;// Render the breadcrumbs
};

export default React.memo(Breadcrumbs);

// access route data using useMatches hook that is an array of route objects that handle the current location params difine from app.jsx
//find the route with breadcrumb handle
// check if it's the last route store it in a variable and render it
//finde route is fuction or string if fuction call it and if string render it 
// check if it's the last route no link and return the label 
//map running each values in the array

// crumbs = [
//   <span><Link to="/">Home</Link> / </span>,
//   <span><Link to="/settings">Settings</Link> / </span>,
//   <span>Profile</span>
// ];

