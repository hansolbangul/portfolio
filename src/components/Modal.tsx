import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
}

const Modal = ({ isOpen, onClose, children, width = 'max-w-2xl' }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Container */}
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={onClose}  // 컨테이너 클릭 시 모달 닫기
          >
            {/* Modal Content */}
            <motion.div
              className={`w-full ${width}`}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                duration: 0.3
              }}
              onClick={(e) => e.stopPropagation()}  // 모달 내용 클릭 시 이벤트 전파 중단
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
