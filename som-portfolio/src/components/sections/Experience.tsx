'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const AWSLogo = () => (
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqo7xni53XJc1YEB3b45zkdYZ1W24B-MJNNKjOoEvJ2U4KfiDvvrRw4hL&s=10"
    alt="Amazon"
    className="h-8 w-8 object-contain rounded-md bg-white"
  />
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 120 120" aria-label="Microsoft" className="h-6 w-6">
    <rect width="120" height="120" rx="20" fill="#ffffff" />
    <rect x="16" y="16" width="38" height="38" fill="#F25022" />
    <rect x="66" y="16" width="38" height="38" fill="#7FBA00" />
    <rect x="16" y="66" width="38" height="38" fill="#00A4EF" />
    <rect x="66" y="66" width="38" height="38" fill="#FFB900" />
  </svg>
);

const NortheasternLogo = () => (
  <img
    src="https://www.academicimpressions.com/wp-content/uploads/2021/08/NU_MonoNU_RGB_RB.png"
    alt="Northeastern University"
    className="h-8 w-8 object-contain rounded-md bg-white"
  />
);

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Amazon',
      logo: AWSLogo,
      location: 'Seattle, WA',
      period: 'Jun 2026 – Aug 2026',
      description: 'Automating on-call access to service team resources and tightening access control across internal operations teams with AWS SQS and Lambda.',
      technologies: ['AWS', 'AWS SQS', 'AWS Lambda', 'Python'],
      achievements: [
        'Automated on-call access to service team resources, driving more than 50% adoption across internal operations teams.',
        'Reduced manual approvals for administrators by processing permission team updates asynchronously with AWS SQS.',
        'Tightened access control by automatically removing permissions for engineers who rotate off-call using AWS Lambda.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Microsoft',
      logo: MicrosoftLogo,
      location: 'Redmond, WA',
      period: 'Jan 2026 – May 2026',
      description: 'Built a .NET MCP server powering the M365 Admin Agent to expose Agent 365 observability data for enterprise workflows.',
      technologies: ['.NET', 'C#', 'MCP', 'Azure'],
      achievements: [
        'Built a .NET MCP server powering the M365 Admin Agent to expose Agent 365 observability data for enterprise workflows.',
        'Designed 50+ eval scenarios to test MCP tool selection and response quality, reducing risk before production rollout.',
        'Implemented internal ingestion tooling for 500K+ agents observability data, enabling production-scale load testing.'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'Northeastern Autonomy & Intelligence Lab',
      logo: NortheasternLogo,
      location: 'Boston, MA',
      period: 'Apr 2025 – Dec 2025',
      description: 'Developed a Python data-processing pipeline to extract and analyze ROS2 sensor data, reducing download sizes by 75%. Deployed Ubuntu servers with DAS to store 100+ TB of sensor data.',
      technologies: ['Python', 'ROS2', 'Ubuntu', 'Cloudflare'],
      achievements: [
        'Developed a Python data-processing pipeline to extract and analyze ROS2 sensor data, cutting download sizes by 75%.',
        'Deployed an Ubuntu server with DAS to store 100+ TB of sensor data, reducing infrastructure costs by $2000+/month.',
        'Configured Cloudflare Tunnel and Access to securely expose app via HTTPS to remote users with Northeastern credentials.'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Bambala (Startup)',
      logo: null,
      location: 'East Brunswick, NJ',
      period: 'Jan 2023 – Sep 2024',
      description: 'Developed REST APIs on Google App Engine to integrate digital payments and built a Cypress automated testing framework. Refactored an Angular codebase using the NgRx state design pattern.',
      technologies: ['JavaScript', 'Angular', 'NgRx', 'Google App Engine', 'Cypress'],
      achievements: [
        'Developed REST APIs on Google App Engine to integrate digital payments, boosting transaction reliability by 25%.',
        'Built a Cypress automated testing framework, cutting QA time by 50% and ensuring stable deployments in production.',
        'Refactored an Angular codebase using the NgRx state design pattern, enhancing maintainability and reducing state bugs by 30%.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative w-full scroll-mt-20 bg-[#f8f5f3] py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-12">
          <h2 className="text-5xl font-semibold tracking-[-0.04em] text-[#1d2a2a]">Experience</h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3 }}
              className="rounded-[24px] border border-[#e7e0dd] bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-[#ece4e1] bg-[#faf9f8] text-[#1d2a2a]">
                    {exp.logo ? (
                      <exp.logo />
                    ) : (
                      <span className="text-lg font-semibold text-[#1d2a2a]">B</span>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold text-[#1d2a2a]">{exp.company}</h3>
                    </div>
                    <p className="mt-1 text-base text-slate-600">{exp.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-500 xl:justify-end">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">{exp.description}</p>

              <ul className="mt-5 space-y-3">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-[#404b4b]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#697474]" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#e7e2df] bg-[#f9fbfb] px-2.5 py-1.5 text-xs font-medium text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
