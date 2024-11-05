import React from 'react';
import { Star, Heart, Award, Play, Share2 } from 'lucide-react';

export function FeaturedNominations() {
  const nominations = [
    {
      curator: "DJ Harmony",
      mixtape: "Neon Dreams Vol. 2",
      category: "The Midas Touch",
      quote: "Consistently discovering tomorrow's hits today.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      votes: 2345,
      likes: 892
    },
    {
      curator: "BeatMaster Pro",
      mixtape: "Urban Fusion",
      category: "The Best Grinder",
      quote: "Blending genres in ways never heard before.",
      image: "https://images.unsplash.com/photo-1571397133301-3f838ea96f56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      votes: 1987,
      likes: 654
    },
    {
      curator: "Soundscape",
      mixtape: "Ethereal Waves",
      category: "Fan Favorite",
      quote: "Creating musical journeys that transport listeners.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      votes: 3102,
      likes: 1243
    }
  ];

  return (
    <section id="featured" className="py-24 bg-gradient-to-b from-purple-900/20 to-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Nominations</h2>
          <p className="text-xl text-gray-400">
            Discover some of our outstanding nominees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nominations.map((nom, index) => (
            <div key={index} className="group">
              {/* Hexagon Image Container */}
              <div className="relative w-full aspect-square mb-4">
                <div className="hexagon h-full">
                  <img
                    src={nom.image}
                    alt={`${nom.mixtape} by ${nom.curator}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <Award className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 transform group-hover:-translate-y-2 transition-all duration-300">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{nom.curator}</h3>
                  <p className="text-purple-400 text-lg">{nom.mixtape}</p>
                </div>

                {/* Quote */}
                <p className="text-gray-300 italic mb-6">"{nom.quote}"</p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="text-yellow-400">{nom.votes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <span className="text-red-400">{nom.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                    {nom.category}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-full font-semibold transition-colors">
                    <Play className="h-4 w-4" />
                    Listen Now
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-full font-semibold transition-colors">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}