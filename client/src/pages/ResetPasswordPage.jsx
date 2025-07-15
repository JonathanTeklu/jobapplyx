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
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/reset-password/${token}`, {
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
    <div className="signup-container" style={{ padding: '2rem', backgroundColor: '#fff', color: '#000' }}>
      <h2 style={{ fontFamily: "'Ubuntu', sans-serif", marginBottom: '1rem' }}>Set New Password</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{
            padding: '0.75rem',
            marginBottom: '1rem',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '8px',
            width: '100%',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontFamily: "'Ubuntu', sans-serif",
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
          }}
        >
          Reset Password
        </button>
        {message && <p style={{ marginTop: '1rem', fontFamily: "'Ubuntu', sans-serif" }}>{message}</p>}
      </form>
    </div>
  );
};

export default ResetPasswordPage;
