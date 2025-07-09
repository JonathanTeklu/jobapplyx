// src/pages/ResetPasswordPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setMessage('Passwords do not match');
    }

    try {
      const res = await axios.post(`https://snagged.onrender.com/api/auth/reset-password/${token}`, {
        password,
      });

      setMessage(res.data.message || 'Password reset successful');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      console.error('Reset error:', err);
      setMessage(err.response?.data?.error || 'Reset failed');
    }
  };

  return (
    <div className="signup-container">
      <h2>Set New Password</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
