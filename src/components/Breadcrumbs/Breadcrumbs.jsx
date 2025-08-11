import React from 'react'
import { useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  return (
     <nav>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={to} style={{ marginLeft: "8px" }}>
              <span> / </span>
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs