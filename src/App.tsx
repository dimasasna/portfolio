import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <PageWrapper key="home" pageName="home">
            <Hero onNavigate={handleNavigate} />
          </PageWrapper>
        )}

        {currentPage === 'resume' && (
          <PageWrapper key="resume" pageName="resume">
            <Resume onNavigate={handleNavigate} />
          </PageWrapper>
        )}

        {currentPage === 'projects' && (
          <PageWrapper key="projects" pageName="projects">
            <Projects onNavigate={handleNavigate} />
          </PageWrapper>
        )}

        {currentPage === 'contact' && (
          <PageWrapper key="contact" pageName="contact">
            <Contact onNavigate={handleNavigate} />
          </PageWrapper>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
