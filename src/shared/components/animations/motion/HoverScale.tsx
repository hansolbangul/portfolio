import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  duration?: number;
}

export default function HoverScale({
  children,
  className = "",
  scale = 1.05,
  duration = 0.2,
}: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{
        scale,
      }}
      transition={{
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
