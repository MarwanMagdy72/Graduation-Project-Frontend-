import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./authContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    const redirectPath = location.state?.path || "/";
    return <Navigate to={"/login"} state={{ path: redirectPath }} />;
  }
  return children;
};

export default PrivateRoute;
