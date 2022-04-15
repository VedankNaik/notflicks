import React, { useState, useEffect, useContext } from "react";
import Profile from "../Profile/Profile";
import Loading from "../Loading/Loading";
import Header from "../Header/Header";
import HeaderBrowse from "../Header/HeaderBrowse";
import Row from "../Row/Row";
import requests from "../../requests";
import { FirebaseContext } from "../../context/firebase";

function Browsing() {
  const { auth } = useContext(FirebaseContext);
  const user = auth.currentUser || {};

  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <div>
      <div>
        {loading ? (
          <Loading picture={user.photoURL} loading={"LockBody"} />
        ) : (
          <Loading picture={user.photoURL} loading={"ReleaseBody"} />
        )}
      </div>
      <Header children={<HeaderBrowse />} />
      <div style={{ marginBottom: "20px" }}></div>
      <Row title="Top 250 Movies" url={requests.top250movies} />
      <Row title="Top 250 TV" url={requests.top250TV} />
      <Row title="Popular Movies" url={requests.popularMovies} />
      <Row title="Popular TV" url={requests.popularTV} />
      <Row title="In Theaters" url={requests.intheaters} />
      <Row title="Coming Soon" url={requests.comingSoon} />
      <Row title="Box Office" url={requests.boxOffice} />
      <Row title="Box Office All Time" url={requests.boxOfficeAllTime} />
    </div>
  ) : (
    <Profile user={user} setProfile={setProfile} />
  );
}

export default Browsing;
