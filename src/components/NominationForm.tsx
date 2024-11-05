import React, { useState } from 'react';
import { Send, Info, Calendar, AlertCircle, Star, Ticket, Gift } from 'lucide-react';
import { categories } from '../data/categories';

export function NominationForm() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [submittedCount, setSubmittedCount] = useState(0);
  const [formData, setFormData] = useState({
    curatorName: '',
    curatorProfile: '',
    mixtapeName: '',
    mixtapeLink: '',
    reason: '',
    nomineeName: '',
    nomineeEmail: ''
  });

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submittedCount >= 5) {
      alert('You have reached the maximum limit of 5 mixtape submissions.');
      return;
    }
    setSubmittedCount(submittedCount + 1);
    // Reset form
    setFormData({
      curatorName: '',
      curatorProfile: '',
      mixtapeName: '',
      mixtapeLink: '',
      reason: '',
      nomineeName: '',
      nomineeEmail: ''
    });
    setSelectedCategories([]);
  };

  const remainingForExclusive = Math.max(0, 3 - submittedCount);

  return (
    <section id="nominate" className="py-24 bg-black/50" aria-labelledby="nomination-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="nomination-title" className="text-3xl md:text-4xl font-bold mb-4">
            Nominate Your Favorites
          </h2>
          <p className="text-xl text-gray-400 mb-4">
            Help us celebrate creativity and impact on Minify by nominating today
          </p>
          <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
            <Calendar className="h-5 w-5 text-purple-400" aria-hidden="true" />
            <p className="text-purple-400">
              Nominations close January 5, 2025
            </p>
          </div>
        </div>

        {/* Exclusive Access Offer */}
        <div className="mb-12 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Ticket className="h-8 w-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Exclusive MINY Access</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Nominate 3 mixtapes to join the MINY superfan community and receive:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-purple-400" />
                  Limited Edition MINY Collectible
                </li>
                <li className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-purple-400" />
                  Exclusive Access to Purchase Award Show Tickets
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-purple-400" />
                  50% Off Guest Ticket Option
                </li>
              </ul>
              <p className="mt-4 text-sm text-purple-400">
                *MINY Awards is an exclusive event for MINY community members only
              </p>
            </div>
            <div className="text-center md:text-right">
              {submittedCount >= 3 ? (
                <div className="bg-purple-500 text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  MINY Access Unlocked!
                </div>
              ) : (
                <div className="text-purple-300">
                  <p className="text-2xl font-bold mb-2">{remainingForExclusive}</p>
                  <p>more nominations needed</p>
                  <p>for exclusive access</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="curatorName" className="block text-sm font-medium text-gray-300 mb-2">
                    Curator's Name *
                  </label>
                  <input
                    type="text"
                    id="curatorName"
                    name="curatorName"
                    value={formData.curatorName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Enter curator's name"
                  />
                </div>

                <div>
                  <label htmlFor="curatorProfile" className="block text-sm font-medium text-gray-300 mb-2">
                    Curator's Profile Link (Optional)
                  </label>
                  <input
                    type="url"
                    id="curatorProfile"
                    name="curatorProfile"
                    value={formData.curatorProfile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="https://minify.com/curator/..."
                  />
                </div>

                <div>
                  <label htmlFor="mixtapeName" className="block text-sm font-medium text-gray-300 mb-2">
                    Mixtape Name *
                  </label>
                  <input
                    type="text"
                    id="mixtapeName"
                    name="mixtapeName"
                    value={formData.mixtapeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Enter mixtape name"
                  />
                </div>

                <div>
                  <label htmlFor="mixtapeLink" className="block text-sm font-medium text-gray-300 mb-2">
                    Mixtape Link *
                  </label>
                  <input
                    type="url"
                    id="mixtapeLink"
                    name="mixtapeLink"
                    value={formData.mixtapeLink}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="https://minify.com/mixtape/..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Select Category *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                          selectedCategories.includes(category.name)
                            ? 'bg-purple-500/20 border-purple-500'
                            : 'bg-black/30 border-gray-600'
                        } border`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.name)}
                          onChange={() => handleCategoryChange(category.name)}
                          className="sr-only"
                        />
                        <span className="flex items-center gap-2">
                          {category.icon}
                          <span className="text-sm">{category.name}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                    Why This Nomination? *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Tell us why this curator/mixtape deserves recognition..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="nomineeName"
                      name="nomineeName"
                      value={formData.nomineeName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="nomineeEmail" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email (Optional)
                    </label>
                    <input
                      type="email"
                      id="nomineeEmail"
                      name="nomineeEmail"
                      value={formData.nomineeEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-black/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Info className="h-4 w-4" />
                  <span>You can submit up to 5 mixtapes</span>
                </div>
                <button
                  type="submit"
                  disabled={submittedCount >= 5}
                  className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${
                    submittedCount >= 5
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-purple-500 hover:bg-purple-600'
                  }`}
                >
                  <Send className="h-4 w-4" />
                  Submit Nomination
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Popular Nominated Mixtapes</h3>
            <div className="space-y-6">
              {[
                {
                  curator: "SoundScape",
                  mixtape: "Neon Nights Vol. 2",
                  image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
                  categories: ["The Midas Touch"],
                  votes: 1234
                },
                {
                  curator: "BeatMaster",
                  mixtape: "Future Fusion",
                  image: "https://images.unsplash.com/photo-1571397133301-3f838ea96f56",
                  categories: ["Innovation Award"],
                  votes: 987
                },
                {
                  curator: "Vinyl Virtuoso",
                  mixtape: "Retro Redux",
                  image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
                  categories: ["Fan Favorite"],
                  votes: 856
                }
              ].map((mixtape, index) => (
                <article key={index} className="flex gap-4 p-4 bg-black/30 rounded-xl hover:bg-black/50 transition-colors">
                  <div className="hexagon-2inch overflow-hidden">
                    <img
                      src={mixtape.image}
                      alt={`${mixtape.mixtape} by ${mixtape.curator}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{mixtape.mixtape}</h4>
                    <p className="text-purple-400 text-sm">by {mixtape.curator}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mixtape.categories.map((category) => (
                        <span key={category} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                      <Star className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                      <span>{mixtape.votes.toLocaleString()} votes</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}