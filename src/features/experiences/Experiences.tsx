"use client";

import { SectionLayout } from "@/shared/components/layout/SectionLayout";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaStore,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdScience } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

type Experience = {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  icon?: React.ReactNode;
  images?: string[];
  color?: string;
};

const experiences: Experience[] = [
  {
    title: "FE 기술 블로그 커뮤니티 '우당탕탕 도서관' 운영",
    organization: "개인",
    period: "2024.01 - 2024.03",
    description:
      "프론트엔드 개발자들이 주마다 같은 주제로 포스팅을 작성하고 공유하는 커뮤니티를 기획하고 운영했습니다. 온/오프라인 활동을 통해 개발자 네트워킹과 지식 공유의 장을 만들었습니다.",
    achievements: [
      "1기 5명, 2기 18명의 멤버를 확보하여 커뮤니티 규모 확장",
      "매주 평균 5건 이상의 기술 포스팅 아카이빙 달성",
      "주 1회 오프라인 미팅을 통한 기술 토론 진행",
      "'우땅콘' 컨퍼런스를 통해 시니어 개발자들의 경험 공유 세션 기획",
    ],
    icon: <IoLibrary className="text-2xl" />,
    images: ["/images/library/1.jpg", "/images/library/2.jpg"],
    color: "blue",
  },
  {
    title: "컴퓨터공학과 조교 & 조교장",
    organization: "성결대학교",
    period: "2017.04 - 2021.09",
    description:
      "6학기 동안 컴퓨터공학과 실습실 조교로 근무하며, 실습 환경 관리와 신입 조교 교육을 담당했습니다. 2019년에는 조교장으로서 전체 실습실 운영을 총괄했습니다.",
    achievements: [
      "강의실당 44대의 컴퓨터 하드웨어 관리 및 업그레이드 진행",
      "신입 조교 대상 업무 프로세스 및 하드웨어 CS 교육 실시",
      "실습실 운영 매뉴얼 작성 및 업무 프로세스 개선",
    ],
    icon: <FaChalkboardTeacher className="text-2xl" />,
    color: "green",
  },
  {
    title: "자연어처리 연구 연구원",
    organization: "성결대학교 x 고려대학교",
    period: "2019.02 - 2019.09",
    description:
      "인공지능 자연어 처리 연구에 참여하여 텍스트 감성 분석과 미등록어 인식 모델 개발에 기여했습니다.",
    achievements: [
      "국립국어원 형태소 데이터 기반 긍정/부정 문장 추출 알고리즘 개발",
      "JavaScript 기반 뉴스 기사 크롤링 스케줄러 구현",
      "접미 형태소열 기반 미등록어 인식 확률 모델 논문 작성 참여",
    ],
    icon: <MdScience className="text-2xl" />,
    color: "purple",
  },
  {
    title: "스크래치 코딩 봉사 Tellus 동아리 초대 동아리장",
    organization: "라즈베리파이 재단 + 성결대학교",
    period: "2017.04 - 2019.09",
    description:
      "코드클럽을 통해 초등학생 대상 코딩 교육을 진행하고, 대학교 내 코딩 교육 동아리를 설립하여 교육자 양성에 힘썼습니다.",
    achievements: [
      "평촌 초등학교 5학년 대상 스크래치 코딩 교육 진행",
      "약 100시간의 코딩 교육 봉사활동 수행",
      "성결대학교 코딩 교육 동아리 Tellus 설립 및 운영",
      "학과 학생 대상 코딩 교육자 양성 프로그램 기획",
    ],
    icon: <FaBookReader className="text-2xl" />,
    images: ["/images/tellus/1.jpg", "/images/tellus/2.jpg"],
    color: "yellow",
  },
  {
    title: "올리브영 직영/가맹점 근무",
    organization: "개인",
    period: "2019.07 - 2020.06",
    description:
      "올리브영 상록수역 직영점과 중앙역 가맹점에서 근무하며 고객 서비스와 매장 운영 경험을 쌓았습니다.",
    achievements: [
      "뷰티 제품 전문 지식 습득 및 고객 상담 서비스 제공",
      "매장 재고 관리 및 진열 업무 수행",
      "고객 응대를 통한 커뮤니케이션 능력 향상",
    ],
    icon: <FaStore className="text-2xl" />,
    color: "pink",
  },
];

type Education = {
  school: string;
  location: string;
  degree?: string;
  major?: string;
  gpa?: string;
  period: string;
  icon: React.ReactNode;
  color: string;
};

const educations: Education[] = [
  {
    school: "성결대학교",
    location: "경기도 안양시",
    degree: "학사",
    major: "컴퓨터공학과",
    gpa: "3.25/4.5",
    period: "2017 - 2024",
    icon: <FaGraduationCap className="text-2xl" />,
    color: "blue",
  },
  {
    school: "성안고등학교",
    location: "경기도 안산시",
    period: "2014 - 2017",
    icon: <FaSchool className="text-2xl" />,
    color: "green",
  },
];

type IconType = React.ReactNode;

interface ExperiencesProps {
  icon: IconType;
}

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const getGradient = (color: string) => {
    const gradients = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      yellow: "from-yellow-500 to-yellow-600",
      pink: "from-pink-500 to-pink-600",
    };
    return (
      gradients[color as keyof typeof gradients] || "from-gray-500 to-gray-600"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-[400px] h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {experience.images ? (
        <div className="h-64 relative rounded-t-xl overflow-hidden">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="w-full h-full"
          >
            {experience.images.map((image, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${experience.title} image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div
          className={`h-64 relative rounded-t-xl overflow-hidden bg-gradient-to-br ${getGradient(
            experience.color || "gray"
          )}`}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-6xl opacity-80">{experience.icon}</div>
          </div>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`p-2 rounded-lg bg-gradient-to-br ${getGradient(
              experience.color || "gray"
            )}`}
          >
            {experience.icon && (
              <div className="text-white">{experience.icon}</div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {experience.organization} | {experience.period}
            </p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
          {experience.description}
        </p>
        <ul className="list-disc list-inside space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: Education;
  index: number;
}) => {
  const getGradient = (color: string) => {
    const gradients = {
      blue: "from-blue-400/20 to-blue-500/20 dark:from-blue-400/10 dark:to-blue-500/10",
      green:
        "from-green-400/20 to-green-500/20 dark:from-green-400/10 dark:to-green-500/10",
    };
    return (
      gradients[color as keyof typeof gradients] ||
      "from-gray-400/20 to-gray-500/20"
    );
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-500 dark:text-blue-400",
      green: "text-green-500 dark:text-green-400",
    };
    return colors[color as keyof typeof colors] || "text-gray-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-[400px] bg-gradient-to-br backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
      <div className="relative p-8">
        <div className="flex items-start gap-6">
          <div
            className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${getGradient(
              education.color
            )}`}
          >
            <div className={`text-3xl ${getIconColor(education.color)}`}>
              {education.icon}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {education.school}
              </h3>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {education.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-1">
              {education.location}
            </p>
            {education.major && (
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-200">
                    [{education.degree}] {education.major}
                  </span>
                  {education.gpa && (
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      GPA: {education.gpa}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experiences = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <SectionLayout title="Experiences" icon={FaBriefcase}>
      <div className="mb-16">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-8">
          Education
        </h3>
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide">
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} index={index} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-8">
          Other Experience
        </h3>
        <div
          ref={containerRef}
          className="overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
        >
          <div className="flex gap-6 min-w-max">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Experiences;
