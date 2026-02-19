import { useState, useCallback } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

// Glitch masuk ~400ms, tahan sebentar, lalu keluar
const ENTER_DURATION = 500;  // ganti konten saat glitch penuh menutup
const TOTAL_DURATION = 600; // total hingga glitch selesai keluar

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [displayPage, setDisplayPage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = useCallback((page: string) => {
    if (page === currentPage || isTransitioning) return;

    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Ganti konten di balik glitch
    setTimeout(() => {
      setCurrentPage(page);
      setDisplayPage(page);
    }, ENTER_DURATION);

    // Selesai
    setTimeout(() => {
      setIsTransitioning(false);
    }, TOTAL_DURATION);
  }, [currentPage, isTransitioning]);

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <PageTransition isVisible={isTransitioning} />

      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <div>
        {displayPage === 'home' && <Hero onNavigate={handleNavigate} />}
        {displayPage === 'resume' && <Resume onNavigate={handleNavigate} />}
        {displayPage === 'projects' && <Projects onNavigate={handleNavigate} />}
        {displayPage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </div>

      <Footer />
    </div>
  );
};

export default App;