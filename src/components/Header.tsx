"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Header = () => {
  return (
    <motion.header
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">HJ</Link>
          </motion.div>

          <nav className="flex items-center gap-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-neutral-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <BsGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-neutral-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <BsLinkedin />
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
