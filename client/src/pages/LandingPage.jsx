// src/components/LandingPage.jsx
import heroImage from '../assets/hero-application.png';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#241b36] text-white font-sans flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold bg-black px-4 py-1 rounded-full">snagged</div>
        <nav className="space-x-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#signup" className="hover:underline font-semibold">Sign Up</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-32 py-16 gap-12">
        {/* Text Content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight">
            Get Internships,<br /> Snagged
          </h1>
          <p className="text-lg text-gray-300">
            We use cheap overseas labor to apply to internships for students,
            so you can land more interviews with less effort.
          </p>
          <div className="space-x-4">
            <button className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="max-w-md w-full">
          <img
            src={heroImage}
            alt="Internship Application Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </main>
    </div>
  );
}
