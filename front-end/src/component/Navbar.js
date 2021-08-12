/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Navbar ()  {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container">
    <a className="navbar-brand" href="#">MyStore</a>
   
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto " >
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
   
    </div>
  );
};
export default Navbar;
