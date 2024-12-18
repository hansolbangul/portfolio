import { Metadata } from "next";
import Hero from "@/features/home/components/Hero";
import About from "@/features/about/About";
import Projects from "@/features/projects/Projects";
import Contact from "@/features/contact/Contact";
import FloatingGameButton from "@/features/games/components/FloatingGameButton";
import ScrollProgress from "@/shared/components/layout/ScrollProgress";

export const metadata: Metadata = {
  title: "지한솔 | 프론트엔드 개발자",
  description:
    "안녕하세요, 사용자 경험을 중요시하는 프론트엔드 개발자 지한솔입니다. 웹 개발 프로젝트와 기술 스택을 소개합니다.",
  openGraph: {
    title: "지한솔 | 프론트엔드 개발자",
    description:
      "안녕하세요, 사용자 경험을 중요시하는 프론트엔드 개발자 지한솔입니다. 웹 개발 프로젝트와 기술 스택을 소개합니다.",
    url: "https://hansolji.vercel.app",
    siteName: "지한솔 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "지한솔 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "지한솔 | 프론트엔드 개발자",
    description:
      "안녕하세요, 사용자 경험을 중요시하는 프론트엔드 개발자 지한솔입니다. 웹 개발 프로젝트와 기술 스택을 소개합니다.",
    images: ["/images/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <FloatingGameButton />
    </main>
  );
}
