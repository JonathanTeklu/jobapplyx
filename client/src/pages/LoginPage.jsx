import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signup-container">
      <Link to="/" className="snagged-logo-link">
        <span className="snagged-logo">Snagged</span>
      </Link>

      <h2 className="signup-title">Welcome Back to Snagged</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error">{error}</p>}

        <button className="submit-button" type="submit">Log In</button>

        <div className="login-links">
          <Link to="/forgot-password">Forgot password?</Link>
          <span> • </span>
          <Link to="/signup">Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
