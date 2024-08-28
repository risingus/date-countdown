'use client'
import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import { ISourceOptions } from '@tsparticles/engine';

const particlesOptions: ISourceOptions = {
  interactivity: {
    detectsOn: 'window',
    events: {
      onHover: {
        enable: true,
        mode: 'bubble'
      },
    },
    modes: {
      bubble: {
        distance: 300,
        size: 2,
        duration: 10,
        opacity: .5,
        color: {
          value: 'rgb(255, 1, 158)'
        }
      }
    }
  },
  smooth: true,
  particles: {
    fill: true,
    color: {
      value: '#ffffff',
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      warp: true,
      enable: true,
      speed: .5,
      outModes: {
        default: 'split',
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 100,
    },
    opacity: {
      value: 0.25,
    },
    shape: {
      type: 'circle',
    },
    stroke: {
      color: '#fffff',
      opacity: 0.8,
      width: 1,
    },
    size: {
      value: {
        min: .25,
        max: 1
      }
    }
  },
};

export const Particlesview = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (init) {
      return;
    }
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);


  return (
    <div style={{ position: 'absolute', height: '100vh', width: '100%', zIndex: 1 }}>
      {init && <Particles options={particlesOptions} />}
    </div>
  );
};

