import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', res.data.token);
      navigate('/main');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="signup-container">
      <Link to="/" className="brand-link">Snagged</Link>
      <h2 className="signup-title">Welcome Back</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className="submit-button" type="submit">Log In</button>
        <p className="link-text">Don’t have an account? <Link to="/signup">Sign up</Link></p>
        <p className="link-text"><a href="#">Forgot your password?</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
