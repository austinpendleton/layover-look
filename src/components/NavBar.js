import React from "react";
import { Link } from "react-router-dom";

import "../blocks/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      {/* <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Layover Look Logo" />
        </Link>
      </div> */}
      <ul className="navbar-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <div className="navbar-auth">
        <Link to="/login" className="btn">
          Login
        </Link>
        <Link to="/register" className="btn">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
