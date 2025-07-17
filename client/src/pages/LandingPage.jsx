import React from 'react';
import '../App.css';
import heroImg from '../assets/hero-application.png';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800 text-gray-200 font-sans">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">Snagged</div>
        <div className="space-x-4">
          <a href="/login" className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition">Login</a>
          <a href="/signup" className="px-4 py-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-300 transition">Sign Up</a>
        </div>
      </nav>

      <header className="flex flex-col items-center text-center flex-grow px-6 mt-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>Snagged</h1>
        <p className="max-w-xl mb-6 text-gray-300 text-lg opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Apply like a boss without lifting a finger. Snagged pairs you with fellow students ready to grind through applications so you can vibe and study.
        </p>
        <a href="/signup" className="px-6 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 shadow-lg transition opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Get Started
        </a>
        <img src={heroImg} alt="Job Application" className="w-full max-w-md mt-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }} />
      </header>

      <section className="grid gap-6 md:grid-cols-3 px-6 py-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <div className="bg-gray-900/50 rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">🌍 Global Snaggers</h3>
          <p>Find trusted Snaggers worldwide to knock out your internship apps — way faster and cheaper than doing it solo.</p>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">💸 Price Flexibility</h3>
          <p>Every budget, every preference — you decide how much you're willing to pay. If one helper's rate is too high, browse others.</p>
        </div>
        <div className="bg-gray-900/50 rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">🤝 Like a Social Network</h3>
          <p>Think Fiverr meets LinkedIn — but built for job applications. Scope profiles, chat with Snaggers, and get your apps sent stress-free.</p>
        </div>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 Snagged • <a href="/about" className="hover:underline">About</a> • <a href="/contact" className="hover:underline">Contact</a>
      </footer>
    </div>
  );
};

export default LandingPage;
