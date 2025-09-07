'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/somshrivastava', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/somshrivastava', label: 'LinkedIn' }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-primary">
      {/*
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #58a6ff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>*/}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Available Jan-Jun 2026 Co-Ops</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded-full border border-green-600/30">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Available Summer 2026 Internships</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src="/profile-pic.jpg" 
                    alt="Som Shrivastava" 
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-blue-400">Som</span>{' '}
                    <span className="text-slate-100">Shrivastava</span>
                  </h1>
                </div>
              </div>
              
              <h3 className="text-lg sm:text-xl text-blue-400 font-medium">
                Aspiring SWE and Quant Developer
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Building at the intersection of{' '}
                <span className="text-blue-400 font-semibold">software engineering</span>,{' '}
                <span className="text-purple-400 font-semibold">quantitative finance</span>, and{' '}
                <span className="text-green-400 font-semibold">algorithmic trading</span>.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Passionate about real-time systems, research-driven innovation, and creating impactful solutions.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded border border-slate-600/50 hover:border-blue-400/50 text-slate-400 hover:text-blue-400 transition-smooth bg-secondary"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <a
                href="/resume.pdf"
                download="Som_Shrivastava_Resume.pdf"
                className="group inline-flex items-center justify-center px-6 py-3 border border-slate-600/50 hover:border-slate-500 text-slate-300 hover:text-slate-200 font-semibold rounded transition-smooth bg-secondary"
              >
                <Download className="mr-2 w-4 h-4" />
                Resume
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-full rounded-lg border border-slate-600/50 p-5 shadow-lg bg-secondary">
              <div className="space-y-3">
                <div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="text-base font-semibold text-slate-200">Northeastern University</p>
                      <p className="text-sm text-slate-400">December 2027</p>
                    </div>
                    <p className="text-sm text-slate-400">Bachelor of Science in Computer Science & Mathematics</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-2">Relevant Coursework</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Data Structures & Algorithms', 'Object-Oriented Design', 'Artificial Intelligence', 'Discrete Structures', 'Statistics & Stochastic Processes', 'Differential Equations', 'Linear Algebra', 'Multivariable Calculus'].map((course) => (
                      <span key={course} className="px-3 py-1 text-xs font-medium rounded border border-slate-600/50 text-slate-300 bg-primary">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg border border-slate-600/50 p-5 shadow-lg bg-secondary">
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'TypeScript', 'JavaScript', 'Java', 'C++'].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs font-medium rounded border border-slate-600/50 text-slate-300 bg-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-green-400 mb-2">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Flask', 'NumPy', 'Pandas', 'Selenium', 'Angular', 'React.js', 'Next.js', 'Node.js', 'Express.js', 'Prisma', 'NgRx'].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs font-medium rounded border border-slate-600/50 text-slate-300 bg-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Services & Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['Git', 'GitHub', 'Jira', 'Docker', 'Google Cloud Platform', 'Firebase', 'Supabase', 'Postman', 'Figma', 'Vercel', 'VS Code'].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-xs font-medium rounded border border-slate-600/50 text-slate-300 bg-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
