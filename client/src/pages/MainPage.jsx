// Dashboard with role-based views - conflicts resolved and merged
import React, { useEffect, useState, useCallback } from 'react';
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
      {role === 'student' ? <StudentDashboard /> : role === 'snagger' ? <SnaggerDashboard /> : <div>Unauthorized</div>}
    </div>
  );
};

const StudentDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Find Snaggers to Handle Your Applications</h2>
        <p>Browse profiles of experienced snaggers who can help with your job applications.</p>
        <button className="primary-btn" onClick={() => navigate('/tasks/new')}>Post a Request</button>
      </aside>
      <main className="dashboard-main">
        <h1>Featured Snaggers</h1>
        <div className="assistant-grid">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="assistant-profile">
              <img src={`https://via.placeholder.com/100?text=S${id}`} alt={`Snagger ${id}`} />
              <h3>Snagger #{id}</h3>
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
};

const SnaggerDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({ minBudget: '', location: '', major: '', campus: '' });
  const token = localStorage.getItem('token');

  const fetchTasks = useCallback(async () => {
    const params = new URLSearchParams();
    if (filters.minBudget) params.append('minBudget', filters.minBudget);
    if (filters.location) params.append('location', filters.location);
    if (filters.major) params.append('major', filters.major);
    if (filters.campus) params.append('campus', filters.campus);

    try {
      const res = await fetch(`https://snagged.onrender.com/api/tasks?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error('fetch tasks error', err);
    }
  }, [filters, token]);

  useEffect(() => { fetchTasks(); }, [fetchTasks]);

  const handleChange = (e) => setFilters({ ...filters, [e.target.name]: e.target.value });
  const handleFilter = (e) => { e.preventDefault(); fetchTasks(); };

  const claimTask = async (id) => {
    await fetch(`https://snagged.onrender.com/api/tasks/${id}/claim`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks();
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Filter Tasks</h2>
        <form onSubmit={handleFilter} className="signup-form">
          <input name="minBudget" type="number" placeholder="Min Budget" value={filters.minBudget} onChange={handleChange} />
          <input name="location" type="text" placeholder="Location" value={filters.location} onChange={handleChange} />
          <input name="major" type="text" placeholder="Major" value={filters.major} onChange={handleChange} />
          <input name="campus" type="text" placeholder="Campus" value={filters.campus} onChange={handleChange} />
          <button className="primary-btn" type="submit">Apply</button>
        </form>
      </aside>
      <main className="dashboard-main">
        <h1>Open Tasks</h1>
        <div className="assistant-grid">
          {tasks.map((task) => (
            <div key={task._id} className="assistant-profile">
              <h3>{task.student?.name}</h3>
              <p>{task.numberOfApplications} apps — ${task.budget}</p>
              <button onClick={() => claimTask(task._id)}>Claim</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainPage;
