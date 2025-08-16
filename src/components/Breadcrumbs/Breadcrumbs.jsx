import { Slash } from "lucide-react";
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
        <span className="inline-flex items-center gap-3" key={match.pathname}>{label}</span>
      ) : (
        <span className="inline-flex items-center gap-3" key={match.pathname}>
          <Link to={match.pathname}>{label}</Link> <Slash size={20} />{" "}
        </span>
      );
    });

  return <nav className="flex gap-3 items-center">{crumbs}</nav>;
};

export default Breadcrumbs;

