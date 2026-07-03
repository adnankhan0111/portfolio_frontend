import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus({ type: '', message: '' });

  try {
    // 1. Backend API call - Database save
    const API_URL = window.location.hostname === 'localhost'
      ? 'http://localhost:5000/api/contact'
      : 'https://adnan-portfolio-backend.up.railway.app/api/contact';

    const backendResponse = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    });

    // 2. EmailJS - Email notification
    const emailResult = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
      },
      'YOUR_PUBLIC_KEY'
    );

    // Both successful
    if (backendResponse.ok && emailResult.status === 200) {
      setStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      });
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } else {
      setStatus({ type: 'error', message: 'Something went wrong. Try again.' });
    }

  } catch (error) {
    console.error('Error:', error);
    setStatus({ 
      type: 'error', 
      message: error.message.includes('Failed to fetch') 
        ? 'Backend not reachable. Check Railway deployment.'
        : 'Failed to send message. Try again.'
    });
  } finally {
    setLoading(false);
  }
};

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'adnan.khan@example.com', href: 'mailto:adnan.khan@example.com' },
    { icon: FiMapPin, label: 'Location', value: 'Lucknow, Uttar Pradesh, India', href: null },
    { icon: FiPhone, label: 'Phone', value: '+91 XXXXXXXXXX', href: 'tel:+91XXXXXXXXXX' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="text-xl font-display font-bold text-white mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 uppercase tracking-wider">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white/70 hover:text-primary-400 transition-colors text-sm">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white/70 text-sm">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-4">Find me on</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/adnankhan0111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 glass rounded-full text-sm text-white/60 hover:text-white hover:border-primary-500/30 transition-all hoverable"
                    whileHover={{ scale: 1.05 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/adnan-khan-104319233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 glass rounded-full text-sm text-white/60 hover:text-white hover:border-primary-500/30 transition-all hoverable"
                    whileHover={{ scale: 1.05 }}
                  >
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <h3 className="text-xl font-display font-bold text-white mb-8">
                Send a Message
              </h3>

              <div className="space-y-5">
                {['name', 'email', 'subject'].map((field) => (
                  <div key={field}>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formState[field]}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all text-sm"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-primary-500/50 focus:bg-white/8 transition-all text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status message */}
                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`flex items-center gap-2 text-sm p-3 rounded-xl ${
                        status.type === 'success'
                          ? 'bg-accent-400/10 text-accent-400 border border-accent-400/20'
                          : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}
                    >
                      {status.type === 'success' ? <FiCheck /> : <FiAlertCircle />}
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-all hoverable"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;