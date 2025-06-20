import React from 'react';
import '../App.css';
import heroImg from '../assets/hero-application.png';

const LandingPage = () => {
  return (
    <div className="landing">
      <header className="hero">
        <div className="hero-text">
          <h1>Snagged</h1>
          <p>Your all-in-one job application platform. Built for students, loved by everyone.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Job Application" />
        </div>
      </header>

      <section className="features">
        <div className="feature-box">
          <h3>🧠 <strong>Smart Matching</strong></h3>
          <p>Snagged recommends jobs tailored to your profile using intelligent filters.</p>
        </div>
        <div className="feature-box">
          <h3>⚡ <strong>Quick Apply</strong></h3>
          <p>Apply to multiple listings in seconds. Boost your response rate effortlessly.</p>
        </div>
        <div className="feature-box">
          <h3>📈 <strong>Progress Tracker</strong></h3>
          <p>Track every job you’ve applied to — follow up and stay organized.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Snagged • <a href="/about">About</a> • <a href="/contact">Contact</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
