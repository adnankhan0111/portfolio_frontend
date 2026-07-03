import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiServer, FiDatabase, FiLayers } from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend',
    desc: 'React, CSS, Bootstrap, Tailwind CSS, Framer Motion',
    color: '#6366f1',
  },
  {
    icon: FiServer,
    title: 'Backend',
    desc: 'Node.js, Express, REST APIs, WebSockets',
    color: '#10b981',
  },
  {
    icon: FiDatabase,
    title: 'Database',
    desc: 'MongoDB, MySQL',
    color: '#f59e0b',
  },
  {
    icon: FiLayers,
    title: 'DevOps',
    desc: 'Docker, Render, Netlify, Vercel, CI/CD, GitHub Actions',
    color: '#ec4899',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Turning Ideas Into{' '}
            <span className="gradient-text">Digital Reality</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 glow-card">
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                A passionate developer who loves to create
              </h3>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  I'm Adnan Khan, a Full Stack Developer with a deep passion for crafting 
                  beautiful, performant web applications. My journey in tech started with 
                  curiosity and evolved into a profession where I blend creativity with 
                  technical expertise.
                </p>
                <p>
                  With expertise in the MERN stack (MongoDB, Express.js, React, Node.js), 
                  I build end-to-end solutions that scale. I believe in writing clean, 
                  maintainable code and delivering exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS3', 'Tailwind'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm rounded-full glass border border-white/10 text-white/70 hover:border-primary-500/30 hover:text-white transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass rounded-2xl p-6 glow-card hoverable"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}20`, color: item.color }}
                >
                  <item.icon size={22} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;