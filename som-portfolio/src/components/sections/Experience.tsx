'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building2, Car, Code, Wrench } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Assistant',
      company: 'Northeastern Autonomy & Intelligence Lab',
      logo: Building2,
      location: 'Boston, MA',
      period: 'Apr 2025 – Present',
      status: 'Current',
      description: 'Developing Dockerized Angular-Flask applications to extract and analyze ROS2 sensor data, reducing download sizes by 75%. Deploying Ubuntu servers with DAS to store 100+ TB of sensor data.',
      technologies: ['Angular', 'Flask', 'Docker', 'Ubuntu', 'ROS2', 'Cloudflare'],
      achievements: [
        'Developed a Dockerized Angular-Flask app to extract and analyze ROS2 sensor data, cutting download sizes by 75%',
        'Deployed an Ubuntu server with DAS to store 100+ TB of sensor data, reducing infrastructure costs by $2000+/month',
        'Configured Cloudflare Tunnel and Access to securely expose app via HTTPS to remote users with Northeastern credentials'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Northeastern Electric Racing',
      logo: Car,
      location: 'Boston, MA',
      period: 'Sep 2024 – Jan 2025',
      status: 'Completed',
      description: 'Built Angular dashboard to visualize real-time car telemetry data, aiding engineers during testing. Simulated live data streams to validate frontend responsiveness.',
      technologies: ['Angular', 'TypeScript', 'Real-time Data', 'Telemetry'],
      achievements: [
        'Built Angular dashboard to visualize real-time car telemetry data (e.g. battery temp), aiding engineers during testing',
        'Simulated live data streams to validate frontend responsiveness under test-driving conditions before track deployment'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Bambala',
      logo: Code,
      location: 'East Brunswick, NJ',
      period: 'Jan 2023 – Sep 2024',
      status: 'Completed',
      description: 'Developed JS backend APIs on Google App Engine, integrated digital payments, and built comprehensive test suites. Refactored Angular codebase using NgRx for better state management.',
      technologies: ['JavaScript', 'Angular', 'NgRx', 'Google App Engine', 'Cypress', 'OAuth'],
      achievements: [
        'Developed JavaScript backend on Google App Engine to integrate digital payments, boosting transaction reliability by 25%',
        'Enabled OAuth login via Google, Facebook, and Apple to simplify multi-platform authentication and user onboarding',
        'Built Cypress test suite to automate UI validation, cut QA time by 50%, and ensure stable deployments in production',
        'Refactored Angular codebase using NgRx, improving maintainability and reducing state management bugs by 30%'
      ]
    },
    {
      title: 'Programming Chief',
      company: 'Astraea Robotics - FRC Robotics',
      logo: Wrench,
      location: 'East Brunswick, NJ',
      period: 'Sep 2022 – Jun 2024',
      status: 'Completed',
      description: 'Mentored 10+ students in FRC programming with Java and Git. Programmed custom omnidirectional drive wheels and autonomous routines for robotics competitions.',
      technologies: ['Java', 'Git', 'FRC', 'Robotics', 'Autonomous Systems'],
      achievements: [
        'Mentored 10+ students in FRC programming with Java and Git, improving team development speed and code quality',
        'Programmed custom omnidirectional drive wheels and simulations, increasing robot speed by 50% during competitions',
        'Demonstrated autonomous routines at STEM outreach events, engaging over 250+ attendees to real-world robotics'
      ]
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-primary">

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #58a6ff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 max-w-full sm:max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="text-center mb-12 font-mono">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-blue-400">Work</span>
            <span className="text-slate-100"> Experience</span>
          </h1>
          <p className="text-lg text-slate-300">
            Building experience in software engineering and quantitative development
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="p-3 sm:p-4 rounded border border-slate-600/50 shadow-sm hover:shadow-md hover:border-slate-500 transition-smooth bg-secondary"
            >
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded border border-slate-600/50 bg-primary">
                      <exp.logo className="w-4 h-4 text-blue-400" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-slate-200">
                      {exp.company}
                    </h3>
                  </div>
                  
                  <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-sm font-medium text-slate-300">
                  {exp.title}
                </h4>
                
                <ul className="space-y-1 mt-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded border border-slate-600/50 text-slate-300 bg-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
