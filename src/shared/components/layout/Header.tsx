"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const isProjectDetail = pathname.startsWith("/project/detail/");

  useEffect(() => {
    if (!isProjectDetail) {
      const handleScroll = () => {
        const sections = ["home", "projects", "contact"];
        let current = "/";

        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = section === "home" ? "/" : `/#${section}`;
            }
          }
        });

        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isProjectDetail]);

  useEffect(() => {
    if (pathname.startsWith("/projects/")) {
      setActiveSection("/#projects");
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (href: string) => {
    return activeSection === href;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md
        bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 h-[65px]"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            {isProjectDetail && (
              <button
                onClick={() => router.back()}
                className="mr-4 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Back"
              >
                <IoArrowBack size={20} />
              </button>
            )}
            <Link
              href="/"
              className="text-lg font-bold flex items-center space-x-1 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              <span>HANSOL</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                JI
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-4">
            {!isProjectDetail && (
              <div className="hidden sm:flex items-center space-x-4">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 transition-colors duration-200 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white ${
                      isActive(item.href)
                        ? "text-gray-800 dark:text-white font-medium"
                        : ""
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}

            <ThemeToggle />

            {/* Mobile Menu Button */}
            {!isProjectDetail && (
              <button
                onClick={toggleMenu}
                className="sm:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
              </button>
            )}
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && !isProjectDetail && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white ${
                      isActive(item.href)
                        ? "text-gray-800 dark:text-white font-medium"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
