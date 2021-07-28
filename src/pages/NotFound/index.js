import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>Page not found</div>
      <div>This page is deprecated, deleted, or does not exist at all</div>
      <div>404 —</div>
      <Link to='/'>Go App</Link>
    </div>
  );
};

export default NotFound;
