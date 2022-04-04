import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { userContext } = useContext(AppContext);
  const [user] = userContext;
  let location = useLocation();
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
