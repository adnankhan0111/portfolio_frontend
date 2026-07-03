import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              className="text-xl font-display font-bold gradient-text inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {'<AK />'}
            </motion.a>
            <p className="text-sm text-white/30 flex items-center gap-1 justify-center md:justify-start">
              Built with <FiHeart className="text-red-400" size={14} /> by Adnan Khan © {new Date().getFullYear()}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { icon: FiGithub, href: 'https://github.com/adnankhan0111' },
              { icon: FiLinkedin, href: 'https://www.linkedin.com/in/adnan-khan-104319233/' },
              
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass text-white/40 hover:text-white hover:border-primary-500/30 transition-all hoverable"
                whileHover={{ scale: 1.15, y: -3 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full glass text-white/40 hover:text-white transition-all hoverable"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;