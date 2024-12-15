'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Python", "Git", "AWS"
];

const About = () => {
  const controls = useAnimation();
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);

    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-lg text-neutral-300"
                whileHover={{ x: 10 }}
              >
                I'm a passionate developer who loves creating beautiful and functional web applications. With a keen eye for design and a strong foundation in modern web technologies, I strive to build seamless user experiences.
              </motion.p>

              <motion.p 
                className="text-lg text-neutral-300"
                whileHover={{ x: 10 }}
              >
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
              </motion.p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    custom={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: Math.random() * 10 - 5,
                    }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-primary/20 rounded-lg filter blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <motion.div
                      className="relative p-4 bg-primary/10 rounded-lg backdrop-blur-sm border border-primary/30 text-center"
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + (i % 5),
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
};

export default About;
