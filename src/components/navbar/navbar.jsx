import React from "react";
import "./navbar.css";
import Button from "../button/button";

const Navbar = () => {

  return (
    <div className="navbar">
      <h3 className="getlinked">
        get<span>Linked</span>
      </h3>
      <div className="navcontainer">
        <ul className="navlinks">
          <li className="navlink">Timeline</li>
          <li className="navlink">Overview</li>
          <li className="navlink">FAQs</li>
          <li className="navlink">Contact</li>
        </ul>
        <div>
          <Button name="Register" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
