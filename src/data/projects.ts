import { projectDetailSchema, type ProjectDetail } from "@/types/schema";

export const projects = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    description:
      "Next.js로 구축한 개인 포트폴리오 웹사이트로, 우주 테마와 인터랙티브한 애니메이션을 특징으로 합니다.",
    period: "2023.12 - 현재",
    team: "개인 프로젝트",
    role: "풀스택 개발자",
    techStack: {
      프론트엔드: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      개발도구: ["Git", "GitHub"],
    },
    features: [
      "인터랙티브한 우주 테마 배경과 패럴랙스 효과",
      "부드러운 전환 효과가 있는 풀페이지 스크롤링",
      "모달 뷰가 있는 프로젝트 쇼케이스",
      "PDF 다운로드 기능",
      "모든 디바이스에 대응하는 반응형 디자인",
    ],
    challenges: [
      {
        problem:
          "최적의 성능을 유지하면서 부드러운 패럴랙스 스크롤 효과를 구현하는 것이 과제였습니다.",
        solution:
          "Framer Motion의 성능 최적화 기능을 활용하고 스크롤 이벤트에 쓰로틀링을 적용하여 효율적인 애니메이션을 구현했습니다.",
        learned:
          "스크롤 기반 애니메이션의 성능 최적화 기법과 상태 관리의 중요성을 배웠습니다.",
      },
      {
        problem:
          "웹사이트의 시각적 스타일을 정확하게 반영하는 PDF 생성 시스템이 필요했습니다.",
        solution:
          "html2canvas와 jsPDF를 활용하여 웹 페이지의 스타일을 그대로 유지하면서 PDF로 변환하는 시스템을 구축했습니다.",
        learned:
          "복잡한 DOM 구조를 다루는 방법과 PDF 생성 관련 고급 기술을 습득했습니다.",
      },
      {
        problem:
          "웹사이트의 시각적 스타일을 정확하게 반영하는 PDF 생성 시스템이 필요했습니다.",
        solution:
          "html2canvas와 jsPDF를 활용하여 웹 페이지의 스타일을 그대로 유지하면서 PDF로 변환하는 시스템을 구축했습니다.",
        learned:
          "복잡한 DOM 구조를 다루는 방법과 PDF 생성 관련 고급 기술을 습득했습니다.",
      },
    ],
    outcome: {
      achievements: [
        "시각적으로 매력적이고 프로젝트를 효과적으로 보여주는 포트폴리오 제작",
        "모든 디바이스에서 완벽하게 작동하는 반응형 디자인 구현",
        "Lighthouse 성능 평가에서 높은 점수 달성",
      ],
      improvements: [
        "사용자 참여도를 높이기 위한 인터랙티브 요소 추가",
        "다크/라이트 테마 전환 기능 구현",
        "기술 블로그 섹션 추가",
      ],
    },
    github: "https://github.com/hansolbangul/portfolio",
    demo: "https://hansolbangul.vercel.app/",
    thumbnail: "/images/portfolio-thumbnail.png",
    images: [
      "/images/portfolio-1.png",
      "/images/portfolio-2.png",
      "/images/portfolio-3.png",
    ],
  },
];

// Validate projects data against schema
export const validatedProjects = projects.map((project) => {
  const result = projectDetailSchema.safeParse(project);
  if (!result.success) {
    console.error(`Invalid project data for ${project.title}:`, result.error);
    throw new Error(`Invalid project data for ${project.title}`);
  }
  return result.data;
});

export type ValidatedProject = (typeof validatedProjects)[number];
