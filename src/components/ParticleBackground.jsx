import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
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
              area: 800,
            },
          },
          color: {
            value: ['#8b5cf6', '#6366f1', '#a78bfa', '#10b981'],
          },
          shape: {
            type: ['circle', 'triangle', 'polygon'],
            polygon: { sides: 6 },
          },
          opacity: {
            value: { min: 0.1, max: 0.4 },
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
            color: '#8b5cf6',
            opacity: 0.1,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.03,
            },
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: 'none',
            random: true,
            straight: false,
            outModes: 'bounce',
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
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
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: ['grab', 'bubble'],
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.3,
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