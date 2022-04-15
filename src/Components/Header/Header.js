import React, { useContext } from "react";
import "./Header.css";
import { Link as ReachRouterLink } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { FirebaseContext } from "../../context/firebase";
import { signOut } from "firebase/auth";

function Header(props) {
  const { auth } = useContext(FirebaseContext);
  const user = auth.currentUser || {};

  return (
    <div className="Header__Background">
      <div className="Header__Container">
        <div className="Header__Logo">NOTFLICKS</div>
        { Object.entries(user).length === 0 ? (
          <ReachRouterLink to={ROUTES.SIGN_IN} className="Header__ButtonLink">
            Sign In
          </ReachRouterLink>
        ) : (
          <div className="Header__Group">
            <div className="Header__Profile">
              <button
                style={{
                  background: `url(/images/users/${user.photoURL}.png)`,
                  backgroundSize: "contain",
                }}
                className="Header__Picture"
              />
              <div className="Header__Dropdown">
                <div className="Header__Group">
                  <button
                    style={{
                      background: `url(/images/users/${user.photoURL}.png)`,
                      backgroundSize: "contain",
                    }}
                    className="Header__Picture"
                  />
                  <p className="Header__Link">{user.displayName}</p>
                </div>
                <div className="Header__Group">
                  <p
                    className="Header__Link"
                    style={{ marginTop: "10px" }}
                    onClick={() => signOut(auth)}
                  >
                    Sign out
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
}

export default Header;
