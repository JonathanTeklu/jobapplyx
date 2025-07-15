// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.png';

const ProfilePage = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!storedUser) {
      navigate('/login');
    }
  }, [storedUser, navigate]);

  const [username, setUsername] = useState(storedUser?.name || '');
  const [email, setEmail] = useState(storedUser?.email || '');
  const [profilePic, setProfilePic] = useState(defaultAvatar);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePic(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ name: username, email }));
    setMessage('Profile updated successfully');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleResetPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Profile Settings</h2>
      <form className="signup-form" onSubmit={handleSave}>
        <div style={{ textAlign: 'center' }}>
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginTop: '1rem' }} />
        </div>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="submit-button">Save Changes</button>
        <button type="button" className="primary-btn" onClick={handleResetPassword}>Reset Password</button>
        <button type="button" className="primary-btn" onClick={handleLogout}>Logout</button>

        {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
      </form>
    </div>
  );
};

export default ProfilePage;
