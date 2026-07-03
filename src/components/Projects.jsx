import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder, FiLock, FiUsers, FiVideo, FiSearch } from 'react-icons/fi';

const projects = [
  {
    title: 'Notes Keeper – MERN Application',
    description: 'A secure, enterprise-grade note-taking web app with JWT authentication, category management, priority color-coding, real-time search, CSV export, and demo data seeding.',
    icon: FiFolder,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT', 'bcrypt', 'Axios', 'Context API', 'CSV Export'],
    github: 'https://github.com/adnankhan0111/notes-keeper',
    live: '#',
    featured: true,
    period: 'May 2026',
    color: '#8b5cf6',
    highlights: [
      'JWT authentication & bcrypt password hashing',
      'Categories: Work, Personal, Study with color-coding',
      'Priority levels: High, Medium, Low',
      'Real-time search & CSV data export',
      'Seed demo data for instant testing',
    ],
  },
  {
    title: 'Secure Voting Application Backend',
    description: 'Role-based voting system backend with admin/user workflows, tamper-proof vote collection, and real-time vote aggregation. Fully tested with Postman.',
    icon: FiLock,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Postman', 'RBAC'],
    github: 'https://github.com/adnankhan0111/voting-app-backend',
    live: '#',
    featured: true,
    period: 'Apr 2026 - May 2026',
    color: '#6366f1',
    highlights: [
      'Role-Based Access Control (Admin/User)',
      'One vote per user validation',
      'Real-time vote count aggregation',
      'Rigorous Postman API testing',
      'Mongoose schema optimization',
    ],
  },
  {
    title: 'Random Video Chat & Messaging Platform',
    description: 'Real-time video chat and messaging platform with random user matching, responsive UI, and mobile-friendly design inspired by modern chat applications.',
    icon: FiVideo,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Socket.io', 'Real-Time Communication', 'Responsive Design'],
    github: 'https://github.com/adnankhan0111/random-video-chat',
    live: '#',
    featured: true,
    period: 'Nov 2025 - Jan 2026',
    color: '#10b981',
    highlights: [
      'Random user matching algorithm',
      'Real-time text chat integration',
      'Video communication features',
      'Mobile-friendly responsive UI',
      'Fast client-side performance',
    ],
  },
  {
    title: 'RepairWalla – Service Booking Website',
    description: 'Responsive appliance service website with comprehensive Technical SEO optimization, Schema markup, Google Search Console integration, and service-based landing pages.',
    icon: FiSearch,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Technical SEO', 'Schema Markup', 'Google Search Console', 'Core Web Vitals'],
    github: 'https://github.com/adnankhan0111/repairwalla',
    live: '#',
    featured: true,
    period: 'Jan 2024 - Feb 2024',
    color: '#f59e0b',
    highlights: [
      'Full Technical SEO optimization',
      'Schema Markup integration',
      'Google Search Console setup',
      'SEO-friendly URL structure',
      'Core Web Vitals optimized',
      'Fast loading pages',
    ],
  },
];

const ProjectCard = ({ project, index, isInView }) => (
  <motion.div
    className="glass rounded-3xl p-6 md:p-8 glow-card hoverable group h-full flex flex-col"
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -8 }}
  >
    {/* Project header */}
    <div className="flex items-start justify-between mb-6">
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
        style={{ background: `${project.color}15`, color: project.color }}
        whileHover={{ rotate: 10, scale: 1.1 }}
      >
        <project.icon size={26} />
      </motion.div>
      
      <div className="flex items-center gap-3">
        {/* Period badge */}
        <span
          className="hidden sm:inline-block px-3 py-1 text-xs rounded-full font-mono"
          style={{
            background: `${project.color}15`,
            color: project.color,
            border: `1px solid ${project.color}30`,
          }}
        >
          {project.period}
        </span>
        
        {/* Links */}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white/40 hover:text-white transition-colors hoverable"
          whileHover={{ scale: 1.15, rotate: 5 }}
          title="View Source Code"
        >
          <FiGithub size={20} />
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-white/40 hover:text-white transition-colors hoverable"
          whileHover={{ scale: 1.15, rotate: -5 }}
          title="Live Demo"
        >
          <FiExternalLink size={20} />
        </motion.a>
      </div>
    </div>

    {/* Content */}
    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
      {project.title}
    </h3>
    <p className="text-sm text-white/50 leading-relaxed mb-5">
      {project.description}
    </p>

    {/* Key Highlights */}
    <div className="mb-5">
      <h4 className="text-xs text-white/30 uppercase tracking-wider mb-2">Key Highlights</h4>
      <ul className="space-y-1.5">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-xs text-white/50 flex items-start gap-2">
            <span className="text-primary-400 mt-0.5 flex-shrink-0">▹</span>
            {highlight}
          </li>
        ))}
      </ul>
    </div>

    {/* Tech stack */}
    <div className="mt-auto">
      <h4 className="text-xs text-white/30 uppercase tracking-wider mb-2">Tech Stack</h4>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-white/50 border border-white/10 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Hover glow effect */}
    <div
      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at 50% 50%, ${project.color}10, transparent 40%)`,
      }}
    />
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');

  // All projects are featured, so filter isn't strictly needed
  const categories = ['all', 'fullstack', 'backend', 'frontend'];
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'fullstack'
      ? projects.filter(p => p.title.includes('MERN') || p.title.includes('Notes'))
      : filter === 'backend'
        ? projects.filter(p => p.title.includes('Backend') || p.title.includes('Voting'))
        : projects.filter(p => p.title.includes('Chat') || p.title.includes('Repair'));

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto">
            A showcase of my best work — from full-stack MERN applications to SEO-optimized websites
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'fullstack', label: 'Full Stack' },
              { key: 'backend', label: 'Backend' },
              { key: 'frontend', label: 'Frontend' },
            ].map(({ key, label }) => (
              <motion.button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                  filter === key
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'glass text-white/50 hover:text-white hover:border-primary-500/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={i} isInView={isInView} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/30 text-sm mb-4">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/adnankhan0111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass text-white rounded-full font-medium hoverable hover:border-primary-500/30 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={20} className="group-hover:text-primary-400 transition-colors" />
            <span>Explore My GitHub</span>
            <motion.span 
              className="text-primary-400"
              animate={{ x: [0, 5, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;