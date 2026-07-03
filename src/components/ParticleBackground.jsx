import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticleBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 z-0 pointer-events-none"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
            },
          },
          color: {
            value: darkMode 
              ? ['#8b5cf6', '#6366f1', '#a78bfa', '#10b981']
              : ['#7c3aed', '#4f46e5', '#8b5cf6', '#059669'],
          },
          shape: {
            type: ['circle', 'triangle', 'polygon'],
            options: {
              polygon: { sides: 6 },
            },
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: darkMode ? '#8b5cf6' : '#7c3aed',
            opacity: darkMode ? 0.1 : 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            outModes: 'bounce',
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 0.8,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ['grab', 'bubble'],
            },
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: darkMode ? 0.3 : 0.4,
                color: '#a78bfa',
              },
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 0.3,
              opacity: 0.6,
            },
          },
        },
        detectRetina: true,
        background: {
          color: 'transparent',
        },
      }}
    />
  );
};

export default ParticleBackground;