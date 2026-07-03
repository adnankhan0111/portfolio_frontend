import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiBookOpen } from 'react-icons/fi';

const experiences = [
  {
    type: 'experience',
    role: 'Internship Trainee',
    company: 'Softpro India Computer Technologies (P) Ltd.',
    location: 'Lucknow, Uttar Pradesh, India',
    period: 'Aug 2023 - Mar 2024',
    duration: '8 months',
    employmentType: 'Internship · On-site',
    description: [
      'Developed and maintained web applications using HTML5, CSS3, and modern frontend technologies',
      'Built responsive and cross-browser compatible user interfaces for client projects',
      'Collaborated with senior developers on full-stack development tasks',
      'Participated in code reviews and team meetings to improve code quality',
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Responsive Design', 'Git', 'UI/UX'],
    color: '#8b5cf6',
  },
  {
    type: 'experience',
    role: 'Summer Internship',
    company: 'Softpro India Computer Technologies (P) Ltd.',
    location: 'Lucknow, Uttar Pradesh, India',
    period: 'Jul 2022 - Aug 2022',
    duration: '2 months',
    employmentType: 'Apprenticeship · On-site',
    description: [
      'Developed "Job-At-Mail" project using Django framework',
      'Implemented backend functionality with Python and Django ORM',
      'Created responsive frontend using CSS and Bootstrap',
      'Learned full-stack development workflow from requirement to deployment',
    ],
    tech: ['Python', 'Django', 'CSS', 'HTML', 'Bootstrap', 'JavaScript', 'SQLite', 'Git', 'Full-Stack Development'],
    color: '#6366f1',
  },
];

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    school: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    period: 'Sep 2023 - Jun 2026',
    grade: 'Grade: A',
    description: [
      'Currently pursuing B.Tech with focus on Full-Stack Development',
      'Learning modern web technologies: Node.js, Express.js, MongoDB, React.js',
      'Active in coding projects, hackathons, and tech communities',
      'Developing strong foundation in Data Structures & Algorithms',
    ],
    skills: ['Full-Stack Development', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'GitHub', 'Responsive Design'],
    color: '#10b981',
  },
  {
    degree: 'Diploma',
    field: 'Computer Science and Engineering',
    school: 'Board of Technical Education, Uttar Pradesh (BTEUP)',
    location: 'Uttar Pradesh',
    period: 'Nov 2020 - Jul 2023',
    grade: 'Grade: A+',
    description: [
      'Completed 3-year diploma in Computer Science with excellent academic record',
      'Built strong programming fundamentals in Java and Python',
      'Developed web applications using Django framework',
      'Participated in technical workshops and seminars',
    ],
    skills: ['Django', 'Java', 'Python', 'Web Development', 'Database Management'],
    color: '#f59e0b',
  },
  {
    degree: 'High School',
    field: 'Science',
    school: 'S S Public School',
    location: '',
    period: 'Mar 2019 - May 2020',
    grade: 'Grade: A',
    description: [
      'Completed secondary education with strong academic performance',
      'Built foundation in Science and Mathematics',
      'Participated in school-level competitions and activities',
    ],
    skills: [],
    color: '#ec4899',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary-400 font-mono text-sm tracking-widest uppercase">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4">
            Experience &{' '}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Work Experience Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-white mb-10 flex items-center gap-3">
            <FiBriefcase className="text-primary-400" size={28} />
            Work Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-dark-950 z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-500"
                    animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />

                {/* Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass rounded-2xl p-6 md:p-8 glow-card hoverable"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 text-xs rounded-full font-mono"
                        style={{
                          background: `${exp.color}20`,
                          color: exp.color,
                          border: `1px solid ${exp.color}40`,
                        }}
                      >
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <FiCalendar size={12} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <FiMapPin size={12} />
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-primary-400 font-medium mb-1 flex items-center gap-2">
                      <FiBriefcase size={14} />
                      {exp.company}
                    </p>
                    <p className="text-white/30 text-xs mb-4">{exp.employmentType}</p>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                          <span className="text-primary-400 mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-white/50 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-display font-bold text-white mb-10 flex items-center gap-3">
            <FiBookOpen className="text-accent-400" size={28} />
            Education
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400/50 via-accent-400/20 to-transparent" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative flex gap-8 mb-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-8 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-accent-400 bg-dark-950 z-10">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-accent-400"
                    animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </div>

                {/* Card */}
                <div className="ml-16 flex-1">
                  <motion.div
                    className="glass rounded-2xl p-6 md:p-8 glow-card hoverable"
                    whileHover={{ y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 text-xs rounded-full font-mono"
                        style={{
                          background: `${edu.color}20`,
                          color: edu.color,
                          border: `1px solid ${edu.color}40`,
                        }}
                      >
                        {edu.grade}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <FiCalendar size={12} />
                        {edu.period}
                      </span>
                      {edu.location && (
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <FiMapPin size={12} />
                          {edu.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-accent-400 font-medium mb-1">{edu.field}</p>
                    <p className="text-white/40 text-sm mb-4">{edu.school}</p>

                    {/* Description */}
                    <ul className="space-y-2 mb-5">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-sm text-white/50 flex items-start gap-2">
                          <span className="text-accent-400 mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Skills tags */}
                    {edu.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-md bg-accent-400/10 text-accent-400/80 border border-accent-400/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;