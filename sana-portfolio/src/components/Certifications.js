import React from 'react';

const Certifications = () => {
  const certifications = [
    {
      title: "Namaste React",
      issuer: "Akshay Saini",
      year: "2023",
      description: "Comprehensive React.js course covering advanced concepts, hooks, performance optimization, and modern React patterns.",
      skills: ["React.js", "Hooks", "Context API", "Performance Optimization", "Modern React Patterns"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600",
      category: "Frontend Development"
    },
    {
      title: ".NET Core and Cloud CX",
      issuer: "Speridian Technologies",
      year: "2019",
      description: "Comprehensive training on .NET Core framework, cloud technologies, and customer experience solutions.",
      skills: [".NET Core", "Cloud Technologies", "API Development", "Microservices", "Azure"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600",
      category: "Backend Development"
    }
  ];

  const achievements = [
    {
      title: "Society President Leadership",
      organization: "University Society",
      year: "2019-2020",
      description: "Led a team of 80+ members in social services including education initiatives, first-aid programs, and blood donation drives.",
      impact: "Organized 15+ community service events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cultural & Dramatics Team Lead",
      organization: "University Cultural Society",
      year: "2019-2020",
      description: "Managed cultural and dramatics events with a team of 20+ members, organizing performances and cultural celebrations.",
      impact: "Successfully organized 10+ cultural events",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
        </svg>
      ),
      color: "from-orange-500 to-orange-600"
    }
  ];

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
  
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and leadership achievements that showcase my commitment to continuous learning and growth
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{cert.title}</h4>
                      <p className="text-blue-100">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.category}
                    </span>
                    <span className="text-blue-100 font-medium">{cert.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Key Skills Acquired:</h5>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Leadership & Extracurricular Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${achievement.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{achievement.title}</h4>
                      <p className="text-white/80">{achievement.organization}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      Leadership
                    </span>
                    <span className="text-white/80 font-medium">{achievement.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold text-gray-900">Impact: </span>
                      <span className="text-gray-700">{achievement.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600 text-sm">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">80+</div>
              <div className="text-gray-600 text-sm">Team Members Led</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 text-sm">Events Organized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
              <div className="text-gray-600 text-sm">Years Leadership</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Interested in learning more about my qualifications and experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1" onClick={handleDownloadCV}>
              Download Full Resume
            </button>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
