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
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChevronRight } from "react-icons/fa";

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
    images: [
      "/images/uddang/uddang-1.jpeg",
      "/images/uddang/uddang-2.jpeg",
      "/images/uddang/uddang-3.jpeg",
      "/images/uddang/uddang-4.jpeg",
      "/images/uddang/uddang-5.jpeg",
    ],
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
    images: [
      "/images/coding-service/coding-service-0.jpeg",
      "/images/coding-service/coding-service-1.jpeg",
      "/images/coding-service/coding-service-2.jpeg",
      "/images/coding-service/coding-service-3.jpeg",
      "/images/coding-service/coding-service-4.jpeg",
    ],
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
    images: [
      "/images/oliveyoung/oliveyoung-1.jpeg",
    ],
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

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const { title, organization, period, description, achievements, icon, images, color } =
    experience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full w-[300px] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-white/80 shadow-lg transition-all hover:shadow-xl dark:from-zinc-800 dark:to-zinc-800/80 sm:w-[350px] md:w-[400px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:to-white/5" />
      
      {images && images.length > 0 ? (
        <div className="relative h-56 w-full overflow-hidden">
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
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="!h-56 w-full"
          >
            {images.map((image, i) => (
              <SwiperSlide key={i} className="!h-56">
                <div className="relative h-full w-full">
                  <Image
                    src={image}
                    alt={`${title} 이미지 ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                  />
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute bottom-4 z-10 w-full">
              <div className="swiper-pagination !relative " />
            </div>
          </Swiper>
        </div>
      ) : (
        <div className={`relative flex h-56 w-full items-center justify-center ${
          color === "blue"
            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
            : color === "green"
            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
            : "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
        }`}>
          <span className="text-4xl opacity-50">{icon}</span>
        </div>
      )}

      <div className="relative flex flex-col gap-4 p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-zinc-500 dark:text-zinc-400">
              <span>{organization}</span>
              <span>•</span>
              <span>{period}</span>
            </div>
          </div>
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              color === "blue"
                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                : color === "green"
                ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                : "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
            }`}
          >
            {icon}
          </div>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-300">{description}</p>

        <div className="space-y-2 rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900/50">
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">주요 성과</h4>
          <ul className="ml-4 list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function EducationCard({
  education,
  index,
}: {
  education: Education;
  index: number;
}) {
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

export default function Experiences() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!scrollContainerRef.current) return;
      const { scrollWidth, scrollLeft, clientWidth } = scrollContainerRef.current;
      setShowScrollIndicator(scrollWidth - (scrollLeft + clientWidth) > 20);
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
      // 초기 체크
      checkScroll();
      // 리사이즈 시에도 체크
      window.addEventListener('resize', checkScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
      }
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <SectionLayout
      id="experiences"
      title="Experiences"
      icon={FaBriefcase}
    >
      <div className="space-y-12">
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Work Experience</h3>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
            >
              <div className="flex gap-4 items-stretch">
                {experiences.map((experience, index) => (
                  <ExperienceCard key={experience.title} experience={experience} index={index} />
                ))}
              </div>
            </div>
            {showScrollIndicator && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.2 }}
                transition={{ 
                  duration: .8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-3xl text-purple-500 dark:text-purple-400 sm:right-8"
              >
                <div className="flex items-center">
                  <FaChevronRight />
                  <FaChevronRight />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Education</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
            {educations.map((education, index) => (
              <EducationCard key={education.school} education={education} index={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
