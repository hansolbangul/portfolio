'use client';

import { FaEnvelope, FaLinkedin, FaBlog, FaCoffee, FaGithub } from "react-icons/fa";
import { SectionLayout } from "@/shared/components/layout/SectionLayout";
import { motion } from "framer-motion";
import HoverScale from "@/shared/components/animations/motion/HoverScale";

const contactLinks = [
  {
    name: "GitHub",
    icon: () => (
      <FaGithub
        className="text-3xl transition-colors text-gray-800 group-hover:text-gray-600 
          dark:text-gray-300 dark:group-hover:text-white"
      />
    ),
    url: "https://github.com/hansolbangul",
  },
  {
    name: "LinkedIn",
    icon: () => (
      <FaLinkedin
        className="text-3xl transition-colors text-blue-600 group-hover:text-blue-700
          dark:text-blue-400 dark:group-hover:text-blue-300"
      />
    ),
    url: "https://www.linkedin.com/in/hansolbangul/",
  },
  {
    name: "Email",
    icon: () => (
      <FaEnvelope
        className="text-3xl transition-colors text-red-600 group-hover:text-red-700
          dark:text-red-400 dark:group-hover:text-red-300"
      />
    ),
    url: "mailto:ruaenddl981028@naver.com",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <SectionLayout id="contact" title="Contact" icon={FaEnvelope}>
      <div className="max-w-4xl mx-auto space-y-16">
        {/* 기존 이메일 섹션 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.h2 variants={item} className="text-3xl font-bold text-gray-800 dark:text-white">
            Let's Connect!
          </motion.h2>
          <motion.p variants={item} className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            ruaenddl981028@naver.com
          </motion.p>
        </motion.div>

        {/* 새로운 연락 섹션 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* LinkedIn 카드 */}
          <motion.a
            href="https://www.linkedin.com/in/hansolbangul/"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 
              shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-blue-500 text-white">
                <FaLinkedin size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  Coffee Chat & Tech Talk
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  간단한 커피챗이나 기술적인 이야기를 나누고 싶으신 분들은 언제든 연락주세요!
                </p>
              </div>
            </div>
          </motion.a>

          {/* 블로그 카드 */}
          <motion.a
            href="https://blog.hansolbangul.com/"
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 
              shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 rounded-full bg-purple-500 text-white">
                <FaBlog size={24} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-500 transition-colors">
                  Tech Blog
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  저의 자세한 기술 내용과 다양한 기술 포스팅을 확인해보세요!
                </p>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* 기존 연락처 섹션 */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactLinks.map((link) => (
              <HoverScale key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-8 rounded-xl bg-white dark:bg-gray-800 
                    shadow-lg hover:shadow-xl transition-all"
                >
                  {link.icon()}
                  <span className="mt-4 font-medium text-gray-800 dark:text-white">
                    {link.name}
                  </span>
                </a>
              </HoverScale>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
