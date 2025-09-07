'use client';

import { Github, ExternalLink, Code, TrendingUp, Brain, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Equity Research Screener',
      status: 'Current',
      description: 'A machine learning-powered equity research platform that uses neural networks to predict EBIT and optimize portfolios. Built with PyTorch and Streamlit for comprehensive financial data analysis and backtesting.',
      technologies: ['machine-learning', 'pytorch', 'lstm', 'neural-networks', 'backtesting'],
      github: 'https://github.com/somshrivastava/equity-research-screener',
      demo: 'https://equity-research-screener.onrender.com',
      icon: TrendingUp
    },
    {
      title: 'Zerodha Automated Trading',
      status: 'Current',
      description: 'Full-stack automated trading platform integrating Zerodha Kite API with Next.js frontend and Python backend. Features real-time strategy execution, risk management, and comprehensive portfolio tracking.',
      technologies: ['react', 'python', 'finance', 'nextjs', 'zerodha', 'automation-trading'],
      github: 'https://github.com/somshrivastava/zerodha-automated-trading',
      demo: 'https://zerodha-automated-trading.vercel.app',
      icon: TrendingUp
    },
    {
      title: 'NUtrition',
      status: 'Completed',
      description: 'A comprehensive dining hall menu tracker and nutrition planner built specifically for Northeastern students. Part of the Oasis Project Series, it helps students make informed dietary choices with detailed nutritional information.',
      technologies: ['react', 'postgres', 'firebase', 'typescript', 'vercel', 'supabase'],
      github: 'https://github.com/somshrivastava/NUtrition',
      demo: 'https://nutrition-oasis.vercel.app/',
      icon: Globe
    },
    {
      title: 'FlashcardStudying',
      status: 'Completed',
      description: 'A personalized learning platform built during COVID-19 to help my sister practice sight words.',
      technologies: ['css', 'html', 'firebase', 'angular', 'typescript', 'primeng'],
      github: 'https://github.com/somshrivastava/FlashcardStudying',
      demo: 'https://studying-words.web.app/dashboard/collections',
      icon: Brain
    },
    {
      title: 'StocksPortfolio',
      status: 'Completed',
      description: 'An educational stock portfolio simulator designed to make learning about markets fun and interactive.',
      technologies: ['css', 'html', 'firebase', 'angular', 'typescript', 'primeng'],
      github: 'https://github.com/somshrivastava/StocksPortfolio4Talbot',
      demo: 'https://stocksportfolio4talbot.web.app/login',
      icon: TrendingUp
    },
    {
      title: 'Weather4You',
      status: 'Completed',
      description: 'A responsive weather application providing detailed forecasts with interactive map integration.',
      technologies: ['css', 'html', 'firebase', 'angular', 'typescript', 'google-maps'],
      github: 'https://github.com/somshrivastava/Weather4You',
      demo: 'https://weather4you.web.app/home',
      icon: Globe
    }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-x-hidden bg-primary">

      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #58a6ff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-blue-400">Featured</span>
            <span className="text-slate-100"> Projects</span>
          </h1>
          <p className="text-lg text-slate-300 mb-6">
            Showcasing my work in software engineering and quantitative development
          </p>
          
          <a
            href="https://github.com/somshrivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600/50 hover:border-slate-500 text-slate-300 hover:text-slate-200 font-semibold rounded hover:bg-slate-700/20 transition-smooth bg-secondary"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-4 sm:p-6 rounded-lg border border-slate-600/50 shadow-lg hover:shadow-xl hover:border-slate-500 transition-smooth flex flex-col w-full min-w-0 bg-secondary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <project.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full flex-shrink-0 ${
                  project.status === 'Completed' 
                    ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                    : 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30'
                }`}>
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded border border-slate-600/50 text-slate-300 bg-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded border border-slate-600/50 hover:border-slate-500 text-slate-300 hover:text-slate-200 transition-smooth bg-primary"
                  >
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition-smooth"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
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