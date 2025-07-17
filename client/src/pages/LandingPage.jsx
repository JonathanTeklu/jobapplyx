import React from 'react';
import '../App.css';
import heroImg from '../assets/hero-application.png';

const LandingPage = () => {
  return (
    <div className="landing">
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
            Apply like a boss without lifting a finger. Snagged pairs you with fellow students ready to grind through applications so you can vibe and study.
          </p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Job Application" />
        </div>
      </header>

      <section className="features">
        <div className="feature-box">
          <h3>🌍 <strong>Global Snaggers</strong></h3>
          <p>Find trusted Snaggers worldwide to knock out your internship apps — way faster and cheaper than doing it solo.</p>
        </div>
        <div className="feature-box">
          <h3>💸 <strong>Price Flexibility</strong></h3>
          <p>Every budget, every preference — you decide how much you're willing to pay. If one helper's rate is too high, browse others.</p>
        </div>
        <div className="feature-box">
          <h3>🤝 <strong>Like a Social Network</strong></h3>
          <p>Think Fiverr meets LinkedIn — but built for job applications. Scope profiles, chat with Snaggers, and get your apps sent stress-free.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Snagged • <a href="/about">About</a> • <a href="/contact">Contact</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
