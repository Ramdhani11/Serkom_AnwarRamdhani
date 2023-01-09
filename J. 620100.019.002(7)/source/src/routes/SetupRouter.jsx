import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pelanggan from "../pages/Pelanggan";
import Tagihan from "../pages/Tagihan";
import Tarif from "../pages/Tarif";
import User from "../pages/User";
import PrivateRouter from "./PrivateRouter";
import ProtectedRouter from "./ProtectedRouter";

const SetupRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRouter />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="tarif" element={<Tarif />} />
          <Route path="pelanggan" element={<Pelanggan />} />
          <Route path="tagihan" element={<Tagihan />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default SetupRouter;
