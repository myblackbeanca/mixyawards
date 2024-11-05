import React from 'react';
import { Award, Star, Share2, ArrowRight, MessageCircle, Play } from 'lucide-react';
import { categories } from '../data/categories';
import { useParams } from 'react-router-dom';

export function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find(c => c.name.toLowerCase().replace(/\s+/g, '-') === categoryId);

  if (!category) return <div>Category not found</div>;

  const getCategoryImage = () => {
    switch (category.name) {
      case "The Midas Touch":
        return "https://images.unsplash.com/photo-1514525253161-7a46d19cd819";
      case "The Best Grinder":
        return "https://images.unsplash.com/photo-1571397133301-3f838ea96f56";
      default:
        return "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04";
    }
  };

  const nominees = [
    {
      curator: "SoundScape",
      mixtape: "Neon Nights Vol. 2",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      description: "A journey through electronic soundscapes",
      votes: 1234,
      comments: 89
    },
    {
      curator: "BeatMaster",
      mixtape: "Future Fusion",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      description: "Blending genres in unexpected ways",
      votes: 987,
      comments: 56
    },
    {
      curator: "Vinyl Virtuoso",
      mixtape: "Retro Redux",
      image: "https://images.unsplash.com/photo-1571397133301-3f838ea96f56",
      description: "Classic sounds reimagined",
      votes: 856,
      comments: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${getCategoryImage()})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            {category.icon}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <Award className="h-12 w-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">Selection Criteria</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Innovative approach to playlist curation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Impact on the music community</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <span>Consistency in quality</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">How to Win</h3>
              <p className="text-gray-300 mb-6">
                Stand out in this category by showcasing your unique approach to music curation
                and demonstrating consistent excellence in your mixtapes.
              </p>
              <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                Learn More <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Important Dates</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold">Nominations Close</p>
                  <p>January 5, 2025</p>
                </div>
                <div>
                  <p className="font-semibold">Awards Ceremony</p>
                  <p>February 14, 2025</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>New York City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Nominees */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Nominees</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {nominees.map((nominee, index) => (
              <div key={index} className="group">
                <div className="relative w-full aspect-square mb-4">
                  <div className="hexagon">
                    <img
                      src={nominee.image}
                      alt={nominee.mixtape}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="hexagon-content">
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold">{nominee.mixtape}</h3>
                        <p className="text-purple-400">by {nominee.curator}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-gray-300 mb-4">{nominee.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">{nominee.votes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{nominee.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30">
                        <Play className="h-4 w-4" />
                      </button>
                      <button className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Nominate for {category.name}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}