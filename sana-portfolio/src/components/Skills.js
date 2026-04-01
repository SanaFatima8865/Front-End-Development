import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Frameworks",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: "React", level: 95, color: "bg-gradient-to-r from-primary-400 to-primary-500" },
        { name: "Redux", level: 85, color: "bg-gradient-to-r from-accent-400 to-accent-500" },
        { name: "Vue.js", level: 75, color: "bg-gradient-to-r from-success-400 to-success-500" },
        { name: "Next.js", level: 80, color: "bg-gradient-to-r from-gray-400 to-gray-600" }
      ]
    },
    {
      title: "Programming Languages",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      skills: [
        { name: "JavaScript", level: 90, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-primary-400 to-primary-600" },
        { name: "HTML5", level: 95, color: "bg-gradient-to-r from-orange-400 to-red-500" },
        { name: "CSS3", level: 90, color: "bg-gradient-to-r from-primary-300 to-primary-500" }
      ]
    },
    {
      title: "UI/UX Libraries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      skills: [
        { name: "Material UI", level: 90, color: "bg-gradient-to-r from-primary-500 to-accent-500" },
        { name: "Tailwind CSS", level: 95, color: "bg-gradient-to-r from-success-400 to-success-600" },
        { name: "Bootstrap", level: 85, color: "bg-gradient-to-r from-accent-400 to-purple-600" },
        { name: "Styled Components", level: 80, color: "bg-gradient-to-r from-pink-400 to-accent-500" }
      ]
    },
    {
      title: "Development Tools",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        { name: "Git", level: 90, color: "bg-gradient-to-r from-red-400 to-red-600" },
        { name: "VS Code", level: 95, color: "bg-gradient-to-r from-primary-400 to-primary-600" },
        { name: "Webpack", level: 75, color: "bg-gradient-to-r from-primary-300 to-primary-500" },
        { name: "Vite", level: 85, color: "bg-gradient-to-r from-yellow-400 to-orange-500" }
      ]
    },
    {
      title: "Backend Technologies",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m8-8a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V4zM15 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      skills: [
        { name: "Node.js", level: 82, color: "bg-gradient-to-r from-success-400 to-success-600" },
        { name: "Express.js", level: 80, color: "bg-gradient-to-r from-gray-400 to-gray-600" },
        { name: "REST APIs", level: 85, color: "bg-gradient-to-r from-primary-400 to-primary-600" },
        { name: "MongoDB", level: 75, color: "bg-gradient-to-r from-success-500 to-success-700" }
      ]
    }
  ];



  const softSkills = [
    {
      skill: "Team Leadership",
      description: "Led teams of 80+ members as Society President",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      skill: "Client Communication",
      description: "Excellent communication with stakeholders and clients",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      skill: "Problem Solving",
      description: "Analytical thinking and creative solution development",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      skill: "Continuous Learning",
      description: "Always staying updated with latest technologies",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-dark-700 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-600 hover:border-primary-500/50 group animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center mb-6">
                <div className="text-primary-400 mr-3 group-hover:text-accent-400 transition-colors duration-300 transform group-hover:scale-110">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300 group-hover/skill:text-primary-400 transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-gray-400 group-hover/skill:text-accent-400 transition-colors duration-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out transform group-hover/skill:scale-105 animate-pulse-slow`}
                        style={{ width: `${skill.level}%`, animationDelay: `${skillIndex * 0.1}s` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



        {/* Soft Skills */}
        <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Professional Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((item, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-6 shadow-md text-center hover:shadow-2xl transition-all duration-300 border border-gray-600 hover:border-accent-500/50 group hover:-translate-y-2 animate-slide-up" style={{animationDelay: `${1 + index * 0.1}s`}}>
                <div className="text-primary-400 mb-4 flex justify-center group-hover:text-accent-400 transition-colors duration-300 transform group-hover:scale-110">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">{item.skill}</h4>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white text-center animate-slide-up animate-glow" style={{animationDelay: '1.2s'}}>
          <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            With expertise in modern frontend technologies and a passion for creating exceptional user experiences,
            I'm ready to bring your ideas to life.
          </p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 hover:text-accent-600 transition-all duration-300 font-medium shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
