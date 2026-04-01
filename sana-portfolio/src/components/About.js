import React from 'react';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "5+ Years Experience",
      description: "Specialized in modern frontend development with React ecosystem"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance Optimization",
      description: "Improved app performance by 15% through API optimization and code splitting"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Modern UI Frameworks",
      description: "Expert in Material UI, Tailwind CSS, and Bootstrap for scalable designs"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Team Leadership",
      description: "Led frontend teams and managed internal dashboards to streamline workflows"
    }
  ];

  const technologies = [
    { name: "React", level: 95, color: "bg-gradient-to-r from-primary-400 to-primary-500" },
    { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-accent-400 to-accent-500" },
    { name: "Next.js", level: 88, color: "bg-gradient-to-r from-gray-400 to-gray-600" },
    { name: "Node.js", level: 82, color: "bg-gradient-to-r from-success-400 to-success-600" },
    { name: "Bootstrap", level: 92, color: "bg-gradient-to-r from-purple-400 to-purple-600" },
    { name: "Tailwind CSS", level: 90, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
    { name: "Material-UI", level: 88, color: "bg-gradient-to-r from-blue-400 to-indigo-500" }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional user experiences through clean code and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Description */}
          <div className="animate-slide-in-left">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-6">
                I am a <span className="font-semibold text-primary-400">Frontend Developer</span> with <span className="font-semibold text-accent-400">5+ years of experience</span> specializing in ReactJS, JavaScript, and TypeScript.
                I build scalable, responsive, and user-friendly web applications that deliver exceptional user experiences.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                My expertise includes creating modern UIs with <span className="font-semibold text-primary-400">Material UI, Tailwind CSS, and Bootstrap</span>,
                and improving performance through optimization techniques like <span className="font-semibold text-accent-400">lazy loading and code splitting</span>.
                I have successfully improved application performance by up to 15% through strategic API optimization.
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                I enjoy solving complex problems, collaborating with cross-functional teams, and continuously learning new technologies.
                My experience spans from building responsive dashboards to developing e-commerce platforms and data visualization tools.
              </p>
            </div>

            {/* Key Technologies Progress Bars */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Core Technologies</h3>
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-primary-400 transition-colors duration-300">{tech.name}</span>
                    <span className="text-sm text-gray-400 group-hover:text-accent-400 transition-colors duration-300">{tech.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${tech.color} transition-all duration-1000 ease-out transform group-hover:scale-105 animate-pulse-slow`}
                      style={{ width: `${tech.level}%`, animationDelay: `${index * 0.2}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="animate-slide-in-right">
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-dark-700 to-dark-600 p-6 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 border border-gray-700 hover:border-primary-500/50 group animate-slide-up"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="text-primary-400 mb-4 group-hover:text-accent-400 transition-colors duration-300 transform group-hover:scale-110">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Touch */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-900/20 to-accent-900/20 rounded-xl border border-primary-500/30 hover:border-accent-500/50 transition-all duration-300 group animate-slide-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-start space-x-4">
                <div className="text-primary-400 mt-1 group-hover:text-accent-400 transition-colors duration-300 transform group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">What drives me?</h4>
                  <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    I'm passionate about creating digital experiences that make a difference.
                    Whether it's optimizing performance, improving accessibility, or building intuitive interfaces,
                    I believe great code should serve great user experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
