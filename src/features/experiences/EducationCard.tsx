import { motion } from "framer-motion";
import { Education } from "@/data/experiences";

interface EducationCardProps {
  education: Education;
  index: number;
}

export default function EducationCard({ education, index }: EducationCardProps) {
  const { school, location, degree, major, gpa, period, icon, color } = education;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/80 p-6 shadow-lg transition-all hover:shadow-xl dark:from-zinc-800 dark:to-zinc-800/80 md:p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-white/5" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors md:h-14 md:w-14 ${
              color === "blue"
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
            }`}
          >
            <span className="text-2xl md:text-3xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 md:text-xl">
              {school}
            </h3>
            <div className="mt-2 flex flex-col gap-1 text-sm text-zinc-500 dark:text-zinc-400 md:text-base">
              <div className="flex items-center gap-2">
                <span>{location}</span>
                <span>•</span>
                <span>{period}</span>
              </div>
              {degree && (
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    {degree}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {(major || gpa) && (
          <div className="mt-2 space-y-2 rounded-xl bg-zinc-50 p-4 text-sm dark:bg-zinc-900/50 md:text-base">
            {major && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">전공:</span>
                <span className="text-zinc-600 dark:text-zinc-400">{major}</span>
              </div>
            )}
            {gpa && (
              <div className="flex items-center gap-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">학점:</span>
                <span className="text-zinc-600 dark:text-zinc-400">{gpa}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
