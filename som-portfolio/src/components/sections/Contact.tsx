'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'som.shrivastava@gmail.com',
      href: 'mailto:som.shrivastava@gmail.com',
      tone: 'text-[#1d4ed8]'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '732-662-8615',
      href: 'tel:732-662-8615',
      tone: 'text-[#1d4ed8]'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/somshrivastava',
      href: 'https://github.com/somshrivastava',
      tone: 'text-slate-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/somshrivastava',
      href: 'https://linkedin.com/in/somshrivastava',
      tone: 'text-[#1d4ed8]'
    }
  ];

  return (
    <section id="contact" className="relative w-full scroll-mt-20 bg-[#f7f4f2] py-24 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 text-center sm:text-left">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[#1d4ed8]">Contact</p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#1d2a2a] sm:text-5xl">
            Let’s connect.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[24px] border border-[#e7e0dd] bg-white p-6 sm:p-8">
            <h3 className="mb-6 text-xl font-semibold text-[#1d2a2a]">Send a message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-2xl border border-[#e7e0dd] bg-[#faf9f8] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1d4ed8]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-2xl border border-[#e7e0dd] bg-[#faf9f8] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1d4ed8]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-2xl border border-[#e7e0dd] bg-[#faf9f8] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1d4ed8]"
                  placeholder="Opportunity / collaboration / hello"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-[#e7e0dd] bg-[#faf9f8] px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-[#1d4ed8]"
                  placeholder="Tell me about the role, project, or idea."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1d2a2a] px-5 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-slate-400"
                style={{ color: '#ffffff' }}
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/70 border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  Message sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  Failed to send. Please try again.
                </motion.div>
              )}
            </form>
          </div>

          <div className="space-y-5">
            <div className="rounded-[24px] border border-[#e7e0dd] bg-white p-6 sm:p-8">
              <h3 className="mb-6 text-xl font-semibold text-[#1d2a2a]">Contact details</h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 rounded-2xl border border-[#eee7e4] bg-[#faf9f8] p-3 transition hover:border-[#e0d8d5] hover:bg-[#f5f3f1]"
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-white ${info.tone}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-slate-500">{info.label}</p>
                      <p className="mt-1 text-sm font-medium text-[#1d2a2a]">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
