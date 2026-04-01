import React from 'react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/SanaFatima_SeniorFrontEndEngineer.pdf';
    link.download = 'SanaFatima_SeniorFrontEndEngineer.pdf';
    link.target = '_blank';

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Show success message
    console.log('CV download initiated');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl animate-float"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-400/30 rounded-full animate-float" style={{animationDelay: '0s', animationDuration: '4s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent-400/40 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-primary-300/50 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-accent-300/30 rounded-full animate-float" style={{animationDelay: '0.5s', animationDuration: '6s'}}></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-success-400/40 rounded-full animate-float" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-primary-500/20 rounded-full animate-float" style={{animationDelay: '2.5s', animationDuration: '5.5s'}}></div>

        {/* Geometric shapes */}
        <div className="absolute top-32 right-1/4 w-8 h-8 border-2 border-primary-400/20 rotate-45 animate-float" style={{animationDelay: '1s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-6 h-6 border-2 border-accent-400/30 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '7s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center">
          {/* Profile Photo */}
          <div className="mb-8 animate-slide-up">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 shadow-2xl animate-glow relative overflow-hidden border-4 border-gradient-to-br from-primary-400 to-accent-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-accent-500/20 rounded-full animate-pulse"></div>
              <img
                src="/assets/Sana_Profile.png"
                alt="Sana Fatima - Senior Frontend Developer"
                className="w-full h-full object-cover rounded-full relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                <div className="text-center">
                  <svg
                    className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <span className="text-white text-xs font-medium">Profile Photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block animate-slide-in-left">Frontend</span>
              <span className="block bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent animate-slide-in-right" style={{animationDelay: '0.4s'}}>
                Developer
              </span>
            </h1>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float">
              ReactJS
            </span>
            <span className="text-gray-400 text-xl animate-pulse">•</span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
              JavaScript
            </span>
            <span className="text-gray-400 text-xl animate-pulse" style={{animationDelay: '0.5s'}}>•</span>
            <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
              TypeScript
            </span>
          </div>

          {/* Description */}
          <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              I am a Frontend Developer with <span className="font-semibold text-primary-400">5+ years of experience</span> specializing in ReactJS, JavaScript, and TypeScript.
              I build <span className="font-semibold text-accent-400">scalable, responsive, and user-friendly</span> web applications with modern UI frameworks and optimization techniques.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '1s'}}>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-primary-400 group-hover:text-primary-300 transition-colors duration-300 animate-pulse-slow">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-accent-400 group-hover:text-accent-300 transition-colors duration-300 animate-pulse-slow" style={{animationDelay: '0.5s'}}>15%</div>
              <div className="text-sm text-gray-400">Performance Boost</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-success-400 group-hover:text-success-300 transition-colors duration-300 animate-pulse-slow" style={{animationDelay: '1s'}}>10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors duration-300 animate-pulse-slow" style={{animationDelay: '1.5s'}}>3</div>
              <div className="text-sm text-gray-400">Companies</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '1.2s'}}>
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 animate-glow"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </span>
            </button>
            <button
              onClick={scrollToContact}
              className="border-2 border-accent-500 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="flex items-center justify-center gap-2 relative z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
