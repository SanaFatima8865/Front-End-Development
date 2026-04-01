import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-dark-900">
        {/* Header/Navbar */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Certifications & Achievements Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
