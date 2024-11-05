import React from 'react';
import { Music, Sparkles, Trophy } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the MIXY Awards</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognizing excellence in music curation and celebrating the artistry behind the perfect mixtape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Music className="h-12 w-12 text-purple-500" />,
              title: "Discover Excellence",
              description: "Celebrating the most innovative and influential mixtapes that shape music culture."
            },
            {
              icon: <Trophy className="h-12 w-12 text-purple-500" />,
              title: "Honor Creativity",
              description: "Recognizing curators who push boundaries and create unforgettable musical journeys."
            },
            {
              icon: <Sparkles className="h-12 w-12 text-purple-500" />,
              title: "Inspire Future",
              description: "Supporting emerging talent and fostering the next generation of music curators."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}