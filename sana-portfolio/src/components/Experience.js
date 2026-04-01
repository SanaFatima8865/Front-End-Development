import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Digitify Pakistan Limited",
      position: "Software Engineer (FrontEnd)",
      duration: "Apr 2023 – Present",
      location: "Pakistan",
      type: "Full-time",
      description: "Leading frontend development initiatives and building scalable web applications",
      achievements: [
        "Built responsive applications using React, JavaScript, and TypeScript",
        "Improved application performance by 15% through strategic API optimization",
        "Integrated Material UI & Tailwind CSS for reusable UI component libraries",
        "Led frontend development for internal dashboards to streamline workflows",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ],
      technologies: ["React", "JavaScript", "TypeScript", "Material UI", "Tailwind CSS", "API Integration"],
      color: "from-blue-500 to-blue-600"
    },
    {
      company: "Khaleef Technologies",
      position: "Associate Software Engineer",
      duration: "Sep 2021 – Mar 2023",
      location: "Pakistan",
      type: "Full-time",
      description: "Developed multiple client applications and mobile app solutions",
      achievements: [
        "Worked on major projects: Cricwick, EasyPaisa MiniApp, Jazz Cricket, MyTelenorApp, MyZongApp, MyUfoneApp",
        "Utilized React, Redux, and Bootstrap for scalable client project development",
        "Optimized application load times by 10% through lazy loading & code splitting techniques",
        "Ensured accessibility and responsive design across all devices and platforms",
        "Maintained high code quality standards and participated in code reviews"
      ],
      technologies: ["React", "Redux", "Bootstrap", "JavaScript", "Mobile Apps", "Performance Optimization"],
      color: "from-purple-500 to-purple-600"
    },
    {
      company: "Capital Stake",
      position: "Junior Software Engineer",
      duration: "Aug 2020 – Aug 2021",
      location: "Pakistan",
      type: "Full-time",
      description: "Focused on modernizing legacy systems and improving user experience",
      achievements: [
        "Successfully migrated legacy codebase to modern frameworks (Vue.js, CSS)",
        "Redesigned company website resulting in 20% increase in user engagement",
        "Implemented responsive design principles for better mobile experience",
        "Collaborated with design team to create intuitive user interfaces",
        "Contributed to establishing frontend development best practices"
      ],
      technologies: ["Vue.js", "CSS", "HTML", "JavaScript", "UI/UX Design", "Legacy Migration"],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey in frontend development across different companies and projects
          </p>
        </div>

        {/* Experience Cards - Better Aligned */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-slide-up bg-dark-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-700 hover:border-primary-500/50 group hover:-translate-y-2" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-400 mb-3 group-hover:text-accent-400 transition-colors duration-300">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-sm text-gray-400 sm:text-right">
                  <div className="flex items-center sm:justify-end mb-2">
                    <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center sm:justify-end">
                    <svg className="w-4 h-4 mr-2 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{exp.location} • {exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h5 className="font-semibold text-white mb-4 text-lg">Key Achievements:</h5>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start group/item">
                      <svg className="w-5 h-5 text-success-400 mt-0.5 mr-3 flex-shrink-0 group-hover/item:text-success-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="font-semibold text-white mb-3 text-lg">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full font-medium hover:bg-primary-500 hover:text-white transition-all duration-300 border border-gray-600 hover:border-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="text-3xl font-bold text-primary-400 mb-2 group-hover:text-accent-400 transition-colors duration-300">5+</div>
            <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Years Experience</div>
          </div>
          <div className="bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-accent-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="text-3xl font-bold text-accent-400 mb-2 group-hover:text-primary-400 transition-colors duration-300">3</div>
            <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Companies</div>
          </div>
          <div className="bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-success-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="text-3xl font-bold text-success-400 mb-2 group-hover:text-success-300 transition-colors duration-300">15+</div>
            <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Projects</div>
          </div>
          <div className="bg-dark-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group hover:-translate-y-2">
            <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">15%</div>
            <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">Performance Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
