'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { FaGamepad, FaTimes } from 'react-icons/fa';
import MemoryCard from './games/MemoryCard';

const FloatingGameButton = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: 'memory',
      name: 'Memory Game',
      description: 'Find matching pairs of cards',
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
        className={`fixed bottom-8 right-8 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-50 ${
          theme === 'light'
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-purple-500 text-white hover:bg-purple-400'
        }`}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          setIsOpen(!isOpen);
          setSelectedGame(null);
        }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaGamepad size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && !selectedGame && (
          <motion.div
            className="fixed bottom-24 right-8 w-64 z-40"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div
              className={`p-4 rounded-xl shadow-lg ${
                theme === 'light'
                  ? 'bg-white'
                  : 'bg-gray-900'
              }`}
            >
              <h3
                className={`text-lg font-semibold mb-4 ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}
              >
                Mini Games
              </h3>
              <div className="space-y-2">
                {games.map(game => (
                  <motion.button
                    key={game.id}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      theme === 'light'
                        ? 'hover:bg-purple-50 text-gray-700'
                        : 'hover:bg-purple-900/30 text-gray-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGame(game.id)}
                  >
                    <h4 className="font-medium">{game.name}</h4>
                    <p
                      className={`text-sm ${
                        theme === 'light'
                          ? 'text-gray-500'
                          : 'text-gray-400'
                      }`}
                    >
                      {game.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {isOpen && selectedGame && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-40 p-4"
            variants={gameVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedGame(null);
              }
            }}
          >
            <div className={`w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl ${
              theme === 'light' ? 'bg-white' : 'bg-gray-900'
            }`}>
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className={`text-xl font-semibold ${
                  theme === 'light' ? 'text-gray-800' : 'text-white'
                }`}>
                  {games.find(game => game.id === selectedGame)?.name}
                </h3>
                <button
                  onClick={() => setSelectedGame(null)}
                  className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                    theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                  }`}
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="p-4">
                {selectedGame && (
                  <>
                    {(() => {
                      const selectedGameData = games.find(game => game.id === selectedGame);
                      if (selectedGameData?.component) {
                        const GameComponent = selectedGameData.component;
                        return <GameComponent />;
                      }
                      return null;
                    })()}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingGameButton;
