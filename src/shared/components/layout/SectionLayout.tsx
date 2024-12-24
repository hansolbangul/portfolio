'use client'
import { IconType } from "react-icons";

interface SectionLayoutProps {
  title: string;
  icon: IconType;
  children: React.ReactNode;
  id?: string;
}

export const SectionLayout = ({
  title,
  icon: Icon,
  children,
  id,
}: SectionLayoutProps) => {
  return (
    <section id={id} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <Icon className="text-2xl text-gray-700 dark:text-gray-300" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};
