import { ReactNode } from 'react';
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaStore,
  FaGraduationCap,
  FaSchool,
} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdScience } from "react-icons/md";

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  icon?: ReactNode;
  images?: string[];
  color?: string;
}

export const experiences: Experience[] = [
  {
    id: 'fe-blog-community',
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
    id: 'computer-assistant',
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
    id: 'nlp-research',
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
    id: 'coding-education',
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
    id: 'oliveyoung',
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

export interface Education {
  school: string;
  location: string;
  degree?: string;
  major?: string;
  gpa?: string;
  period: string;
  icon: ReactNode;
  color: string;
}

export const educations: Education[] = [
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
