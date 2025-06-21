import React, { useState } from 'react';
import '../App.css'; // Adjust path if needed

const SignupPage = () => {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    // Simple email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // At least one uppercase, one number, one special character, and 8+ characters
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

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
    // Proceed to backend call here
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <label htmlFor="role">Select Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="signup-select"
        >
          <option value="student">Student</option>
          <option value="assistant">Assistant</option>
        </select>

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
      </form>
    </div>
  );
};

export default SignupPage;
