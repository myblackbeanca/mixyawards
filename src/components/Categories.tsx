import React from 'react';
import { categories } from '../data/categories';
import { Link } from 'react-router-dom';

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-black/50 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Award Categories</h2>
          <p className="text-xl text-gray-400">
            Explore our 17 unique categories celebrating different aspects of music curation
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="category-card"
            >
              <div className="category-content">
                <div className="flex items-start justify-between mb-4">
                  <div className="hexagon-2inch bg-purple-500/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-auto pt-4">
                  <span 
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium group inline-flex items-center gap-2"
                    aria-label={`View nominations for ${category.name}`}
                  >
                    View Category
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}