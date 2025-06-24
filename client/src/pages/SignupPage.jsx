import React, { useState } from 'react';
import axios from 'axios';
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRoleChange = (role) =>
    setFormData({ ...formData, role });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="signup-container">
      <Link to="/" className="brand-link">Snagged</Link>
      <h2 className="signup-title">Create Your Snagged Account</h2>

      <div className="role-toggle">
        <button
          className={`role-button ${formData.role === 'student' ? 'active' : ''}`}
          onClick={() => handleRoleChange('student')}
          type="button"
        >
          Student
        </button>
        <button
          className={`role-button ${formData.role === 'assistant' ? 'active' : ''}`}
          onClick={() => handleRoleChange('assistant')}
          type="button"
        >
          Assistant
        </button>
      </div>

      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} required />
        <button className="submit-button" type="submit">Sign Up</button>
        <p className="link-text">Already have an account? <Link to="/login">Log in</Link></p>
      </form>
    </div>
  );
};

export default SignupPage;
