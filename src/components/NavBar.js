import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f8f9fa" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/submit-review">Submit Review</Link>
        </li>
        <li>
          <button onClick={handleLogout} style={{ cursor: "pointer" }}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
