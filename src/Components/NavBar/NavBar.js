import React, { useState, useEffect } from "react";

import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrolly > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <p className="nav__logo">NOTFLICKS</p>
      <img
        className="nav__avatar"
        src="https://img.icons8.com/color/48/000000/user.png"
        alt="avatar"
      />
    </div>
  );
}

export default NavBar;
