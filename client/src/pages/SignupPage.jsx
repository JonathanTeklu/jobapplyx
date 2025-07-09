import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('form submitted');

    try {
      const res = await fetch('https://snagged.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', formData.role);
        navigate('/main');
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error connecting to server');
    }
  };

  return (
    <div className="signup-container">
      {/* ✅ Logo inside container */}
      <Link to="/" className="logo" style={{ marginBottom: '1rem', display: 'inline-block' }}>
        Snagged
      </Link>

      <h2 className="signup-title">Sign Up</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <select name="role" onChange={handleChange} required>
          <option value="student">Student</option>
          <option value="assistant">Assistant</option>
        </select>
        <button className="submit-button" type="submit">
          Create Account
        </button>
      </form>

      <button
        type="button"
        className="google-login-button"
        onClick={() => window.location.href = 'https://snagged.onrender.com/auth/google'}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          className="google-logo"
        />
        Continue with Google
      </button>

      <p className="link-text">
        Already have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  );
};

export default SignupPage;
