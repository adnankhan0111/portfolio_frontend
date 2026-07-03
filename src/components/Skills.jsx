import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const skillsData = [
  { name: 'React / Tailwind CSS', level: 72, color: '#61dafb' },
  { name: 'Node.js / Express', level: 78, color: '#68a063' },
  { name: 'MongoDB / Mongoose', level: 85, color: '#47a248' },
  { name: 'HTML5 / CSS3', level: 82, color: '#3178c6' },
  { name: 'JavaScript (ES6+)', level: 95, color: '#f7df1e' },
  { name: 'C / Python ', level: 50, color: '#38bdf8' },
  { name: 'Vercel / Netlify', level: 80, color: '#764abc' },
  { name: 'Docker / Render', level: 72, color: '#ff9900' },
  { name: 'Git / GitHub', level: 90, color: '#f05032' },
  { name: 'REST APIs / Postman', level: 85, color: '#e535ab' },
  { name: 'Prompts Engineering / GenAi  ', level: 92, color: '#ff9900' },
  
];

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3', 'Bootstrap', 'Responsive Design', 'UI/UX Principles'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs',  'WebSockets', 'JWT Auth', 'Microservices'],
  },
  {
    title: 'Database & DevOps',
    skills: ['MongoDB', 'MySQL', 'Docker', 'Render', 'Vercel', 'Netlify', 'CI/CD'],
  },
];

const SkillBar = ({ name, level, color, index, isInView }) => {
  const [displayLevel, setDisplayLevel] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, level, {
        duration: 1.5,
        delay: index * 0.1,
        ease: 'easeOut',
        onUpdate(value) {
          setDisplayLevel(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, level, index]);

  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white/70">{name}</span>
        <span className="text-sm font-mono text-primary-400">{displayLevel}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
              animation: 'shimmer 2s infinite',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            My Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Skills &{' '}
            <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <motion.div
            className="glass rounded-3xl p-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-semibold text-white mb-8">
              Technical Proficiency
            </h3>
            {skillsData.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} isInView={isInView} />
            ))}
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                className="glass rounded-2xl p-6 mb-4 glow-card"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                whileHover={{ y: -3 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary-400" />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-xs rounded-full glass border border-white/10 text-white/60 hover:border-primary-500/30 hover:text-primary-400 transition-all hoverable"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;