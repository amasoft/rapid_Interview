import React from "react";
import { Link } from "react-router-dom";
import "./Navigationcss.css";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Result list
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/article" className="nav-link">
            Article Creation
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
