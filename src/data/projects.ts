import { projectDetailSchema, type ProjectDetail } from "@/types/schema";

export const projects = [
  {
    id: 1,
    title: "generate-router",
    description:
      "Next.js의 라우팅 시스템을 위한 타입 안전한 라우터 생성 CLI 라이브러리입니다. 'generate-router' 명령어 한 번으로 파일 시스템 기반의 라우팅을 TypeScript 타입으로 자동 생성하여 개발자 경험을 향상시킵니다.",
    period: "2023.12 - 현재",
    team: "개인 프로젝트",
    role: "개발자",
    techStack: {
      개발: [
        "TypeScript",
        "Node.js",
        "Rollup",
        "Jest",
        "PNPM",
        "GitHub Actions",
        "Yargs",
      ],
      프론트엔드: [],
      백엔드: [],
      개발도구: [],
      모바일: [],
      테스트: [],
      모니터링: [],
    },
    features: [
      "CLI 명령어를 통한 간편한 라우터 타입 생성 ('generate-router' 명령어 제공)",
      "TypeScript의 타입 시스템을 활용하여 컴파일 타임에 잘못된 라우트 사용을 방지",
      "pages 디렉토리와 app 디렉토리 구조 모두 지원 (--dir 옵션으로 선택)",
      "override 기능을 통해 Next.js의 useRouter와 Link 컴포넌트의 타입을 자동으로 추론",
      "자동화된 타입 생성으로 개발자의 수동 타입 정의 작업 최소화",
      "동적 라우트([id], [...slug] 등)에 대한 타입 안전성 보장",
      "타입 안전한 query parameter와 dynamic parameter 지원",
      "설정 파일을 통한 커스텀 라우트 타입 정의 기능",
    ],
    challenges: [
      {
        problem:
          "Next.js의 복잡한 파일 시스템 기반 라우팅에서 완벽한 타입 안전성을 보장해야 했습니다. 특히 동적 라우트와 중첩 라우트의 경우 타입 추론이 까다로웠습니다.",
        solutions: [
          "TypeScript의 Template Literal Types를 활용하여 라우트 문자열을 타입으로 변환",
          "재귀적 타입 추론을 통해 중첩된 라우트 구조도 정확하게 타입 추론",
          "AST 분석을 통한 파일 시스템 기반 라우팅 구조 파악",
          "설정 파일을 통해 커스텀 라우트 정의 지원",
        ],
        learned: [
          "TypeScript의 고급 타입 시스템(Template Literal, Recursive Types)에 대한 깊은 이해",
          "Next.js의 파일 시스템 기반 라우팅의 동작 원리 파악",
          "AST를 활용한 코드 분석 및 생성 기술 습득",
        ],
      },
      {
        problem:
          "기존 Next.js의 useRouter와 Link 컴포넌트를 타입 안전하게 오버라이딩하면서도, 개발자들이 쉽게 사용할 수 있는 CLI 도구로 만들어야 했습니다.",
        solutions: [
          "타입 오버라이딩을 통한 기존 Next.js 타입과의 호환성 유지",
          "사용자 친화적인 CLI 인터페이스 설계 ('generate-router ./pages ./types/routes.d.ts -o'과 같은 직관적인 명령어)",
          "자동 타입 생성 결과를 .d.ts 파일로 출력하여 즉시 사용 가능하도록 구현",
          "상세한 사용 설명서와 예제 코드 제공으로 진입 장벽 낮춤",
        ],
        learned: [
          "npm 패키지 배포와 버전 관리 경험",
          "CLI 도구 개발과 사용자 경험 최적화",
          "오픈소스 라이브러리 문서화의 중요성",
        ],
      },
    ],
    outcome: {
      achievements: [
        "npm 패키지로 배포하여 전세계 개발자들이 사용할 수 있는 오픈소스 라이브러리 제작",
        "GitHub Actions를 통한 자동 배포 파이프라인 구축",
        "npm 패키지 버전 관리 및 문서화 자동화",
        "타입스크립트 타입 시스템을 활용한 혁신적인 개발자 도구 제작",
        "Next.js 13+의 app router와 pages router 모두 지원하는 유연한 설계",
      ],
      improvements: [
        "CLI 도구 개발을 통한 개발자 경험(DX) 향상",
        "오픈소스 프로젝트 운영을 통한 문서화와 사용자 피드백 관리 경험",
      ],
    },
    github: "https://github.com/hansolbangul/generate-router",
    demo: "https://blog.hansolbangul.com/post/library-generate-router-1",
    thumbnail: "/images/projects/generate-router.png",
    images: [
      "/images/generate-router-1.png",
      "/images/generate-router-2.png",
      "/images/generate-router-3.png",
    ],
  },
  {
    id: 2,
    title: "데굴데굴 블로그",
    description: "Next.js app router 기반의 ISR을 활용한 개인 기술 블로그",
    period: "2024.01 - 현재",
    team: "개인 프로젝트",
    role: "풀스택 개발자",
    techStack: {
      개발: [],
      프론트엔드: ["Next.js", "TypeScript", "TailwindCSS", "React-Query"],
      백엔드: ["NotionAPI"],
      개발도구: ["Github", "Vercel", "PNPM", "Turborepo"],
      모바일: [],
      테스트: [],
      모니터링: [],
    },
    features: [
      "ISR + React-Query를 활용한 빌드 시점 PrefetchQuery",
      "Notion API를 활용한 서버리스 웹사이트 개발",
      "캐싱 처리를 통한 배포 시간 29분에서 2분으로 단축",
      "pnpm + turborepo의 모노레포 구조",
    ],
    challenges: [
      {
        problem:
          "대량의 마크다운 컨텐츠를 효율적으로 관리하고 렌더링하는 것이 과제였습니다.",
        solutions: [
          "ISR을 활용하여 빌드 시점에 정적 페이지 생성",
          "React-Query의 prefetchQuery를 활용하여 클라이언트 사이드 캐싱 구현",
          "마크다운 파싱 결과를 메모이제이션하여 렌더링 성능 최적화",
        ],
        learned: [
          "Next.js의 하이브리드 렌더링 전략",
          "React-Query를 활용한 효율적인 상태 관리",
          "웹 성능 최적화 기법들의 실제 적용",
        ],
      },
    ],
    outcome: {
      achievements: [
        "ISR을 활용한 효율적인 데이터 갱신",
        "모노레포를 통한 코드 재사용성 향상",
        "빌드 시간 최적화",
      ],
      improvements: [
        "prefetchQuery를 활용한 초기 로딩 성능 극대화",
        "모노레포를 통한 컴포넌트 의존성 개선",
      ],
    },
    github: "https://github.com/hansolbangul/notion-blog",
    demo: "https://blog.hansolbangul.com",
    thumbnail: "/images/blog-thumbnail.png",
    images: ["/images/blog-1.png", "/images/blog-2.png", "/images/blog-3.png"],
  },
  {
    id: 3,
    title: "메디큐브/포맨트 도산 스토어",
    description: "모바일 전용 매장 장바구니 시스템",
    period: "2024.08",
    team: "에이피알",
    role: "프론트엔드 개발자",
    techStack: {
      개발: [],
      프론트엔드: ["React.js", "Styled-Component", "Framer-Motion", "i18n"],
      백엔드: ["Amplify", "DynamoDB"],
      개발도구: ["Git", "GitHub Actions"],
      모바일: [],
      테스트: [],
      모니터링: [],
    },
    features: [
      "Framer-Motion을 활용한 앱 같은 Route Transition",
      "i18n을 활용한 4개 언어 다국어 서비스",
      "QR코드 기반 상품 리스트 관리",
      "서버리스 환경의 상품 관리 시스템",
    ],
    challenges: [
      {
        problem:
          "여러 국가의 사용자를 위한 다국어 지원과 실시간 장바구니 동기화가 필요했습니다.",
        solutions: [
          "i18n을 활용한 체계적인 다국어 시스템 구축",
          "DynamoDB를 활용한 실시간 장바구니 상태 동기화",
          "QR 코드 기반의 상품 정보 연동 시스템 구현",
        ],
        learned: [
          "글로벌 서비스를 위한 다국어 처리 방법",
          "NoSQL 데이터베이스의 실시간 동기화 패턴",
          "QR 코드 기반 시스템 설계 경험",
        ],
      },
    ],
    outcome: {
      achievements: [
        "단일 개발자로 프로젝트 완수",
        "다국어 지원 시스템 구축",
        "모바일 최적화 UI/UX 구현",
      ],
      improvements: [
        "서버리스 환경에서의 풀스택 개발 경험",
        "QR 코드 기반 데이터 관리 시스템 구축",
      ],
    },
    thumbnail: "/images/store-thumbnail.png",
    images: [
      "/images/store-1.png",
      "/images/store-2.png",
      "/images/store-3.png",
    ],
  },
  {
    id: 4,
    title: "포토그레이 웹앱",
    description: "Flutter와 Next.js를 활용한 하이브리드 앱 개발",
    period: "2024.02 - 현재",
    team: "에이피알",
    role: "프론트엔드 개발자",
    techStack: {
      개발: [],
      프론트엔드: [
        "Next.js",
        "TypeScript",
        "React-Query",
        "Zustand",
        "Styled-Component",
      ],
      백엔드: [],
      개발도구: ["Jest", "Cypress"],
      모바일: ["Flutter"],
      테스트: ["Jest", "Cypress"],
      모니터링: ["Sentry"],
    },
    features: [
      "Flutter와 Next.js 간 통신 아키텍처 설계",
      "Jest 테스트 커버리지 90% 달성",
      "React-Query를 활용한 낙관적 업데이트",
      "다양한 컴포넌트 패턴 적용",
    ],
    challenges: [
      {
        problem:
          "웹과 모바일 앱 간의 일관된 사용자 경험을 제공하는 것이 과제였습니다.",
        solutions: [
          "공통 API 계층을 설계하여 웹/앱 통신 구조 일원화",
          "React-Query와 Flutter의 상태 관리 패턴 통일",
          "테스트 자동화를 통한 품질 보증 체계 구축",
        ],
        learned: [
          "크로스 플랫폼 개발에서의 아키텍처 설계",
          "효율적인 테스트 전략 수립과 실행",
          "Flutter와 웹 기술의 장단점 비교",
        ],
      },
    ],
    outcome: {
      achievements: [
        "테스트 커버리지 90% 달성",
        "재사용 가능한 컴포넌트 라이브러리 구축",
        "효율적인 상태관리 시스템 구현",
      ],
      improvements: [
        "TDD 기반 개발 문화 정착",
        "컴포넌트 패턴을 통한 재사용성 향상",
      ],
    },
    thumbnail: "/images/photogray-thumbnail.png",
    images: [
      "/images/photogray-1.png",
      "/images/photogray-2.png",
      "/images/photogray-3.png",
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

export function getProject(id: string): ValidatedProject | undefined {
  return projects.find((p) => p.id === Number(id));
}
