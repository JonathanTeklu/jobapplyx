import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://snagged.onrender.com/api/auth/forgot-password', {
        email,
      });
      setMessage(res.data.message || 'Reset email sent if user exists.');
    } catch {
      setMessage('Something went wrong.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Reset Your Password</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="primary-btn" type="submit">Send Reset Link</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
