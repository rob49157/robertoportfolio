import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div className="navbar">
      <div className="toggleButton" id={expandNavbar ? "open" : "close" }>
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
