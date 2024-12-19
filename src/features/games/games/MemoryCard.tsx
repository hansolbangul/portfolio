import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🎨', '💻', '🎮', '📚', '🎵', '🎬', '🌟', '🚀'];

const MemoryCard = () => {
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
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Memory Game</h2>
        <div className="space-x-4">
          <span className="text-gray-600 dark:text-gray-300">Moves: {moves}</span>
          <button
            onClick={initializeGame}
            className="px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-400"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`aspect-square rounded-xl cursor-pointer ${
              card.isFlipped || card.isMatched
                ? "bg-white dark:bg-gray-700"
                : "bg-purple-100 dark:bg-purple-900"
            }`}
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
              {/* 앞면 (물음표) */}
              <div
                className={`absolute w-full h-full rounded-xl ${
                  "bg-gradient-to-br from-violet-400 via-indigo-400 to-blue-500"
                } backface-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
                style={{ transform: "rotateY(0deg)" }}
              >
                <div className="w-full h-full rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* 배경 패턴 */}
                  <div className="absolute inset-0">
                    {/* 상단 왼쪽 원형 */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                    {/* 하단 오른쪽 원형 */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                    {/* 중앙 장식 패턴 */}
                    <div className="absolute inset-2 border-2 border-white/20 rounded-lg" />
                    <div className="absolute inset-4 border-2 border-white/10 rounded-lg rotate-3" />
                    <div className="absolute inset-4 border-2 border-white/10 rounded-lg -rotate-3" />
                  </div>
                  
                  {/* 중앙 물음표 */}
                  <div className="relative transform transition-transform">
                    <div className="relative z-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-inner">
                      <div className="text-white text-5xl font-bold style-question-mark">
                        ?
                      </div>
                    </div>
                    {/* 물음표 뒤 글로우 효과 */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md -z-10 scale-110" />
                  </div>
                </div>
              </div>
              <div
                className={`absolute w-full h-full flex items-center justify-center rounded-lg text-3xl ${
                  "bg-white border-2 border-purple-200"
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
              className="p-6 rounded-xl text-center bg-white dark:bg-gray-900"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Congratulations! 🎉
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                You completed the game in {moves} moves!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-400"
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
