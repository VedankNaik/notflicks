import React, { useState, useContext } from "react";
import { Link as ReachRouterLink, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";
import * as ROUTES from "../../constants/routes";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Forms.css";

function Signin() {
  const navigate = useNavigate();
  const {auth } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (event) => {

    event.preventDefault();
    return signInWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        navigate(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <div className="Forms__Container">
      <h1 className="Forms__Title">Sign In</h1>
      {error && <div className="Forms__Error">{error}</div>}

      <form className="Forms__Base" onSubmit={handleSignin} method="POST">
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
          Sign In
        </button>
      </form>

      <p className="Forms__Text">
        New to Netflix?{" "}
        <ReachRouterLink to="/signup" className="Forms__Link">
          Sign up now.
        </ReachRouterLink>
      </p>
      <p className="Forms__TextSmall">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </p>
    </div>
  );
}

export default Signin;
