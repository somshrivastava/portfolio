'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Github,
  GraduationCap,
  Briefcase,
  Code,
  Download,
  Target,
  Lightbulb
} from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies?: string[];
  links?: { label: string; url: string }[];
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  achievements: string[];
  technologies?: string[];
  links?: { label: string; url: string }[];
}

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'services' | 'interests';
}

const InteractiveResume = () => {
  const [activeSection, setActiveSection] = useState<string>('education');

  const workExperiences: Experience[] = [
    {
      id: 'amazon',
      title: 'Software Engineering Intern',
      company: 'Amazon',
      location: 'Seattle, WA',
      period: 'Jun 2026 – Aug 2026',
      achievements: [
        'Automated on-call access to service team resources, driving more than 50% adoption across internal operations teams',
        'Reduced manual approvals for administrators by processing permission team updates asynchronously with AWS SQS',
        'Tightened access control by automatically removing permissions for engineers who rotate off-call using AWS Lambda'
      ],
      technologies: ['AWS', 'AWS SQS', 'AWS Lambda', 'Python'],
    },
    {
      id: 'microsoft',
      title: 'Software Engineering Intern',
      company: 'Microsoft',
      location: 'Redmond, WA',
      period: 'Jan 2026 – May 2026',
      achievements: [
        'Built a .NET MCP server powering the M365 Admin Agent to expose Agent 365 observability data for enterprise workflows',
        'Designed 50+ eval scenarios to test MCP tool selection and response quality, reducing risk before production rollout',
        'Implemented internal ingestion tooling for 500K+ agents observability data, enabling production-scale load testing'
      ],
      technologies: ['.NET', 'C#', 'MCP', 'Azure'],
    },
    {
      id: 'nail',
      title: 'Research Assistant',
      company: 'Northeastern Autonomy & Intelligence Lab',
      location: 'Boston, MA',
      period: 'Apr 2025 – Dec 2025',
      achievements: [
        'Developed a Python data-processing pipeline to extract and analyze ROS2 sensor data, cutting download sizes by 75%',
        'Deployed an Ubuntu server with DAS to store 100+ TB of sensor data, reducing infrastructure costs by $2000+/month',
        'Configured Cloudflare Tunnel and Access to securely expose app via HTTPS to remote users with Northeastern credentials'
      ],
      technologies: ['Python', 'ROS2', 'Ubuntu', 'Cloudflare'],
    },
    {
      id: 'bambala',
      title: 'Software Engineering Intern',
      company: 'Bambala (Startup)',
      location: 'East Brunswick, NJ',
      period: 'Jan 2023 – Sep 2024',
      achievements: [
        'Developed REST APIs on Google App Engine to integrate digital payments, boosting transaction reliability by 25%',
        'Built a Cypress automated testing framework, cutting QA time by 50%, and ensuring stable deployments in production',
        'Refactored Angular codebase using the NgRx state design pattern, enhancing maintainability and cutting state bugs by 30%'
      ],
      technologies: ['JavaScript', 'Angular', 'Google App Engine', 'Cypress', 'NgRx'],
    }
  ];

  const projects: Project[] = [
    {
      id: 'equity-research',
      title: 'Equity Research Screener',
      subtitle: 'Software Developer',
      period: 'Aug 2025 – Present',
      achievements: [
        'Developed an equity research screener with Python, Pandas, and Scikit-learn to analyze 20 years of 10-K\'s and macro data',
        'Trained regression models on all 500 S&P firms\', forecasting fundamental business valuation metrics to rank stocks',
        'Backtested factor models on predicted EBIT/EV, with a long portfolio having ~15% annualized return, beating the S&P 500'
      ],
      technologies: ['Python', 'matplotlib', 'scikit-learn', 'Excel'],
      links: [{ label: 'GitHub', url: '#' }]
    },
    {
      id: 'zerodha',
      title: 'Zerodha Automation Trading',
      subtitle: 'Software Developer',
      period: 'May 2025 – Present',
      achievements: [
        'Engineered an automated derivatives trading system executing delta-hedged option strategies with Python and Next.js',
        'Integrated Zerodha API for real-time option chain data, trade execution, and P&L monitoring across weekly/monthly expiries',
        'Simulated order book and position adjustments to validate risk management logic and streamline workflow automation'
      ],
      technologies: ['Python', 'Flask', 'Next.js'],
      links: [{ label: 'GitHub', url: '#' }]
    },
    {
      id: 'nutrition',
      title: 'NUtrition',
      subtitle: 'Software Developer',
      period: 'Jan 2025 – Apr 2025',
      achievements: [
        'Built a full-stack meal tracking app using React, Supabase, and Vercel, enabling students to log meals and monitor macros',
        'Implemented a Python-based ML model to recommend meals aligned with users\' goals, preferences, and dining history',
        'Coordinated with Northeastern dining services to pilot the app and collect live feedback from students in dining halls'
      ],
      technologies: ['Python', 'scikit-learn', 'Selenium', 'React.js', 'Supabase'],
    }
  ];

  const skills: Skill[] = [
    // Languages
    { name: 'Python', level: 90, category: 'languages' },
    { name: 'TypeScript', level: 85, category: 'languages' },
    { name: 'JavaScript', level: 90, category: 'languages' },
    { name: 'Java', level: 75, category: 'languages' },
    { name: 'C++', level: 70, category: 'languages' },
    { name: 'C#', level: 70, category: 'languages' },
    { name: 'HTML', level: 90, category: 'languages' },
    { name: 'CSS', level: 85, category: 'languages' },
    { name: 'SQL', level: 80, category: 'languages' },

    // Frameworks & Libraries
    { name: 'NumPy', level: 85, category: 'frameworks' },
    { name: 'Pandas', level: 90, category: 'frameworks' },
    { name: 'Scikit-learn', level: 80, category: 'frameworks' },
    { name: 'Flask', level: 80, category: 'frameworks' },
    { name: 'Selenium', level: 75, category: 'frameworks' },
    { name: 'Angular', level: 85, category: 'frameworks' },
    { name: 'React.js', level: 80, category: 'frameworks' },
    { name: 'Next.js', level: 75, category: 'frameworks' },
    { name: 'Node.js', level: 80, category: 'frameworks' },
    { name: 'Prisma', level: 70, category: 'frameworks' },

    // Services & Tools
    { name: 'Git', level: 85, category: 'services' },
    { name: 'Jira', level: 75, category: 'services' },
    { name: 'Docker', level: 80, category: 'services' },
    { name: 'Google Cloud Platform', level: 75, category: 'services' },
    { name: 'Azure', level: 75, category: 'services' },
    { name: 'AWS', level: 75, category: 'services' },
    { name: 'Figma', level: 70, category: 'services' },

    // Interests
    { name: 'Financial Derivatives', level: 85, category: 'interests' },
    { name: 'Fitness', level: 80, category: 'interests' },
    { name: 'Tennis', level: 75, category: 'interests' },
    { name: 'Pickleball', level: 70, category: 'interests' },
    { name: 'Basketball', level: 75, category: 'interests' },
    { name: 'Football', level: 75, category: 'interests' },
    { name: 'Cricket', level: 80, category: 'interests' },
    { name: 'Journaling', level: 85, category: 'interests' },
    { name: 'Cooking', level: 75, category: 'interests' },
    { name: 'Podcasts', level: 80, category: 'interests' }
  ];

  const education = {
    school: 'Northeastern University, Khoury College of Computer Sciences',
    degree: 'Candidate for Bachelor of Science in Computer Science and Mathematics',
    location: 'Boston, MA',
    period: 'Dec 2027',
    gpa: 'GPA: 3.9/4.0',
    relevantCourses: [
      'Statistics & Stochastic Processes', 'Differential Equations', 'Linear Algebra',
      'Artificial Intelligence', 'Multivariable Calculus', 'Data Structures & Algorithms',
      'Object-Oriented Design'
    ]
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryLabels = {
    languages: 'Languages',
    frameworks: 'Frameworks & Libraries',
    services: 'Services & Tools',
    interests: 'Interests'
  };

  const categoryIcons = {
    languages: Code,
    frameworks: Lightbulb,
    services: Target,
    interests: GraduationCap
  };

  return (
    <section className="py-16 font-mono" style={{ backgroundColor: '#0d1117' }} data-section="resume">
      <div className="max-w-6xl mx-auto px-4">
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-200">
            Resume
          </h2>
          <p className="text-base text-slate-400 mb-8">
            Explore my experience, skills, and education in detail
          </p>
        </motion.div>

        {/* Refined Navigation Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex border border-slate-600/50 rounded p-1.5 shadow-sm min-w-fit" style={{ backgroundColor: '#161b22' }}>
            {[
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'skills', label: 'Skills & Interests', icon: Code },
              { id: 'experience', label: 'Work Experience', icon: Briefcase },
              { id: 'projects', label: 'Projects', icon: Target }
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection(id)}
                data-tab={id}
                className={`flex items-center gap-2 px-3 py-2 rounded font-medium transition-all duration-300 whitespace-nowrap text-sm ${
                  activeSection === id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-blue-400 hover:bg-blue-600/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {/* Education Section */}
          {activeSection === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="border border-slate-600/50 rounded p-6 shadow-sm"
              style={{ backgroundColor: '#161b22' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded flex items-center justify-center shadow-md flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-1">
                    {education.school}
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 font-semibold mb-3">
                    {education.degree}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="text-sm">{education.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="text-sm">{education.period}</span>
                    </div>
                    <div className="text-sm font-bold text-blue-400">
                      {education.gpa}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-300 mb-2 text-sm">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {education.relevantCourses.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 bg-blue-600/10 text-blue-300 text-xs font-medium rounded border border-blue-500/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Skills & Interests Section */}
          {activeSection === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="border border-slate-600/50 rounded p-5 shadow-sm"
                    style={{ backgroundColor: '#161b22' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-200">
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {categorySkills.map((skill) => (
                        <motion.span
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="px-2.5 py-1.5 bg-slate-700/30 text-slate-300 text-xs font-medium rounded border border-slate-600/30 hover:bg-slate-600/30 hover:border-slate-500/50 transition-colors cursor-default"
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Work Experience Section */}
          {activeSection === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-slate-600/50 rounded p-5 shadow-sm hover:border-slate-500/70 transition-colors duration-300"
                  style={{ backgroundColor: '#161b22' }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center shadow-md flex-shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-200 mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-base text-slate-300 font-semibold mb-2">
                        {exp.title}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievements - Always Visible */}
                  <div className="mb-3 md:ml-13">
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 mb-3 md:ml-13">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-blue-600/10 text-blue-300 text-xs font-medium rounded border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}


                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-slate-600/50 rounded p-5 shadow-sm hover:border-slate-500/70 transition-colors duration-300"
                  style={{ backgroundColor: '#161b22' }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center shadow-md flex-shrink-0">
                      <Code className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-200 mb-1">
                        {project.title}
                      </h3>
                      <p className="text-base text-slate-300 font-semibold mb-2">
                        {project.subtitle}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        {project.period}
                      </div>
                    </div>
                    
                    {/* Project Links - Desktop Only (Top Right) */}
                    <div className="hidden md:flex gap-2 flex-shrink-0">
                      <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-700/30 text-slate-300 text-xs font-semibold rounded border border-slate-600/30 hover:bg-slate-600/30 hover:border-slate-500/50 transition-colors"
                      >
                        <Github className="w-3 h-3" />
                        Source Code
                      </motion.a>
                      
                      <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-600/10 text-blue-300 text-xs font-semibold rounded border border-blue-500/20 hover:bg-blue-600/20 hover:border-blue-400/30 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>

                  {/* Achievements - Always Visible */}
                  <div className="mb-3 md:ml-13">
                    <ul className="space-y-1.5">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-1.5 mb-3 md:ml-13">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-blue-600/10 text-blue-300 text-xs font-medium rounded border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Project Links - Mobile Only (Below Tags) */}
                  <div className="flex md:hidden gap-2">
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-700/30 text-slate-300 text-xs font-semibold rounded border border-slate-600/30 hover:bg-slate-600/30 hover:border-slate-500/50 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Source Code
                    </motion.a>
                    
                    <motion.a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-600/10 text-blue-300 text-xs font-semibold rounded border border-blue-500/20 hover:bg-blue-600/20 hover:border-blue-400/30 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </motion.a>
                  </div>


                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InteractiveResume; 