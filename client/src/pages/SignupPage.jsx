import React, { useState } from 'react';
import '../App.css';

const SignupPage = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isValidPassword(password)) {
      setError(
        'Password must be at least 8 characters, include an uppercase letter, a number, and a special character.'
      );
      return;
    }

    setError('');
    console.log(`Signing up as ${role}:`, { email, password });
    // Backend API call goes here
  };

  const handleGoogleSignup = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div className="role-toggle">
          <button
            type="button"
            className={role === 'student' ? 'active-role' : ''}
            onClick={() => setRole('student')}
          >
            Student
          </button>
          <button
            type="button"
            className={role === 'assistant' ? 'active-role' : ''}
            onClick={() => setRole('assistant')}
          >
            Assistant
          </button>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <div className="error">{error}</div>}

        <button type="submit">Sign Up</button>

        <div className="or-divider">or</div>

        <button
          type="button"
          className="google-button"
          onClick={handleGoogleSignup}
        >
          Sign up with Google
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
