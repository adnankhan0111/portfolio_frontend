import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

const AnimatedSphere = () => (
  <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
    <Sphere args={[1.2, 64, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe
      />
    </Sphere>
  </Float>
);

const FloatingShape = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 10, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
      delay,
    }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background shapes */}
      <FloatingShape className="w-96 h-96 bg-primary-500 -top-20 -left-20" delay={0} />
      <FloatingShape className="w-64 h-64 bg-accent-400 top-1/2 -right-10" delay={2} />
      <FloatingShape className="w-80 h-80 bg-primary-700 -bottom-20 left-1/3" delay={4} />

      {/* 3D Canvas - Background */}
      <motion.div style={{ y, opacity }} className="absolute right-0 w-full max-w-lg h-[600px] hidden lg:block">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
          <AnimatedSphere />
        </Canvas>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-sm text-white/70 font-mono">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Adnan</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-xl md:text-2xl text-white/60 font-light mb-6"
            >
              <span className="text-white/80 font-medium">Full Stack Developer</span> specializing in{' '}
              <span className="text-primary-400">MERN Stack</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-base md:text-lg text-white/40 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              I craft exceptional digital experiences with clean code and creative design.
              Passionate about building scalable web applications that make a real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="group flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-all hoverable animated-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail size={18} />
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>

              {/* View Resume Button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-8 py-4 glass text-white rounded-full font-medium transition-all hoverable hover:border-primary-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={18} />
                View Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex gap-8 mt-16 justify-center lg:justify-start"
            >
              {[
                { label: 'Projects Completed', value: '4+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Internships', value: '2' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-display font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2, type: 'spring', stiffness: 100 }}
            style={{ y, opacity }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 opacity-30 blur-3xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.9, 1.1, 0.9],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Animated border ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 animate-spin-slow opacity-60" />
              
              {/* Photo container */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-dark-950 shadow-2xl">
                <img
                  src="/profile.png"
                  alt="Adnan Khan"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-5xl font-bold text-white font-display">
                        AK
                      </div>
                    `;
                  }}
                />
              </div>

              {/* Online status dot */}
              <motion.div
                className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-accent-400 border-4 border-dark-950 shadow-lg shadow-accent-400/50"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-white/30 font-mono">Scroll to explore</span>
        <FiArrowDown className="text-white/30" />
      </motion.div>
    </section>
  );
};

export default Hero;