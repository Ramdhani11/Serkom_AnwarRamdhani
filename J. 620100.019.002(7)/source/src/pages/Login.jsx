import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { datas } from "../data/Data";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === datas.email) {
      if (password === datas.password) {
        alert("Anda Berhasil Login");
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        setEmail("");
        setPassword("");
        navigate("/dashboard");
      } else {
        alert("Password anda salah");
        setPassword("");
      }
    } else {
      alert("Email anda salah");
      // localStorage.removeItem("email");
      // localStorage.removeItem("password");
    }
  };
  return (
    <div className="Login">
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          position: "relative",
        }}
      >
        <h3>Electricity Payment</h3>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Password "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
