import React from "react";
import Auth from "../auth/Auth";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

const PrivateRouter = () => {
  return Auth.signIn() ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <>
      {alert("Silahkan Login dulu !!")}
      <Navigate to={"/"} replace />
    </>
  );
};

export default PrivateRouter;
