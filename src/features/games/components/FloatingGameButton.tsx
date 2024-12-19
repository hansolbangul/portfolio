"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGamepad, FaTimes } from "react-icons/fa";
import MemoryCard from "../games/MemoryCard";

const FloatingGameButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: "memory",
      name: "Memory Game",
      description: "Find matching pairs of cards",
      component: MemoryCard,
    },
    // Add more games here
  ];

  const buttonVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { scale: 1, rotate: 0 },
    exit: { scale: 0, rotate: 180 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const menuVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.8, y: 20 },
  };

  const gameVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 
          bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        whileTap="tap"
        onClick={() => setIsOpen(true)}
      >
        <FaGamepad size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && !selectedGame && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 m-4 max-w-md w-full relative"
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <FaTimes size={20} />
              </button>

              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Mini Games
              </h2>

              <div className="space-y-4">
                {games.map((game) => (
                  <motion.div
                    key={game.id}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 cursor-pointer 
                      hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGame(game.id)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {game.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{game.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {selectedGame && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-gray-900 z-40"
            variants={gameVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 
                hover:text-gray-700 dark:hover:text-gray-200 z-50"
              onClick={() => {
                setSelectedGame(null);
                setIsOpen(false);
              }}
            >
              <FaTimes size={24} />
            </button>
            {selectedGame === "memory" && <MemoryCard />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingGameButton;
