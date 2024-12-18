"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
    handleScroll(); // 초기 로드 시 실행

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // URL이 /projects/로 시작하면 projects 섹션을 활성화
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
      className={`fixed top-0 left-0 right-0 z-40 ${
        theme === "light"
          ? "bg-white/80 border-gray-200"
          : "bg-gray-900/80 border-gray-800"
      } backdrop-blur-md border-b`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold flex items-center space-x-1"
          >
            <span
              className={theme === "light" ? "text-gray-900" : "text-white"}
            >
              HANSOL
            </span>
            <span
              className={`bg-clip-text text-transparent ${
                theme === "light"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                  : "bg-gradient-to-r from-blue-400 to-indigo-400"
              }`}
            >
              JI
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1 sm:space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? theme === "light"
                        ? "text-blue-600"
                        : "text-blue-400"
                      : theme === "light"
                      ? "text-gray-600 hover:text-gray-900"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.div
                      className={`absolute bottom-0 left-0 h-0.5 w-full ${
                        theme === "light" ? "bg-blue-600" : "bg-blue-400"
                      }`}
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`sm:hidden p-2 rounded-lg ${
                theme === "light"
                  ? "hover:bg-gray-100 text-gray-600"
                  : "hover:bg-gray-800 text-gray-400"
              }`}
            >
              {isOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className={`sm:hidden absolute top-16 left-0 right-0 py-2 ${
                theme === "light"
                  ? "bg-white/95 border-gray-200"
                  : "bg-gray-900/95 border-gray-800"
              } border-b backdrop-blur-md`}
            >
              <div className="container mx-auto px-4">
                <nav className="flex flex-col space-y-2">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                        isActive(item.href)
                          ? theme === "light"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-blue-900/30 text-blue-400"
                          : theme === "light"
                          ? "text-gray-600 hover:bg-gray-50"
                          : "text-gray-400 hover:bg-gray-800/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
