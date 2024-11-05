import React from 'react';
import { Disc3, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About the Awards', href: '/#about' },
    { id: 'categories', label: 'Categories', href: '/#categories' },
    { id: 'nominate', label: 'Nominate', href: '/#nominate', highlight: true },
    { id: 'featured', label: 'Featured', href: '/#featured' },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);

    if (location.pathname !== '/' && !href.startsWith('/#')) {
      return; // Let React Router handle non-hash navigation
    }

    // Handle smooth scrolling for hash links on home page
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setActiveSection('home')}
          >
            <Disc3 className="h-8 w-8 text-purple-500" aria-hidden="true" />
            <div>
              <h1 className="text-xl font-bold">MIXY Awards</h1>
              <p className="text-xs text-gray-400">by MINY</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`
                  ${activeSection === item.id ? 'text-purple-500' : 'text-gray-300 hover:text-white'}
                  ${item.highlight ? 'bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-full text-white' : ''}
                  transition-colors duration-200
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-sm"
          aria-label="Mobile navigation"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`
                  ${activeSection === item.id ? 'bg-purple-500 text-white' : 'text-gray-300 hover:bg-purple-500/20'}
                  ${item.highlight ? 'bg-purple-500 text-white hover:bg-purple-600' : ''}
                  block px-3 py-2 rounded-md text-base font-medium w-full text-left
                `}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}