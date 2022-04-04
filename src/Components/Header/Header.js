import React from "react";
import "./Header.css";
import { Link as ReachRouterLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="Header__Background">
      <div className="Header__Container">
        <div className="Header__Logo">NOTFLICKS</div>
        <ReachRouterLink to="/" className="Header__ButtonLink">
          Sign In
        </ReachRouterLink>
      </div>
      {props.children}
    </div>
  );
}

export default Header;
