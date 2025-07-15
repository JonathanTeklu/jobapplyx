// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (!savedUser) {
      navigate('/login');
    } else {
      setUser(savedUser);
      setFormData(savedUser);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem('user', JSON.stringify(formData));
    setEditing(false);
  };

  if (!user) return null;

  return (
    <div className="signup-container">
      <h2 className="signup-title">Your Profile</h2>
      <div className="signup-form">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            readOnly={!editing}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!editing}
          />
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            readOnly={!editing}
          />
        </div>
        {editing ? (
          <button className="submit-button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="submit-button" onClick={() => setEditing(true)}>
            Edit Profile
          </button>
        )}
        <button
          className="submit-button"
          style={{ backgroundColor: '#ccc', color: '#000' }}
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
