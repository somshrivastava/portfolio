'use client';

import { Github, ExternalLink, Code, TrendingUp, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Equity Research Screener',
      status: 'Current',
      description: 'An equity research screener that analyzes 20 years of 10-K filings and macro data, training regression models on all 500 S&P firms to forecast valuation metrics and rank stocks.',
      technologies: ['Python', 'Scikit-learn', 'Matplotlib', 'Excel'],
      github: 'https://github.com/somshrivastava/equity-research-screener',
      demo: 'https://equity-research-screener.onrender.com',
      icon: TrendingUp
    },
    {
      title: 'Zerodha Automated Trading',
      status: 'Current',
      description: 'An automated derivatives trading system executing delta-hedged option strategies with live option-chain ingestion, execution, and P&L monitoring.',
      technologies: ['Python', 'Flask', 'Next.js', 'Zerodha', 'Options'],
      github: 'https://github.com/somshrivastava/zerodha-automated-trading',
      demo: 'https://zerodha-automated-trading.vercel.app',
      icon: TrendingUp
    },
    {
      title: 'NUtrition',
      status: 'Completed',
      description: 'A full-stack meal tracking app for Northeastern students with personalized recommendations, built with React, Supabase, and a Python ML model.',
      technologies: ['React', 'Supabase', 'Python', 'ML'],
      github: 'https://github.com/somshrivastava/NUtrition',
      demo: 'https://nutrition-oasis.vercel.app/',
      icon: Globe
    },
    {
      title: 'FlashcardStudying',
      status: 'Completed',
      description: 'A personalized learning platform built to help my sister practice sight words and build study consistency during COVID-19.',
      technologies: ['Firebase', 'Angular', 'TypeScript', 'PrimeNG'],
      github: 'https://github.com/somshrivastava/FlashcardStudying',
      demo: 'https://studying-words.web.app/dashboard/collections',
      icon: Brain
    },
    {
      title: 'StocksPortfolio',
      status: 'Completed',
      description: 'An educational stock portfolio simulator designed to make learning about markets fun, interactive, and accessible.',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'UI'],
      github: 'https://github.com/somshrivastava/StocksPortfolio4Talbot',
      demo: 'https://stocksportfolio4talbot.web.app/login',
      icon: TrendingUp
    },
    {
      title: 'Weather4You',
      status: 'Completed',
      description: 'A responsive weather application with detailed forecasts and map-integrated information for quick decision-making.',
      technologies: ['Angular', 'TypeScript', 'Google Maps', 'Firebase'],
      github: 'https://github.com/somshrivastava/Weather4You',
      demo: 'https://weather4you.web.app/home',
      icon: Globe
    }
  ];

  return (
    <section id="projects" className="relative w-full scroll-mt-20 bg-[#faf7f5] py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-5xl font-semibold tracking-[-0.04em] text-[#1d2a2a]">Projects</h2>

          <a
            href="https://github.com/somshrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-[#e8e1df] bg-white px-4 py-2.5 text-sm font-medium text-[#1d2a2a] shadow-sm transition hover:-translate-y-0.5"
          >
            <Github className="h-4 w-4" />
            View GitHub
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex min-h-[320px] flex-col rounded-[24px] border border-[#e7e0dd] bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#d9d1ce]"
            >
                <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#1d4ed8]">
                  <project.icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#1d2a2a]">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-[#ece6e3] bg-[#faf9f8] px-2.5 py-1.5 text-[11px] font-medium text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#e7e0dd] bg-white px-3.5 py-2 text-sm font-medium text-[#1d2a2a]"
                  >
                    <Code className="h-4 w-4" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1d2a2a] px-3.5 py-2 text-sm font-medium text-white"
                    style={{ color: '#ffffff' }}
                  >
                    <ExternalLink className="h-4 w-4" style={{ color: '#ffffff' }} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;