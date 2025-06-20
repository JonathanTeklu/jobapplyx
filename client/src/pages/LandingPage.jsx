import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-application.png'; // Save image in /client/src/assets/

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b1539] to-[#2d225b] text-white flex flex-col items-center justify-center px-6 py-10">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center max-w-6xl mx-auto mb-10">
        <div className="text-white font-extrabold text-2xl bg-black rounded-full px-4 py-1">snagged</div>
        <div className="space-x-6 text-sm">
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full gap-10">
        {/* Left Text */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Get Internships,<br /> <span className="text-white">Snagged</span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            We use cheap overseas labor to apply to internships for students, so you can land more interviews with less effort.
          </p>
          <div className="space-x-4">
            <Link to="/signup">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded font-semibold">
                Get Started
              </button>
            </Link>
            <Link to="/learn-more">
              <button className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-md">
          <img src={heroImage} alt="Internship Application Illustration" className="w-full" />
        </div>
      </div>
    </div>
  );
}
