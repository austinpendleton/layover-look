import React, { useState } from "react";
import logo from "../images/lllogo.png";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="Layover Look Logo" />
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <a href="/register" className="register-link">
          Don't have an account? Register
        </a>
      </div>
    </div>
  );
};

export default LogIn;
