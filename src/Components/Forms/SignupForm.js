import React, { useState, useContext } from "react";
import { Link as ReachRouterLink, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";
import * as ROUTES from "../../constants/routes";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Forms.css";

function Signup() {
  const navigate = useNavigate();
  const { auth } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    return createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((result) =>
        updateProfile(result.user, {
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(() => {
          navigate(ROUTES.BROWSE);
        })
      )
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <div className="Forms__Container">
      <h1 className="Forms__Title">Sign Up</h1>
      {error && <div className="Forms__Error">{error}</div>}

      <form className="Forms__Base" onSubmit={handleSignup} method="POST">
        <input
          className="Forms__Input"
          placeholder="First name"
          value={firstName}
          onChange={({ target }) => setFirstName(target.value)}
        />
        <input
          className="Forms__Input"
          placeholder="Email address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <input
          className="Forms__Input"
          type="password"
          value={password}
          autoComplete="off"
          placeholder="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button className="Forms__Submit" disabled={isInvalid} type="submit">
          Sign Up
        </button>
      </form>

      <p className="Forms__Text">
        Already a user?{" "}
        <ReachRouterLink to="/signin" className="Forms__Link">
          Sign in now.
        </ReachRouterLink>
      </p>
      <p className="Forms__SmallText">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </p>
    </div>
  );
}

export default Signup;
