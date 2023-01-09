import React from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import Auth from "../auth/Auth";
const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Link />
        <ul>
          <li>
            <Link to={"user"}>User</Link>
          </li>
          <li>
            <Link to={"tarif"}>Tarif</Link>
          </li>
          <li>
            <Link to={"pelanggan"}>Pelanggan</Link>
          </li>
          <li>
            <Link to={"tagihan"}>Tagihan</Link>
          </li>
          <li style={{ cursor: "pointer" }}>
            <div onClick={() => Auth.signOut({ navigate })}>Logout</div>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
