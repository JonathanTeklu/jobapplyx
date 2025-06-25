// src/pages/MainPage.jsx
import React, { useEffect, useState } from 'react';

const MainPage = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  if (!role) return <div>Loading...</div>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      {role === 'student' ? (
        <StudentDashboard />
      ) : role === 'assistant' ? (
        <AssistantDashboard />
      ) : (
        <div>Unauthorized</div>
      )}
    </div>
  );
};

const StudentDashboard = () => (
  <div>
    <h1>Welcome, Student! 🎓</h1>
    <p>Apply to jobs, track progress, and connect with assistants.</p>
  </div>
);

const AssistantDashboard = () => (
  <div>
    <h1>Welcome, Assistant! 🧑‍🏫</h1>
    <p>Browse student requests and offer application help.</p>
  </div>
);

export default MainPage;
