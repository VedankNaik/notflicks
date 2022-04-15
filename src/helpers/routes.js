import React from "react";
import { Route, Navigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children }) {
  if (!user) {
    return children;
  }
  if (user) {
    return (
      <Navigate
        to={{
          pathname: loggedInPath,
        }}
      />
    );
  }

  return null;
}

export function ProtectedRoute({ user, children }) {
  if (user) {
    return children;
  }

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return null;
}
