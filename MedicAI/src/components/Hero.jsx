import React from 'react';
import { Heart, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <style>{`
        .slide-in-left {
          opacity: 0;
          transform: translateX(-60px);
          animation: slideInLeft 3s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 slide-in-left">
          Smart Notes for Smarter
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500"> Health Decisions</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed slide-in-left" style={{ animationDelay: '0.3s' }}>
          Simplifying every symptom, diagnosis, and treatment — one note at a time.
          Built for humans, not just healthcare.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 animate-fade-in">
          <div className="flex items-center space-x-2 text-gray-600">
            <Shield className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium">Medical-Grade Security</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="text-sm font-medium">Designed with Patients in Mind</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">Trusted by 10,000+ Users</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
