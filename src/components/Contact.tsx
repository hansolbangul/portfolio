"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = [
  {
    title: "Email",
    value: "your.email@example.com",
    icon: <HiMail className="text-2xl" />,
    href: "mailto:your.email@example.com",
  },
  {
    title: "GitHub",
    value: "github.com/yourusername",
    icon: <FaGithub className="text-2xl" />,
    href: "https://github.com/yourusername",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    icon: <FaLinkedin className="text-2xl" />,
    href: "https://linkedin.com/in/yourusername",
  },
];

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function Contact() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initialParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow">Contact</h2>
          <p className="text-xl text-muted-foreground mb-12">
            함께 일하고 싶으시다면 연락해주세요
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-secondary/10 backdrop-blur-sm rounded-lg border border-secondary/30 hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="text-primary"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <div className="text-left">
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
              delay: particle.id * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}
