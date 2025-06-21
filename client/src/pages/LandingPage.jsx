import React from 'react';
import '../App.css';
import heroImg from '../assets/hero-application.png';

const LandingPage = () => {
  return (
    <div className="landing">
      {/* Top Navigation */}
      <nav className="top-nav">
        <div className="logo">Snagged</div>
        <div className="nav-buttons">
          <a href="/login" className="nav-btn">Login</a>
          <a href="/signup" className="nav-btn">Sign Up</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1>Snagged</h1>
          <p>
            Land more interviews with less effort — Snagged connects you with affordable help to apply for internships while you focus on what matters most.
          </p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Job Application" />
        </div>
      </header>

      <section className="features">
        <div className="feature-box">
          <h3>🌍 <strong>Global Helpers</strong></h3>
          <p>Find trusted overseas assistants to do your internship applications for you — faster and cheaper than you'd expect.</p>
        </div>
        <div className="feature-box">
          <h3>💸 <strong>Price Flexibility</strong></h3>
          <p>Every budget, every preference — you decide how much you're willing to pay. If one helper's rate is too high, browse others.</p>
        </div>
        <div className="feature-box">
          <h3>🤝 <strong>Like a Social Network</strong></h3>
          <p>Think Fiverr meets LinkedIn — but built for job application help. Review profiles, chat with helpers, and get your apps submitted stress-free.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Snagged • <a href="/about">About</a> • <a href="/contact">Contact</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
