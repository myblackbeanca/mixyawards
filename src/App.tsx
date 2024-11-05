import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { NominationForm } from './components/NominationForm';
import { FeaturedNominations } from './components/FeaturedNominations';
import { CategoryPage } from './components/CategoryPage';
import { Footer } from './components/Footer';

// ScrollToTop component to handle scroll position on navigation
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

export default function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Categories />
              <NominationForm />
              <FeaturedNominations />
            </main>
          } />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}