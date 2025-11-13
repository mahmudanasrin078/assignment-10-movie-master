import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
 // console.log(location);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }
  //if user thaken return  children

  if (user && user?.email) {
    return children;
  }
  return (
    <Navigate to="/login-pages" state={location.pathname} replace></Navigate>
  );
  //   if (!user) {
  //     return <Navigate to="/login-pages" state={location.pathname}></Navigate>;
  //   }
};

export default PrivateRoute;
