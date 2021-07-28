import React from 'react'
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>Page not found</div>
      <div>This page is deprecated, deleted, or does not exist at all</div>
      <div>404</div>
      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default NotFound
