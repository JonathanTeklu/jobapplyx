import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  if (!role) return <div>Loading...</div>;

  return (
    <div className="main-dashboard">
      <nav className="navbar">
        <div className="logo">Snagged</div>
        <div className="nav-links">
          <button onClick={() => navigate('/')} className="nav-button">Home</button>
          <button onClick={() => navigate('/messages')} className="nav-button">Messages</button>
          <button onClick={() => navigate('/profile')} className="nav-button">Profile</button>
        </div>
      </nav>
      {role === 'student' ? <StudentDashboard /> : role === 'assistant' ? <AssistantDashboard /> : <div>Unauthorized</div>}
    </div>
  );
};

const StudentDashboard = () => (
  <div className="dashboard-container">
    <aside className="sidebar">
      <h2>Find Application Assistants for Your Job Search</h2>
      <p>Browse profiles of experienced assistants who can help with your job applications.</p>
      <button className="primary-btn">Post a Request</button>
    </aside>
    <main className="dashboard-main">
      <h1>Featured Application Assistants</h1>
      <div className="assistant-grid">
        {[1, 2, 3, 4].map((id) => (
          <div key={id} className="assistant-profile">
            <img src={`https://via.placeholder.com/100?text=A${id}`} alt={`Assistant ${id}`} />
            <h3>Assistant #{id}</h3>
            <p>Application Specialist</p>
            <p className="rating">⭐ 4.{id} stars</p>
            <p>20+ applications completed</p>
            <button>Message</button>
          </div>
        ))}
      </div>
    </main>
  </div>
);

const AssistantDashboard = () => (
  <div className="dashboard-container">
    <aside className="sidebar">
      <h2>Find Students Looking for Help</h2>
      <p>Offer assistance and help students apply to jobs and internships.</p>
      <button className="primary-btn">Browse Requests</button>
    </aside>
    <main className="dashboard-main">
      <h1>Available Student Requests</h1>
      <div className="assistant-grid">
        {[1, 2].map((id) => (
          <div key={id} className="assistant-profile">
            <h3>Student #{id}</h3>
            <p>Needs help with 10 internship applications.</p>
            <button>Offer Help</button>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default MainPage;
