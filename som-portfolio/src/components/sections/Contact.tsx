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
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shrivastava.so@northeastern.edu',
      href: 'mailto:shrivastava.so@northeastern.edu',
      color: 'text-green-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '732-662-8615',
      href: 'tel:732-662-8615',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/somshrivastava',
      href: 'https://github.com/somshrivastava',
      color: 'text-slate-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/somshrivastava',
      href: 'https://linkedin.com/in/somshrivastava',
      color: 'text-blue-400'
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6">
        <div className="text-center mb-12 font-mono">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-blue-400">Get In</span>
            <span className="text-slate-100"> Touch</span>
          </h1>
          <p className="text-lg text-slate-300">
            Let's discuss opportunities, collaborations, or just say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="p-4 rounded border border-slate-600/50 shadow-sm bg-secondary">
              <h2 className="text-lg font-semibold text-slate-200 mb-4 font-mono">
                Send a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded border border-slate-600/50 bg-slate-800/50 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 rounded border border-slate-600/50 bg-slate-800/50 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 rounded border border-slate-600/50 bg-slate-800/50 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors text-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded border border-slate-600/50 bg-slate-800/50 text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-600 text-white font-semibold rounded transition-smooth flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded border border-slate-600/50 shadow-sm bg-secondary">
              <h2 className="text-xl font-semibold text-slate-200 mb-4 font-mono">
                Contact Information
              </h2>
              
              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-3 rounded border border-slate-600/30 bg-primary"
                  >
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                    <div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-slate-300">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
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
