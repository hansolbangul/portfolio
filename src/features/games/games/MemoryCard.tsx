import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🎨', '💻', '🎮', '📚', '🎵', '🎬', '🌟', '🚀'];

const MemoryCard = () => {
  const { theme } = useTheme();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const duplicatedEmojis = [...emojis, ...emojis];
    const shuffledEmojis = duplicatedEmojis.sort(() => Math.random() - 0.5);
    const newCards = shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(newCards);
    setFlippedCards([]);
    setMoves(0);
    setIsComplete(false);
  };

  const handleCardClick = (cardId: number) => {
    if (
      flippedCards.length === 2 ||
      flippedCards.includes(cardId) ||
      cards[cardId].isMatched
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstCard, secondCard] = newFlippedCards;
      if (cards[firstCard].emoji === cards[secondCard].emoji) {
        setCards(cards.map(card =>
          card.id === firstCard || card.id === secondCard
            ? { ...card, isMatched: true }
            : card
        ));
        setFlippedCards([]);
        
        // Check if all cards are matched
        const allMatched = cards.every(card => 
          (card.id === firstCard || card.id === secondCard)
            ? true
            : card.isMatched
        );
        if (allMatched) {
          setIsComplete(true);
        }
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const cardVariants = {
    initial: {
      rotateY: 0,
    },
    flipped: {
      rotateY: 180,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className={`p-6 rounded-xl ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    }`}>
      <div className="text-center mb-6">
        <h2 className={`text-2xl font-bold mb-2 ${
          theme === 'light' ? 'text-gray-800' : 'text-white'
        }`}>
          Memory Game
        </h2>
        <p className={`mb-4 ${
          theme === 'light' ? 'text-gray-600' : 'text-gray-300'
        }`}>
          Moves: {moves}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-lg ${
            theme === 'light'
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-purple-500 text-white hover:bg-purple-400'
          }`}
          onClick={initializeGame}
        >
          Reset Game
        </motion.button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <motion.div
            key={card.id}
            className={`aspect-square cursor-pointer perspective-1000 ${
              card.isMatched ? 'opacity-50' : ''
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            <motion.div
              className="relative w-full h-full transform-style-preserve-3d transition-transform duration-300"
              animate={
                flippedCards.includes(card.id) || card.isMatched
                  ? 'flipped'
                  : 'initial'
              }
              variants={cardVariants}
            >
              <div
                className={`absolute w-full h-full flex items-center justify-center rounded-lg text-3xl ${
                  theme === 'light'
                    ? 'bg-purple-100'
                    : 'bg-purple-900/30'
                } backface-hidden`}
              >
                ?
              </div>
              <div
                className={`absolute w-full h-full flex items-center justify-center rounded-lg text-3xl ${
                  theme === 'light'
                    ? 'bg-white border-2 border-purple-200'
                    : 'bg-gray-800 border-2 border-purple-500/30'
                } backface-hidden [transform:rotateY(180deg)]`}
              >
                {card.emoji}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              className={`p-6 rounded-xl text-center ${
                theme === 'light' ? 'bg-white' : 'bg-gray-900'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>
                Congratulations! 🎉
              </h3>
              <p className={`mb-6 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                You completed the game in {moves} moves!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg ${
                  theme === 'light'
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-purple-500 text-white hover:bg-purple-400'
                }`}
                onClick={initializeGame}
              >
                Play Again
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoryCard;
