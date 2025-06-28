// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.user.role); // Store role for MainPage
      navigate('/main');
    } catch (error) {
      if (error.response && error.response.data?.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <Link to="/" className="brand-link">Snagged</Link>
      <h2 className="signup-title">Welcome Back</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        {errorMsg && <div className="error-message">{errorMsg}</div>}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="submit-button"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <button
          type="button"
          className="google-login-button"
          onClick={() => window.location.href = 'http://localhost:5000/auth/google'}
        >
          Continue with Google
        </button>

        <p className="link-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
        <p className="link-text">
          <Link to="/forgot-password">Forgot your password?</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
