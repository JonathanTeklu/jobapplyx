// Student-only task creation form - merge conflicts resolved
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const PostTaskPage = () => {
  const [formData, setFormData] = useState({
    numberOfApplications: '',
    resumeLink: '',
    jobTypePreference: '',
    locationPreference: '',
    campus: '',
    major: '',
    deadline: '',
    budget: '',
    notes: '',
  });

  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  if (role !== 'student') {
    return <div className="signup-container">Unauthorized</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const res = await fetch('https://snagged.onrender.com/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        navigate('/main');
      } else {
        alert('Failed to post task');
      }
    } catch (err) {
      console.error('post task error', err);
      alert('Server error');
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Post a Task</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="numberOfApplications"
          placeholder="Number of applications"
          value={formData.numberOfApplications}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="resumeLink"
          placeholder="Resume Google Drive link"
          value={formData.resumeLink}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="jobTypePreference"
          placeholder="Preferred job type"
          value={formData.jobTypePreference}
          onChange={handleChange}
        />
        <input
          type="text"
          name="locationPreference"
          placeholder="Preferred location"
          value={formData.locationPreference}
          onChange={handleChange}
        />
        <input
          type="text"
          name="campus"
          placeholder="Campus"
          value={formData.campus}
          onChange={handleChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={formData.major}
          onChange={handleChange}
        />
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          placeholder="Additional notes"
          value={formData.notes}
          onChange={handleChange}
          rows="3"
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget in USD"
          value={formData.budget}
          onChange={handleChange}
          required
        />
        <button className="submit-button" type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default PostTaskPage;
