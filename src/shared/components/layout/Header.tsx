"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
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
              href="https://github.com/hansolbangul"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-purple-500 transition-colors ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <BsGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/hansolbangul/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-purple-500 transition-colors ${
                theme === "light" ? "text-gray-800" : "text-white"
              }`}
              whileHover={{ scale: 1.1 }}
            >
              <BsLinkedin />
            </motion.a>
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "light"
                  ? "hover:bg-gray-200 text-gray-800"
                  : "hover:bg-gray-800 text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <HiSun className="w-6 h-6" />
              ) : (
                <HiMoon className="w-6 h-6" />
              )}
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
