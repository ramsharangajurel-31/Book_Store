import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("auth-token");
  
  // If there's no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }
  
  // If token exists, render the protected component
  return children;
};

export default ProtectedRoute;
