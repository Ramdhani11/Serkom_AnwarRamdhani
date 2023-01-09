import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Auth from "../auth/Auth";

const ProtectedRouter = () => {
  return Auth.signIn() ? <Navigate to={"/dashboard"} replace /> : <Outlet />;
};

export default ProtectedRouter;
