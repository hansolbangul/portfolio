"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-black/10 backdrop-blur-md py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <motion.p
            className="text-sm text-neutral-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {new Date().getFullYear()} HJ. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex items-center justify-center gap-2 text-xs text-neutral-500"
            whileHover={{ y: -2 }}
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary/50" />
            <span>Built with</span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"
              whileHover={{ scale: 1.1 }}
            >
              Next.js
            </motion.span>
            <span>&</span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400"
              whileHover={{ scale: 1.1 }}
            >
              Framer Motion
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
