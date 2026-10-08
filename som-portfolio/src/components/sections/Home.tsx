'use client';

import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/somshrivastava', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/somshrivastava', label: 'LinkedIn' }
  ];

  return (
    <section id="home" className="relative w-full min-h-screen scroll-mt-20 overflow-hidden bg-[#f9f7f5]">
      <div className="section-shell relative z-10 py-28 sm:py-32 lg:py-36">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img
                src="/profile-pic.jpg"
                alt="Som Shrivastava"
                className="h-12 w-12 rounded-full object-cover border border-[#ece2df]"
              />
                <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[#5f6767]">
                  <span className="rounded-full border border-[#e9e3e0] bg-white px-3 py-1.5">Prev @ AWS</span>
                  <span className="rounded-full border border-[#e9e3e0] bg-[#faf7f6] px-3 py-1.5">Prev @ Microsoft</span>
                </div>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.06em] text-[#1d2a2a] sm:text-6xl lg:text-7xl">
                Som Shrivastava
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-8 text-[#4a5353]">
              I’m a software engineer focused on systems, data, and product-minded engineering — building tools that make real work easier, faster, and more reliable.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                download="Som_Shrivastava_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-[#1d2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b3939]"
                style={{ color: '#ffffff' }}
              >
                View Resume
                <Download className="w-4 h-4" style={{ color: '#ffffff' }} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#e8e1df] bg-white px-6 py-3 text-sm font-semibold text-[#1d2a2a] transition hover:border-[#d9d1ce]"
              >
                Let’s connect
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7e2df] bg-white text-[#4a5353] transition hover:border-[#dcd2cf] hover:text-[#1d2a2a]"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#e7e0dd] bg-white p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#687373]">Northeastern University</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#1d2a2a]">B.S. in Computer Science & Mathematics</h2>
            <p className="mt-2 text-sm text-[#687373]">December 2027</p>

            <div className="mt-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#687373]">Relevant Coursework</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Statistics & Stochastic Processes', 'Differential Equations', 'Linear Algebra', 'Artificial Intelligence', 'Multivariable Calculus', 'Data Structures & Algorithms', 'Object-Oriented Design'].map((item) => (
                    <span key={item} className="rounded-full border border-[#ece5e2] bg-[#faf9f8] px-2.5 py-1.5 text-[11px] text-[#1d2a2a]">
                      {item}
                    </span>
                  ))}
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
