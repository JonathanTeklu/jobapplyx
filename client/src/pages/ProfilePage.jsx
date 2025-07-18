// Editable user profile - merge conflicts resolved
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../assets/default-avatar.png';

const ProfilePage = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const [username, setUsername] = useState(storedUser?.name || '');
  const [email, setEmail] = useState(storedUser?.email || '');
  const [profilePic, setProfilePic] = useState(defaultAvatar);
  const [bio, setBio] = useState(storedUser?.bio || '');
  const [major, setMajor] = useState(storedUser?.major || '');
  const [location, setLocation] = useState(storedUser?.location || '');
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
    // In real deployment, this would send a PATCH to the backend
    localStorage.setItem(
      'user',
      JSON.stringify({ name: username, email, bio, major, location })
    );
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
        <div className="profile-image-container">
          <img src={profilePic} alt="Profile" className="profile-avatar" />
          <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
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
        <input
          type="text"
          placeholder="Major"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          rows="3"
        />

        <button type="submit" className="submit-button">Save Changes</button>
        <button type="button" className="primary-btn" onClick={handleResetPassword}>Reset Password</button>
        <button type="button" className="primary-btn" onClick={handleLogout}>Logout</button>

        {message && <p className="message-success">{message}</p>}
        <p className="profile-rating">⭐ 4.5/5 from 10 reviews</p>
      </form>
    </div>
  );
};

export default ProfilePage;
