import React from "react";
import { Link, useMatches } from "react-router-dom";

const Breadcrumbs = () => {
  const matches = useMatches();

  // Filter routes with breadcrumb handle
  const crumbs = matches
    .filter((match) => match.handle?.breadcrumb)
    .map((match, index, array) => {
      const isLast = index === array.length - 1;

      // Resolve breadcrumb label (string or function)
      const label =
        typeof match.handle.breadcrumb === "function"
          ? match.handle.breadcrumb(match)
          : match.handle.breadcrumb;

      return isLast ? (
        <span key={match.pathname}>{label}</span>
      ) : (
        <span key={match.pathname}>
          <Link to={match.pathname}>{label}</Link> /{" "}
        </span>
      );
    });

  return <nav>{crumbs}</nav>;
};

export default Breadcrumbs;

