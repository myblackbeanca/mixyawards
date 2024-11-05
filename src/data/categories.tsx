import React from 'react';
import { Crown, Star, Zap, Music, Heart, Sparkles, Trophy, Flame, Globe, Clock, Target, Palette, Headphones, Radio, Mic2, Award, Users } from 'lucide-react';

interface Category {
  name: string;
  description: string;
  icon: JSX.Element;
}

export const categories: Category[] = [
  {
    name: "The Midas Touch",
    description: "For curators who turn every track into gold, spotlighting emerging artists who gain significant traction.",
    icon: <Crown className="h-6 w-6 text-yellow-500" />
  },
  {
    name: "The Best Grinder",
    description: "Awarded to the playlist that combines the most diverse genres into a truly unique sound.",
    icon: <Star className="h-6 w-6 text-purple-500" />
  },
  {
    name: "Fan Favorite Mixtape",
    description: "The playlist loved by the community, chosen through listener votes and comments.",
    icon: <Heart className="h-6 w-6 text-red-500" />
  },
  {
    name: "Rising Star",
    description: "Recognizing emerging curators who are making waves in the community.",
    icon: <Zap className="h-6 w-6 text-yellow-400" />
  },
  {
    name: "Genre Pioneer",
    description: "For curators who define and evolve specific music genres.",
    icon: <Music className="h-6 w-6 text-blue-500" />
  },
  {
    name: "Innovation Award",
    description: "Celebrating the most creative and experimental playlist concepts.",
    icon: <Sparkles className="h-6 w-6 text-purple-400" />
  },
  {
    name: "Lifetime Achievement",
    description: "Honoring long-standing contributors to the music curation community.",
    icon: <Trophy className="h-6 w-6 text-gold-500" />
  },
  {
    name: "Trending Curator",
    description: "For those who consistently spot and amplify trending sounds.",
    icon: <Flame className="h-6 w-6 text-orange-500" />
  },
  {
    name: "Global Impact",
    description: "Recognizing curators who bridge cultural gaps through music.",
    icon: <Globe className="h-6 w-6 text-green-500" />
  },
  {
    name: "Best New Curator",
    description: "Celebrating outstanding newcomers to the platform.",
    icon: <Award className="h-6 w-6 text-pink-500" />
  },
  {
    name: "Consistency King",
    description: "For curators who maintain high-quality output consistently.",
    icon: <Clock className="h-6 w-6 text-cyan-500" />
  },
  {
    name: "Niche Master",
    description: "Excellence in serving specific, underrepresented music niches.",
    icon: <Target className="h-6 w-6 text-red-400" />
  },
  {
    name: "Mood Architect",
    description: "Creating perfect playlists for specific moods and moments.",
    icon: <Palette className="h-6 w-6 text-indigo-500" />
  },
  {
    name: "Underground Explorer",
    description: "Discovering and promoting underground artists and sounds.",
    icon: <Headphones className="h-6 w-6 text-gray-400" />
  },
  {
    name: "Radio Alternative",
    description: "Creating broadcast-quality playlist experiences.",
    icon: <Radio className="h-6 w-6 text-green-400" />
  },
  {
    name: "Artist Spotlight",
    description: "Best curator for artist-focused playlists and discoveries.",
    icon: <Mic2 className="h-6 w-6 text-violet-500" />
  },
  {
    name: "Community Choice",
    description: "Voted by the MINY community for outstanding contribution.",
    icon: <Users className="h-6 w-6 text-blue-400" />
  }
];