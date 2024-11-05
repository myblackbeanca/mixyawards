import React from 'react';
import { Award, ChevronDown, Calendar, MapPin } from 'lucide-react';

export function Hero() {
  const scrollToNominate = () => {
    const nominateSection = document.getElementById('nominate');
    nominateSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <Award className="h-24 w-24 text-purple-500 mx-auto animate-pulse" />
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MIXY Awards 2025
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Celebrate the Art of Mixing. Discover and Nominate the Curators Shaping Tomorrow's Music.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              <span>February 14, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-500" />
              <span>New York City</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToNominate}
              className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Nominate Now
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full font-bold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          <p className="text-sm text-purple-400">
            *Exclusive event for MINY holders only
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-500" />
        </div>
      </div>
    </section>
  );
}