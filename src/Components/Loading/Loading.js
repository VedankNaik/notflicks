import React, { useEffect } from "react";
import "./Loading.css";

function Loading({ picture, loading }) {
  useEffect(() => {
    document.body.style.overflow = loading;
  }, [loading]);

  return (
    <div>
      {loading === "LockBody" ? (
        <div className="Loading__Spinner">
          <img className="Loading__Picture" src={`/images/users/${picture}.png`} alt="profile" />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Loading;
