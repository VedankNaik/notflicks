import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../requests";
import data from "../data.js";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);
  // const movie = data.items[1];

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.top250movies);
      setMovie(
        request.data.items[
          Math.floor(Math.random() * request.data.items.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${movie.image})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.fullTitle}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {movie?.fullTitle}, {movie?.crew}, {movie?.imDbRating}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
