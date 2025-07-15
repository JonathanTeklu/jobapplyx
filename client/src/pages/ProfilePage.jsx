// src/pages/ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  // Mock data — replace with real user state later
  const user = {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    role: 'Student',
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=janedoe',
  };

  return (
    <div className="signup-container">
      <div style={{ textAlign: 'center' }}>
        <img
          src={user.avatar}
          alt="User Avatar"
          style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
        <h2 style={{ marginBottom: '0.5rem' }}>{user.name}</h2>
        <p style={{ marginBottom: '0.25rem' }}>{user.email}</p>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>{user.role}</p>
        <button className="primary-btn" onClick={() => navigate('/main')}>Back to Dashboard</button>
      </div>
    </div>
  );
};

export default ProfilePage;
