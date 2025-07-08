import React from 'react';
import { Link } from 'react-router-dom';
import './Home1.css'; // 👈 custom styles for bounce-once

const Home1 = () => {
  return (
    <div className="relative isolate px-6 pt-6 lg:px-8 animate-fade-in">
      {/* Background Blur Blob - Top */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] 
          bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 
          sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] animate-pulse"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl py-12 sm:py-20 lg:py-24 animate-fade-in">
        <div className="flex justify-center mb-6">
          <img
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg animate-bounce-once"
            src="/logo.png"
            alt="MindNest Logo"
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-fade-in">
            Welcome to MindNest.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in">
            MindNest is your safe digital space to pause, breathe, and heal. 🌿 Let’s journey together toward mental well-being 💚.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/aboutus" className="text-sm font-semibold leading-6 text-gray-900 hover:scale-105 transition-transform">
              About Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
