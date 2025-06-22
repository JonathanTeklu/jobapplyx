import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // or however you're managing auth
    navigate("/");
  };

  return (
    <div className="main-container">
      <header className="main-header">
        <div className="main-logo" onClick={() => navigate("/")}>
          Snagged
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <main className="main-content">
        <h1>Welcome to Snagged</h1>
        <p>This is your main dashboard after logging in.</p>
        {/* Add user-specific content or features here */}
      </main>
    </div>
  );
};

export default MainPage;
