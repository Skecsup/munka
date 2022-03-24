import React from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  if (!user.role) {
    return <Navigate to="/" />;
  }
  return children;
};

export default AdminProtectedRoute;
