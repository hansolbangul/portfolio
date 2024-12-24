import { motion } from "framer-motion";
import { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/80 p-6 shadow-lg transition-all hover:shadow-xl dark:from-zinc-800 dark:to-zinc-800/80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-white/5" />
      
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {experience.title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{experience.organization}</span>
              <span>•</span>
              <span>{experience.period}</span>
            </div>
          </div>
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              experience.color === "blue"
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                : experience.color === "green"
                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                : experience.color === "purple"
                ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                : experience.color === "yellow"
                ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                : "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
            }`}
          >
            {experience.icon}
          </div>
        </div>

        <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}
