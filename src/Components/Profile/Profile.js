import React from "react";
import "./Profile.css";

function Profile({ user, setProfile }) {

  return (
    <div className="Profile__Container">
      <h1 className="Profile__Title">Who's watching?</h1>
      <ul className="Profile__List">
        <li
          className="Profile__Item"
          onClick={() =>
            setProfile({
              displayName: user.displayName,
              photoURL: user.photoURL,
            })
          }
        >
          <img
            className="Profile__Picture"
            src={user.photoURL ? `/images/users/${user.photoURL}.png` : "/images/users/2.png"}
            alt="profile"
          />
          <p className="Profile__Name">{user.displayName}</p>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
