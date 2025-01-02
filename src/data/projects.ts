import { projectDetailSchema, type ProjectDetail } from "@/types/schema";

export const projects = [
  {
    id: 1,
    title: "generate-router",
    description:
      "Next.js의 라우팅 시스템을 위한 타입 안전한 라우터 생성 CLI 라이브러리입니다. 'generate-router' 명령어 한 번으로 파일 시스템 기반의 라우팅을 TypeScript 타입으로 자동 생성하여 개발자 경험을 향상시킵니다.",
    period: "2023.12 - 현재",
    team: "개인 프로젝트",
    role: "프로젝트 개발",
    techStack: {
      개발: ["TypeScript", "Node.js", "Rollup", "PNPM", "Yargs"],
      테스트: ["Jest"],
      개발도구: ["Github", "Github Actions"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "CLI 명령어를 통한 간편한 라우터 타입 생성 ('generate-router' 명령어 제공)",
      "TypeScript의 타입 시스템을 활용하여 컴파일 타임에 잘못된 라우트 사용을 방지",
      "pages 디렉토리와 app 디렉토리 구조 모두 지원",
      "override 기능을 통해 Next.js의 useRouter와 Link 컴포넌트의 타입을 자동으로 추론",
      "자동화된 타입 생성으로 개발자의 수동 타입 정의 작업 최소화",
      "동적 라우트([id], [...slug] 등)에 대한 타입 안전성 보장",
      "타입 안전한 query parameter와 dynamic parameter 지원",
      "설정 파일을 통해 커스텀 라우트 타입 정의 기능",
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
    thumbnail: "/videos/generate-router-video.mp4",
  },
  {
    id: 2,
    title: "기술 블로그 개발",
    description:
      "Notion API를 기반으로 하는 개인 기술 블로그 프로젝트로, ISR과 React-Query를 활용하여 초기 로딩 성능을 극대화하고 데이터 관리의 효율성을 높였습니다. 또한 Turborepo를 통한 모노레포 구조를 도입하여 다른 프로젝트와 UI 및 기능을 공유할 수 있도록 개발했습니다.",
    period: "2024.01 - 진행 중",
    team: "개인 프로젝트",
    role: "프로젝트 개발",
    techStack: {
      개발: [
        "Next.js",
        "TypeScript",
        "React-Query",
        "NotionAPI",
        "Vercel",
        "TailwindCSS",
        "PNPM",
      ],
      테스트: [],
      개발도구: ["GitHub", "GitHub Actions"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "Next.js App Router 기반의 ISR(Incremental Static Regeneration)을 활용한 정적 사이트 생성",
      "ISR + React-Query를 통해 빌드 시점에서 데이터를 prefetch하여 초기 로딩 성능 극대화",
      "Notion API를 활용하여 서버리스 아키텍처 구현 및 데이터 관리",
      "Notion API 캐싱 처리로 배포 시간 29분에서 2분으로 단축",
      "모노레포 구조를 활용하여 '우당탕탕 도서관' 블로그와의 기능 공유",
    ],
    challenges: [
      {
        problem: "Notion API 호출 시간이 길어 배포 속도가 느려졌습니다.",
        solutions: [
          "Notion API의 데이터를 최초 1회 호출 후 캐싱하여 빌드 시간을 단축",
          "빌드 프로세스 최적화를 위해 React-Query의 prefetchQuery를 활용",
        ],
        learned: [
          "캐싱 전략을 통해 API 호출이 많은 프로젝트의 성능을 개선하는 방법",
          "빌드 시점 데이터 로딩 및 클라이언트 초기 로딩 최적화 기술",
        ],
      },
      {
        problem:
          "SSG(Static Site Generation)의 한계로 새로운 게시물이 반영되지 않는 문제",
        solutions: [
          "Next.js의 ISR을 도입하여 revalidate 주기를 설정함으로써 새로운 포스팅에 대한 대응",
          "사용자 경험을 개선하기 위해 정적 데이터와 실시간 데이터를 효율적으로 혼합",
        ],
        learned: [
          "ISR을 활용한 정적 사이트와 동적 업데이트의 조화로운 설계",
          "Next.js의 App Router와 데이터 재검증 메커니즘 심화 학습",
        ],
      },
      {
        problem:
          "여러 프로젝트에서 중복되는 UI와 기능으로 인한 관리 및 유지보수 문제",
        solutions: [
          "pnpm + Turborepo를 활용하여 모노레포 형태로 프로젝트 재구성",
          "중복 코드를 제거하고 UI 컴포넌트의 의존성을 낮춤",
        ],
        learned: [
          "모노레포 환경에서의 효율적인 코드 관리 및 협업 방식",
          "UI 재사용성과 확장성을 고려한 컴포넌트 설계 원칙",
        ],
      },
    ],
    outcome: {
      achievements: [
        "React-Query와 ISR을 활용하여 초기 로딩 성능을 극대화한 기술 블로그 구축",
        "Notion API 기반 서버리스 데이터 관리 시스템 구현",
        "모노레포 도입으로 프로젝트 간 기능 공유 및 유지보수 효율성 향상",
        "빌드 속도 약 90% 단축(29분 → 2분)",
      ],
      improvements: [
        "빌드 시점 데이터를 prefetch하여 초기 로딩 성능 개선",
        "정적 데이터의 실시간 업데이트 문제를 해결하여 사용자 경험 향상",
        "중복 코드 제거를 통한 유지보수 및 확장성 개선",
      ],
    },
    github: "https://github.com/hansolbangul/notion-blog",
    demo: "https://blog.hansolbangul.com",
    thumbnail: "/videos/notion-blog-video.mp4",
    images: [
      "/images/notion-blog/notion-blog-1.png",
      "/images/notion-blog/notion-blog-2.png",
      "/images/notion-blog/notion-blog-3.png",
      "/images/notion-blog/notion-blog-4.png",
      "/images/notion-blog/notion-blog-5.png",
    ],
  },
  {
    id: 3,
    title: "메디큐브/포맨트 도산 스토어 장바구니 개발",
    description:
      "에이피알의 메디큐브/포맨트 도산 스토어에서 사용되는 장바구니 웹 애플리케이션 개발 프로젝트입니다. 서버리스 아키텍처로 설계된 웹 애플리케이션으로, QR코드 기반의 상품 리스트 제공, 다국어 지원, QR Scanner 기능을 통한 상품 확인 등 유저와 관리자를 위한 인터랙티브한 기능을 제공합니다.",
    period: "2024.08 - 2024.08",
    team: "에이피알",
    role: "서버리스 개발 및 프론트엔드 개발",
    techStack: {
      개발: [
        "React.js",
        "Amplify",
        "DynamoDB",
        "Styled-Components",
        "Framer-Motion",
        "qrcode",
        "i18n",
      ],
      테스트: [],
      개발도구: ["GitHub", "GitHub Actions"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "모바일 전용의 단일 웹 애플리케이션으로 개발, 앱과 유사한 라우팅 제공",
      "Framer-Motion을 활용한 라우트 전환 애니메이션으로 유연한 페이지 이동 경험 제공",
      "i18n을 통한 한국어, 영어, 중국어(간체, 번체), 일본어 등 다국어 서비스 지원",
      "QR코드 라이브러리를 활용하여 유저의 상품 리스트를 QR코드로 변환하여 제공",
      "관리자 페이지의 QR Scanner 기능을 통해 유저의 상품 리스트를 실시간으로 확인 가능",
      "서버리스 환경 구축을 위해 Amplify와 DynamoDB를 활용하여 간단한 상품 등록, 삭제, 조회 기능 개발",
    ],
    challenges: [
      {
        problem:
          "다국어 지원을 위해 다수의 언어에 대응하는 효율적인 번역 구조를 설계해야 했습니다.",
        solutions: [
          "i18n 라이브러리를 활용하여 다국어 번역 파일을 구조화",
          "동적 로딩 방식을 적용하여 초기 로딩 속도를 유지",
        ],
        learned: [
          "다국어 웹 애플리케이션의 효율적인 번역 파일 관리와 로딩 최적화 기술",
          "i18n의 lazy-loading 전략을 활용한 초기 로딩 속도 개선 방법",
        ],
      },
      {
        problem:
          "서버리스 환경에서 프론트엔드 단에서 상품 관리 기능을 구현해야 했습니다.",
        solutions: [
          "Amplify와 DynamoDB를 연동하여 서버리스 환경을 구축",
          "Amplify의 API Gateway를 활용해 CRUD 기능을 구현하여 상품의 등록, 삭제, 조회가 가능하도록 개발",
          "프론트엔드와 백엔드의 데이터 연동을 위해 Amplify의 DataStore 및 DynamoDB와의 통합을 시도",
        ],
        learned: [
          "서버리스 환경에서 Amplify와 DynamoDB를 활용한 CRUD 기능 개발 경험",
          "Amplify의 API Gateway 및 DataStore와의 통합 작업을 통한 서버리스 아키텍처 설계 능력 향상",
        ],
      },
      {
        problem:
          "유저가 QR코드를 통해 상품 정보를 직관적으로 확인하고, 관리자 페이지에서는 QR Scanner로 상품 리스트를 리딩해야 했습니다.",
        solutions: [
          "qrcode 라이브러리를 활용해 유저의 장바구니 데이터를 QR코드로 변환하여 시각적 제공",
          "관리자 페이지에 QR Scanner 기능을 구현하여 카메라로 QR코드를 인식하고 실시간으로 데이터를 불러올 수 있도록 개발",
          "qrcode와 QR Scanner 기능의 호환성을 보장하기 위해 표준화된 QR 데이터 포맷을 설계",
        ],
        learned: [
          "QR코드를 활용한 사용자 인터페이스 설계 및 Scanner 구현 경험",
          "관리자 페이지와 사용자 페이지 간 데이터 포맷 표준화 및 데이터 흐름 관리",
          "qrcode 라이브러리의 데이터 변환 및 실시간 QR코드 스캔 기능 구현 능력 향상",
        ],
      },
      {
        problem:
          "앱과 유사한 라우팅 경험을 제공하기 위해 모바일 웹에서도 자연스러운 페이지 전환을 구현해야 했습니다.",
        solutions: [
          "Framer-Motion을 활용하여 페이지 전환 애니메이션을 추가해 자연스러운 라우팅 경험 제공",
          "페이지 이동 시의 진입 및 이탈 효과를 커스터마이즈하여 직관적이고 매끄러운 사용자 경험을 보장",
        ],
        learned: [
          "Framer-Motion의 애니메이션 트랜지션 구현 경험",
          "모바일 웹에서 앱과 유사한 페이지 전환을 구현하는 기술과 사용자 경험 설계 능력 향상",
        ],
      },
    ],
    outcome: {
      achievements: [
        "QR코드 기반의 상품 관리 기능을 통해 유저와 관리자 간의 정보 교환 효율성 향상",
        "서버리스 아키텍처를 활용하여 프론트엔드 단의 CRUD 기능 개발 및 데이터 연동",
        "Amplify와 DynamoDB를 통한 서버리스 애플리케이션 배포 경험",
        "모바일 전용의 자연스러운 라우팅 경험을 위해 Framer-Motion을 활용한 앱과 유사한 페이지 전환 구현",
        "다국어 지원을 위한 i18n의 도입과 번역 파일의 효율적인 관리 경험",
      ],
      improvements: [
        "서버리스 환경에서 프론트엔드 단 CRUD 기능 개발 역량 향상",
        "qrcode 라이브러리와 QR Scanner를 활용한 데이터 가시화 및 관리자 기능 개선",
        "모바일 웹에서 사용자 경험을 향상시키기 위해 라우트 전환 애니메이션 최적화",
      ],
    },
    demo: "https://main.d2lkvlz3wv98bl.amplifyapp.com/",
    thumbnail: "/videos/cart-medicube-video.mp4",
    images: [
      "/images/cart-medicube/cart-medicube-1.png",
      "/images/cart-medicube/cart-medicube-2.png",
      "/images/cart-medicube/cart-medicube-3.png",
      "/images/cart-medicube/cart-medicube-4.png",
      "/images/cart-medicube/cart-medicube-5.png",
      "/images/cart-medicube/cart-medicube-6.png",
      "/images/cart-medicube/cart-medicube-7.png",
    ],
  },
  {
    id: 4,
    title: "포토그레이 웹앱 개발",
    description:
      "Flutter와 Next.js 간의 통신 아키텍처를 설계하고, 앱과 웹 간의 데이터 연동을 통해 유저 경험을 극대화한 프로젝트입니다. 웹과 앱의 통합 환경에서 자동 로그인, 카카오 공유 기능, E2E 테스트 자동화 등 다양한 기능을 구현하며 서비스의 품질과 안정성을 높였습니다.",
    period: "2024.02 - 진행 중",
    team: "에이피알",
    role: "프론트엔드(next.js + flutter) 개발",
    techStack: {
      개발: [
        "Next.js",
        "TypeScript",
        "React-Query",
        "Flutter",
        "Zustand",
        "Styled-Components",
        "i18n",
        "React-Portal",
      ],
      테스트: ["Jest", "Cypress"],
      개발도구: ["GitHub", "GitHub Actions", "Jenkins"],
      모바일: ["Flutter"],
      모니터링: ["Sentry"],
    },
    features: [
      "웹과 앱 간의 통신을 위해 WebViewController.runJavaScript를 활용한 데이터 연동 구현",
      "SSR과 React-Query의 PreFetch를 통해 초기 로딩 시간을 단축하고 상태 관리 효율화",
      "NHN KCP 본인인증을 활용하여 휴대폰 인증을 통한 회원가입 기능 개발",
      "카카오, 애플 로그인 서비스 구현을 통해 간편 로그인 지원",
      "Compound, Function, Composition, Render 패턴을 활용한 재사용 가능한 컴포넌트 개발",
      "Promise Button, Portal, DateFormat 등의 유틸 개발 및 사내 라이브러리 배포를 통한 코드 스타일 통일화",
      "i18n을 통한 다국어 서비스 지원",
      "Jest와 Cypress를 활용한 유닛 테스트 및 E2E 테스트 자동화 구축",
      "Sentry를 활용한 서비스의 실시간 에러 모니터링 및 빠른 이슈 대응 체계 구축",
    ],
    challenges: [
      {
        problem:
          "웹과 앱 간의 데이터 통신이 필요한 상황에서 효과적인 데이터 교환 및 로그인 유지 방안을 마련해야 했습니다.",
        solutions: [
          "Flutter의 WebViewController.runJavaScript를 활용하여 앱과 웹 간의 통신 기능 구현",
          "웹의 Cookie에 로그인 정보를 저장하여 자동 로그인 기능 개발",
          "앱과 웹 간의 데이터 교환 포맷을 표준화하여 일관성 있는 데이터 전송 보장",
        ],
        learned: [
          "Flutter와 Next.js 간의 웹 통신 방식을 이해하고 WebViewController의 활용 방안을 학습",
          "자동 로그인 구현을 위해 Cookie와 세션 관리 방식에 대한 심층적인 이해",
          "WebView 기반 통신에서 발생하는 데이터 지연 및 비동기 처리 문제 해결 능력 향상",
        ],
      },
      {
        problem:
          "유저 경험을 개선하기 위해 느린 API 요청 대기 시간을 최소화해야 했습니다.",
        solutions: [
          "React-Query의 낙관적 업데이트(Optimistic Update) 기능을 활용하여 사용자 경험 개선",
          "API 요청이 완료되기 전에 프론트엔드 상태를 미리 업데이트하여 사용자에게 즉각적인 피드백 제공",
        ],
        learned: [
          "낙관적 업데이트를 통한 유저 경험 향상 기술 습득",
          "React-Query의 mutate 및 Query Client의 invalidateQueries 활용법에 대한 이해",
        ],
      },
      {
        problem:
          "서비스의 무결성을 보장하고, 새로운 기능 출시 후에도 안정성을 확보할 방법이 필요했습니다.",
        solutions: [
          "Jest를 사용하여 유닛 테스트를 도입하고 커버리지 90% 이상을 유지",
          "Cypress를 활용한 E2E 테스트 자동화로 유저 플로우의 무결성 보장",
          "알파 서비스 이후에는 TDD(Test-Driven Development) 기반으로 기능을 개발하여 안정성을 유지",
        ],
        learned: [
          "Jest와 Cypress를 활용한 유닛 테스트 및 E2E 테스트 자동화 경험",
          "테스트 주도 개발(TDD)의 실전 적용 및 유지보수 과정 학습",
          "테스트 커버리지 90% 이상을 유지하기 위한 테스트 코드 작성 능력 향상",
        ],
      },
      {
        problem:
          "서비스의 안정성을 보장하기 위해 예기치 않은 에러와 유저 불편 사항에 신속히 대응해야 했습니다.",
        solutions: [
          "Sentry를 도입하여 서비스의 런타임 에러를 실시간으로 모니터링",
          "로그 수집 및 이슈 리포팅 시스템을 통해 사용자 불편 사항을 빠르게 확인 및 대응",
        ],
        learned: [
          "Sentry를 활용한 실시간 에러 모니터링 및 대응 기술",
          "유저의 불편 사항을 사전에 감지하고 빠르게 해결하는 프로세스 학습",
        ],
      },
      {
        problem:
          "재사용 가능한 컴포넌트를 구현하여 코드의 중복을 줄이고 생산성을 높여야 했습니다.",
        solutions: [
          "Compound, Function, Composition, Render 패턴을 적용하여 유연한 컴포넌트 설계",
          "Promise Button, Portal, React-Query 유틸을 개발하여 코드 중복 제거 및 생산성 향상",
        ],
        learned: [
          "재사용 가능한 컴포넌트 설계 및 개발 패턴(Compound, Function, Composition, Render) 이해",
          "컴포넌트의 재사용성을 높이기 위한 코드 분리 및 모듈화의 필요성을 인식",
        ],
      },
    ],
    outcome: {
      achievements: [
        "웹과 앱 간의 통신을 통해 자동 로그인, 데이터 연동 및 사용자 경험 개선",
        "E2E 테스트 자동화 구축 및 테스트 커버리지 90% 이상 유지",
        "서비스의 안정성을 위해 Sentry를 통한 실시간 모니터링 및 이슈 대응 체계 구축",
        "서드파티 로그인 기능(카카오, 애플 로그인) 및 본인인증(NHN KCP) 기능 개발",
        "재사용 가능한 컴포넌트 패턴 설계 및 사내 라이브러리 배포로 생산성 향상",
        "GitHub Actions + Jenkins를 활용한 CI/CD 파이프라인 구축 및 자동화",
      ],
      improvements: [
        "웹과 앱 간의 통신 속도 개선을 통한 로그인 및 데이터 연동 속도 향상",
        "낙관적 업데이트를 활용하여 사용자 경험을 개선하고 로딩 시간을 단축",
        "코드 스타일 통일화를 통해 협업 효율성 및 코드 유지보수성을 향상",
        "재사용 가능한 컴포넌트 패턴의 이해 및 생산성 향상을 위한 개발 패턴 개선",
      ],
    },
    demo: "https://4cut-ranking.com/",
    thumbnail: "/videos/4cut-ranking-video.mp4",
    images: [
      "/images/4cut-ranking/4cut-ranking-1.jpeg",
      "/images/4cut-ranking/4cut-ranking-2.jpeg",
      "/images/4cut-ranking/4cut-ranking-3.jpeg",
      "/images/4cut-ranking/4cut-ranking-4.jpeg",
      "/images/4cut-ranking/4cut-ranking-5.jpeg",
      "/images/4cut-ranking/4cut-ranking-6.JPG",
    ],
  },
  {
    id: 5,
    title: "메디큐브 피부진단 서비스 웹 개발",
    description:
      "메디큐브의 피부진단 솔루션 웹 개발 프로젝트로, 유저의 얼굴을 촬영하여 피부 상태를 진단하고, 진단 결과를 대시보드로 시각화하는 서비스를 제공합니다. 기존의 Gatsby.js 프로젝트에서 코드 품질 개선과 사용자 경험 향상을 목표로 다양한 비동기 처리 및 최적화 작업을 수행했습니다.",
    period: "2024.04 - 2024.05",
    team: "에이피알",
    role: "프론트엔드 개발",
    techStack: {
      개발: [
        "Gatsby.js",
        "TypeScript",
        "Emotion",
        "React-Hook-Form",
        "Recharts",
      ],
      테스트: [],
      개발도구: ["GitHub", "GitHub Actions"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "유저의 얼굴을 촬영하기 위해 canvas를 활용한 카메라 스트림 생성 기능 개발",
      "타 팀의 피부진단 솔루션에 이미지를 전송하며 발생하는 딜레이를 비동기 처리로 개선",
      "OpenCV 모듈의 메모리 누수 문제를 해결하기 위해 싱글턴 패턴을 적용하여 성능 최적화",
      "피부 진단 결과를 대시보드 형태로 시각화하여 사용자의 이해도를 높임",
      "결과 정보를 Base64로 인코딩하여 URL 형태의 QR 코드로 제공",
    ],
    challenges: [
      {
        problem:
          "유저의 얼굴을 카메라로 촬영한 후 외부 피부진단 솔루션에 이미지를 전송할 때, 딜레이로 인한 사용자 경험 저하가 발생했습니다.",
        solutions: [
          "이미지 전송을 비동기 처리하여 유저가 다음 작업을 할 수 있도록 대기 시간을 제거",
          "카메라 캡처와 전송을 병렬로 수행하여 작업 흐름을 최적화",
        ],
        learned: [
          "비동기 처리 및 병렬 작업을 통해 사용자 경험을 개선하는 방법",
          "이미지 전송 지연을 최소화하고 사용자 작업 흐름을 유지하는 전략 학습",
        ],
      },
      {
        problem:
          "피부진단에 사용된 OpenCV 모듈의 메모리 누수로 인해 화면 버벅임과 성능 저하가 발생했습니다.",
        solutions: [
          "OpenCV 모듈의 메모리 누수를 추적하고 싱글턴 패턴을 적용하여 메모리 할당을 최소화",
          "컴포넌트 언마운트 시 불필요한 메모리를 해제하여 메모리 누수 방지",
        ],
        learned: [
          "OpenCV와 같은 외부 모듈의 메모리 관리 및 메모리 누수 문제 해결 능력 향상",
          "싱글턴 패턴을 통해 전역적으로 재사용 가능한 객체를 관리하는 기술 습득",
        ],
      },
      {
        problem:
          "피부 진단 결과를 직관적으로 보여줄 대시보드를 개발해야 했으며, 데이터의 시각화가 요구되었습니다.",
        solutions: [
          "Recharts 라이브러리를 활용하여 피부 진단 결과를 시각화한 대시보드를 개발",
          "피부 상태의 변화를 쉽게 인지할 수 있도록 차트의 애니메이션 효과를 추가",
        ],
        learned: [
          "Recharts를 활용하여 대시보드와 같은 시각화 컴포넌트를 개발하는 방법",
          "데이터 시각화와 사용자 경험을 고려한 차트 디자인 및 레이아웃 설계",
        ],
      },
      {
        problem:
          "피부 진단 결과를 QR 코드로 제공해야 했으며, URL에 진단 정보를 포함해야 했습니다.",
        solutions: [
          "Base64로 인코딩된 피부 진단 데이터를 URL로 변환하고 qrcode 라이브러리를 통해 QR 코드 생성",
          "유저가 결과 페이지에 접근할 수 있도록 공유 가능한 URL 형태로 QR 코드를 제공",
        ],
        learned: [
          "Base64 인코딩 및 URL을 활용한 데이터 공유 방식을 학습",
          "qrcode 라이브러리를 활용한 QR 코드 생성 및 사용자 공유 기능 구현 능력 향상",
        ],
      },
    ],
    outcome: {
      achievements: [
        "Gatsby.js 기반의 피부 진단 서비스 기능 개선 및 신규 기능 추가",
        "메모리 누수 문제 해결 및 성능 최적화로 사용자 경험 개선",
        "Recharts를 활용한 피부 진단 결과 대시보드 개발",
        "Base64 인코딩 및 QR 코드 생성으로 피부 진단 결과를 URL로 공유하는 기능 구현",
      ],
      improvements: [
        "타팀의 솔루션과 연동하여 비동기 데이터 전송의 효율성을 높임",
        "Gatsby.js와 OpenCV의 메모리 관리 방식을 학습하고 메모리 최적화를 수행",
        "코드 품질 개선을 통해 사용자 경험을 향상하고 성능을 최적화",
      ],
    },
  },
  {
    id: 6,
    title: "포토그레이 어드민 페이지",
    description:
      "포토그레이의 관리자용 웹 애플리케이션으로, 비즈니스 데이터를 한눈에 볼 수 있는 시각적 대시보드를 개발했습니다. 데이터 핸들링, 비즈니스 로직과 뷰 로직의 분리, Sentry를 통한 에러 모니터링 및 React-Query V5로의 마이그레이션을 통해 사용자 경험과 서비스 안정성을 크게 향상시켰습니다.",
    period: "2023.07 - 진행 중",
    team: "에이피알",
    role: "프론트엔드 개발",
    techStack: {
      개발: [
        "React.js",
        "TypeScript",
        "React-Query",
        "Zustand",
        "Styled-Components",
        "Chart.js",
        "React-Portal",
        "React-Modal",
      ],
      테스트: ["Jest", "MSW"],
      개발도구: ["GitHub", "GitHub Actions", "Jenkins"],
      모바일: [],
      모니터링: ["Sentry"],
    },
    features: [
      "비즈니스 데이터를 시각화하는 대시보드 개발 (촬영 지표, 다운로드 수, 체류 시간 등)",
      "React-Query V5로 마이그레이션하여 Suspense를 활용한 사용자 경험 개선",
      "비즈니스 로직과 뷰 로직을 분리하여 중복 코드를 제거하고 유지보수성을 향상",
      "Custom Portal을 활용하여 불필요한 모달 렌더링을 최소화",
      "MSW(Mock Service Worker) 세팅을 통해 프론트엔드 개발 병목현상을 줄이고 API 테스트 코드 작성",
      "MSW를 활용한 API 목킹으로 백엔드와의 동기화를 해소하며 개발 생산성 향상",
      "Jest로 비즈니스 로직 테스트를 분리하며 테스트 커버리지를 90%로 향상",
      "Sentry를 활용하여 실시간 에러 모니터링 및 서비스 안정성 확보",
    ],
    challenges: [
      {
        problem:
          "서비스 내에서 비즈니스 로직과 뷰 로직이 같은 파일에 혼재되어 코드의 유지보수와 가독성이 떨어졌습니다.",
        solutions: [
          "비즈니스 로직과 뷰 로직을 분리하여 컨테이너/프레젠테이션 패턴을 적용",
          "Zustand를 활용하여 전역 상태를 관리하고 상태와 관련된 로직을 분리",
        ],
        learned: [
          "컨테이너/프레젠테이션 패턴을 통해 코드의 가독성과 유지보수성을 높이는 방법 학습",
          "비즈니스 로직과 뷰 로직의 분리를 통해 코드의 모듈화 및 재사용성 향상",
        ],
      },
      {
        problem:
          "React-Query V4에서 V5로 마이그레이션을 진행하면서 Suspense를 적용해야 했습니다.",
        solutions: [
          "React-Query V5의 Suspense 옵션을 활성화하여 더 나은 사용자 경험 제공",
          "로딩 상태와 에러 처리를 일관되게 구현하여 개발의 일관성 유지",
        ],
        learned: [
          "React-Query V5의 Suspense 사용법과 비동기 상태 관리 최적화 전략 학습",
          "Suspense를 활용하여 로딩, 에러, 성공 상태의 UX를 개선하는 방법을 이해",
        ],
      },
      {
        problem:
          "백엔드 API가 미완성 상태로 프론트엔드 개발이 지연되는 병목 현상이 발생했습니다.",
        solutions: [
          "MSW(Mock Service Worker)를 사용하여 목업 데이터로 프론트엔드 개발을 진행",
          "프론트엔드와 백엔드의 개발을 병렬로 수행할 수 있도록 API 목킹 시스템을 구축",
        ],
        learned: [
          "MSW를 사용하여 API 목킹 및 프론트엔드 개발 생산성 향상 방법 습득",
          "프론트엔드와 백엔드의 개발 병목을 해소하고 개발 일정을 단축하는 방법을 이해",
        ],
      },
      {
        problem:
          "기존의 React-Modal을 무분별하게 사용하면서 불필요한 랜더링과 메모리 사용량이 증가했습니다.",
        solutions: [
          "Custom Portal을 개발하여 불필요한 모달의 렌더링을 최소화",
          "모달의 렌더링 범위를 최적화하고 재사용 가능한 모달 컴포넌트를 설계",
        ],
        learned: [
          "React Portal과 Custom Portal을 통한 렌더링 최적화 방법 학습",
          "재사용 가능한 모달 컴포넌트 설계와 코드 중복 제거 방안 학습",
        ],
      },
      {
        problem:
          "서비스의 안정성을 보장하기 위해 사용자 에러에 신속히 대응할 수 있는 체계를 마련해야 했습니다.",
        solutions: [
          "Sentry를 도입하여 런타임 에러를 실시간으로 모니터링",
          "에러 발생 시 자동으로 이슈가 리포팅되도록 연동하여 빠른 대응 체계 구축",
        ],
        learned: [
          "Sentry를 활용한 에러 모니터링 및 자동 리포팅 시스템의 구현 방법 습득",
          "유저의 불편을 사전에 파악하고 빠르게 해결하는 전략을 학습",
        ],
      },
    ],
    outcome: {
      achievements: [
        "React-Query V5로의 마이그레이션 및 Suspense 도입으로 사용자 경험 개선",
        "비즈니스 로직과 뷰 로직 분리를 통해 코드의 가독성과 유지보수성을 향상",
        "대시보드에 촬영 지표, 다운로드 수, 체류 시간 등 비즈니스 인사이트를 시각화",
        "MSW를 통한 프론트엔드와 백엔드의 개발 병목 현상 해소 및 개발 생산성 향상",
        "Sentry를 활용한 실시간 에러 모니터링을 통해 서비스의 안정성 확보",
        "GitHub Actions + Jenkins를 활용한 CI/CD 파이프라인 구축 및 자동화",
      ],
      improvements: [
        "Suspense를 통해 초기 로딩과 사용자 경험을 개선하며 효율적인 렌더링 전략을 구현",
        "비즈니스 로직과 뷰 로직의 분리를 통해 코드의 유지보수성을 향상",
        "MSW로 백엔드와의 개발 병목을 해소하고 개발 일정을 단축",
        "Sentry로 유저 이슈에 대한 빠른 대응 체계를 구축",
      ],
    },
  },
  {
    id: 7,
    title: "피리부는 강아지 [피리마켓]",
    description:
      "Vue.js + jQuery 기반의 외주 레거시 프로젝트를 React로 마이그레이션하고 성능을 개선한 프로젝트입니다. TF팀의 프론트엔드 리드로서 레거시 코드 마이그레이션과 신규 기능 개발을 주도했습니다.",
    period: "2022.07 - 2023.06",
    team: "에임드",
    role: "프론트엔드 개발",
    techStack: {
      개발: [
        "React",
        "Vue.js",
        "jQuery",
        "Styled-Components",
        "React-Query",
        "Recoil",
      ],
      개발도구: ["GitHub Actions", "Jenkins"],
      테스트: [],
      모바일: [],
      모니터링: [],
    },
    features: [
      "Vue.js + jQuery 기반 레거시 코드를 React로 마이그레이션",
      "초기 로딩 시간을 6초에서 1.2초로 단축 (80% 개선)",
      "LightHouse 성능 점수를 36%에서 80%로 개선",
      "React-Query와 Recoil을 활용한 상태 관리 개선",
      "이미지 lazy loading과 번들 최적화를 통한 성능 개선",
      "KG 이니시스 PG 연동 및 결제 시스템 구현",
      "무한 스크롤 기능 구현 및 데이터 캐싱 최적화",
    ],
    challenges: [
      {
        problem: "레거시 코드의 복잡성과 성능 이슈",
        solutions: [
          "점진적 마이그레이션 전략을 수립하여 리스크 최소화",
          "React-Query를 도입하여 데이터 캐싱 및 상태 관리 개선",
          "코드 스플리팅과 이미지 최적화로 초기 로딩 성능 향상",
        ],
        learned: [
          "레거시 시스템 마이그레이션 전략 수립 경험",
          "성능 최적화 기법 및 모니터링 방법 습득",
          "대규모 코드베이스 리팩토링 경험",
        ],
      },
      {
        problem: "대량의 이미지와 상품 데이터로 인한 초기 로딩 지연",
        solutions: [
          "이미지 lazy loading과 webp 포맷 변환으로 이미지 로딩 최적화",
          "무한 스크롤 구현으로 초기 데이터 로드 최소화",
          "React.lazy와 Suspense를 활용한 컴포넌트 코드 스플리팅",
        ],
        learned: [
          "이미지 최적화 전략과 포맷 선택의 중요성",
          "효율적인 데이터 페이지네이션 구현 방법",
          "React의 지연 로딩 기능 활용 경험",
        ],
      },
    ],
    outcome: {
      achievements: [
        "웹 성능 지표 80% 이상 개선",
        "코드 재사용성 및 유지보수성 향상",
        "사용자 경험 개선으로 구매 전환율 증가",
      ],
      improvements: [
        "지속적인 성능 모니터링 체계 구축",
        "마이크로 프론트엔드 아키텍처 검토",
      ],
    },
    images: ["/images/pirimarket/pirimarket-1.png"],
  },
  {
    id: 8,
    title: "에임드 홈페이지 & 트라이베카 홈페이지",
    description:
      "에임드의 사내 홈페이지와 트라이베카 게임 홈페이지의 웹 퍼블리싱 프로젝트로, 초기 리소스 최적화 및 스크롤 애니메이션 구현을 통해 사용자 경험을 향상시켰습니다. 이미지 및 영상의 용량 다이어트와 IntersectionObserver를 활용한 애니메이션 구현으로 퍼포먼스를 개선했습니다.",
    period: "2023.01 - 2023.03",
    team: "에임드",
    role: "퍼블리셔",
    techStack: {
      개발: ["HTML", "CSS", "SCSS", "JavaScript", "IntersectionObserver"],
      테스트: [],
      개발도구: ["GitHub"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "에임드 사내 홈페이지와 트라이베카 게임 홈페이지의 웹 퍼블리싱 작업 수행",
      "초기 로딩 속도를 줄이기 위해 이미지 및 영상의 용량 다이어트 진행",
      "IntersectionObserver를 활용한 스크롤 애니메이션 구현으로 인터랙티브한 사용자 경험 제공",
      "다국어 지원(한국어, 영어) 기능을 추가하여 글로벌 사용자 접근성 향상",
      "정적 파일을 S3에 배포하여 빠르고 안정적인 콘텐츠 제공",
    ],
    challenges: [
      {
        problem: "초기 리소스 로드 시간이 느려 사용자 이탈률이 높아졌습니다.",
        solutions: [
          "이미지와 영상의 용량 다이어트를 진행하여 초기 리소스 로드 속도를 최적화",
          "필요한 시점에 리소스를 로드하기 위해 Lazy Loading 기술 적용",
        ],
        learned: [
          "이미지 및 영상 최적화를 통해 초기 로딩 속도를 개선하는 방법 학습",
          "Lazy Loading을 통한 불필요한 초기 리소스 로드 방지 전략 습득",
        ],
      },
      {
        problem:
          "스크롤 이벤트 기반의 인터랙티브한 애니메이션을 구현해야 했습니다.",
        solutions: [
          "IntersectionObserver API를 활용하여 스크롤에 따른 애니메이션을 구현",
          "스크롤 위치에 따라 애니메이션을 동적으로 적용하여 UX 향상",
        ],
        learned: [
          "IntersectionObserver를 활용한 스크롤 애니메이션 구현 방법 습득",
          "사용자 스크롤 위치에 따른 콘텐츠 노출 및 애니메이션 적용 전략 학습",
        ],
      },
      {
        problem:
          "다국어 지원을 통해 글로벌 사용자에게 다양한 언어로 웹사이트를 제공해야 했습니다.",
        solutions: [
          "HTML 및 CSS 구조에서 다국어 지원을 위해 언어 속성을 추가",
          "한국어와 영어 간의 전환을 가능하게 하는 언어 선택 UI를 구현",
        ],
        learned: [
          "다국어 웹사이트 개발을 위한 HTML 구조 설계 및 다국어 전환 UI 구현 능력 습득",
          "언어 전환 및 국제화(i18n) 개념 학습",
        ],
      },
    ],
    outcome: {
      achievements: [
        "에임드 홈페이지와 트라이베카 게임 홈페이지의 웹 퍼블리싱 작업 완료",
        "IntersectionObserver로 스크롤 애니메이션을 구현하여 사용자 경험 개선",
        "이미지 및 영상의 용량 다이어트를 통해 초기 로딩 속도를 단축",
        "다국어 지원(한국어, 영어) 기능 구현으로 글로벌 사용자 접근성 향상",
        "정적 파일을 S3에 배포하여 빠르고 안정적인 콘텐츠 제공",
      ],
      improvements: [
        "초기 리소스의 용량 최적화를 통해 초기 로딩 속도를 단축하고 사용자 경험 개선",
        "스크롤 애니메이션을 통해 인터랙티브한 사용자 경험 제공",
        "다국어 지원을 통해 글로벌 사용자 접근성을 향상",
      ],
    },
    demo: "https://aimed.xyz/",
    thumbnail: "/videos/aimed-video.mp4",
    images: [
      "/images/aimed/aimed-1.png",
      "/images/aimed/aimed-2.png",
      "/images/aimed/aimed-3.png",
      "/images/aimed/aimed-4.png",
      "/images/aimed/aimed-5.png",
      "/images/aimed/aimed-6.png",
      "/images/aimed/aimed-7.png",
      "/images/aimed/aimed-8.png",
      "/images/aimed/aimed-9.png",
      "/images/aimed/aimed-10.png",
      "/images/aimed/aimed-11.png",
    ],
  },
  {
    id: 9,
    title: "FarmOS",
    description:
      "스마트팜 농장 제어 웹 서비스로, 실시간 데이터 시각화 대시보드와 장비 제어 기능을 구현한 프로젝트입니다. MQTT 통신을 활용하여 농장의 장비와 실시간으로 소통하고, 데이터 조회 및 CSV 내보내기 기능을 통해 데이터 관리의 효율성을 향상시켰습니다.",
    period: "2021.08 - 2022.06",
    team: "지농",
    role: "풀스택 개발",
    techStack: {
      개발: ["Vue.js", "Vuex", "Node.js", "Express", "Chart.js"],
      테스트: [],
      개발도구: ["GitHub"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "스마트팜의 초단위 데이터를 시각화하는 대시보드 구현",
      "MQTT 브릿지 서버와의 통신을 통해 웹에서 농장 장비로 명령 전송 기능 개발",
      "일 단위 데이터 조회 기능 및 CSV 내보내기 기능 구현",
      "관리자용 파일 업로드 기능을 통한 게시판 기능 개발",
      "MQTT 통신의 실패 케이스를 정의하고 에러 핸들러 기능 구현",
      "데이터 플랫폼용 네이버 클라우드 서버 29대의 하드웨어 스펙 관리",
    ],
    challenges: [
      {
        problem:
          "초단위 데이터의 실시간 시각화 대시보드를 구현해야 했고, 대량의 데이터를 렌더링하는 동안 성능 저하가 발생했습니다.",
        solutions: [
          "Chart.js 라이브러리를 활용하여 실시간 데이터 스트림을 시각화",
          "데이터를 델타 방식으로 렌더링하여 불필요한 전체 렌더링을 방지",
          "초 단위 데이터를 배치로 처리하여 렌더링 성능 최적화",
        ],
        learned: [
          "실시간 데이터 시각화 및 대용량 데이터의 효율적인 렌더링 기법 학습",
          "Chart.js를 활용한 시각적 데이터 대시보드 구축 능력 향상",
        ],
      },
      {
        problem:
          "농장 장비와의 실시간 통신을 위해 MQTT 프로토콜을 활용해야 했고, 장비 명령 전송 중 실패 케이스에 대한 대응 로직이 필요했습니다.",
        solutions: [
          "MQTT 브릿지 서버와의 통신을 구현하여 장비 제어 기능 개발",
          "MQTT 통신 실패 케이스를 정의하고 재시도 및 에러 핸들러 로직 구현",
        ],
        learned: [
          "MQTT 프로토콜을 활용한 실시간 장비 제어 및 재시도 메커니즘 학습",
          "에러 핸들링 전략과 재시도 로직 구현을 통해 신뢰성 있는 통신 시스템 구축",
        ],
      },
      {
        problem:
          "스마트팜의 일 단위 데이터를 효율적으로 관리하고 CSV 파일로 내보내는 기능이 필요했습니다.",
        solutions: [
          "일 단위 데이터 조회 기능을 추가하여 CSV로 내보내는 기능 구현",
          "파일 내보내기 기능을 구현하여 사용자가 데이터를 저장하고 분석할 수 있도록 지원",
        ],
        learned: [
          "CSV 데이터 내보내기 및 사용자 데이터 다운로드 기능 구현 경험",
          "프론트엔드와 백엔드 간의 데이터 포맷과 내보내기 기능 설계 능력 향상",
        ],
      },
      {
        problem:
          "관리자용 파일 업로드 기능을 추가해야 했고, 이를 통해 게시판의 관리 기능을 제공해야 했습니다.",
        solutions: [
          "관리자가 파일을 업로드할 수 있는 UI와 기능을 개발",
          "파일 업로드 및 게시판 기능을 통해 관리자와 사용자가 소통할 수 있는 인터페이스 제공",
        ],
        learned: [
          "파일 업로드와 관련된 입력 검증 및 업로드 상태 관리 기법 학습",
          "게시판 기능 개발과 관련된 CRUD 구현 및 관리자 인터페이스 설계 학습",
        ],
      },
      {
        problem:
          "스마트팜의 네이버 클라우드 서버 29대의 하드웨어 스펙을 효율적으로 관리해야 했습니다.",
        solutions: [
          "클라우드 서버 하드웨어 스펙 정보를 정리하고 관리할 수 있는 UI 및 기능 구현",
          "서버별 상태를 시각적으로 보여주는 인터페이스 설계 및 구현",
        ],
        learned: [
          "클라우드 서버의 하드웨어 스펙 관리 및 데이터 시각화를 통한 정보 관리 능력 향상",
          "서버 정보의 효율적인 관리와 사용자 인터페이스(UI) 설계 기술 습득",
        ],
      },
    ],
    outcome: {
      achievements: [
        "스마트팜의 초단위 데이터를 시각화하는 대시보드 개발",
        "MQTT 브릿지 서버와의 통신을 통해 장비 제어 및 명령 전송 기능 구현",
        "MQTT 통신 실패 케이스에 대한 에러 핸들러 구현으로 통신 신뢰성 향상",
        "일 단위 조회 데이터를 CSV 파일로 내보내는 기능 개발로 데이터 관리 편의성 향상",
        "파일 업로드 및 게시판 기능을 통해 관리자와 사용자 간의 소통 인터페이스 구현",
        "네이버 클라우드 서버 29대의 하드웨어 스펙 정보를 관리하는 시스템 구축",
      ],
      improvements: [
        "Chart.js를 활용한 실시간 데이터 대시보드 구현으로 실시간 데이터 모니터링 성능 향상",
        "MQTT 통신 재시도 및 에러 핸들러로 안정적인 장비 제어 기능 구현",
        "CSV 내보내기 기능으로 데이터를 분석하고 관리할 수 있는 편의성 향상",
        "관리자용 파일 업로드 기능 및 게시판 기능으로 관리자와 사용자 간의 소통 개선",
        "클라우드 서버의 하드웨어 스펙 관리를 통해 하드웨어 리소스에 대한 명확한 가시성 확보",
      ],
    },
  },
  {
    id: 10,
    title: "FarmOS 홈페이지",
    description:
      "FarmOS 사업본부의 공식 홈페이지로, 사용자와 관리자를 위한 인터페이스를 제공하는 반응형 웹 애플리케이션입니다. 파일 업로드를 통한 게시판 기능과 관리자에게 메일을 전송하는 기능을 구현하여 관리 효율성을 향상시켰습니다.",
    period: "2022.01 - 2022.02",
    team: "지농",
    role: "풀스택 개발자",
    techStack: {
      개발: ["React", "Recoil", "Node.js", "Express", "nodemailer"],
      테스트: [],
      개발도구: ["GitLab"],
      모바일: [],
      모니터링: [],
    },
    features: [
      "FarmOS 사업본부의 공식 웹사이트로 웹/모바일 대응 반응형 웹 개발",
      "nodemailer를 활용한 관리자에게 메일 전송 기능 구현",
      "파일 업로드 기능을 통한 관리자용 게시판 기능 구현",
      "Node.js와 Express를 사용하여 백엔드 API 개발 및 서버 통신 구현",
    ],
    challenges: [
      {
        problem:
          "웹과 모바일을 모두 지원하는 반응형 웹사이트를 개발해야 했습니다.",
        solutions: [
          "CSS 미디어 쿼리를 활용하여 다양한 디바이스 해상도에 대응",
          "동적 레이아웃 및 UI/UX를 적용하여 사용자 경험 향상",
        ],
        learned: [
          "반응형 웹 개발 및 다양한 해상도에 대응하는 레이아웃 설계 기법 학습",
          "모바일 퍼스트 개발 전략을 적용하여 사용자 접근성 향상",
        ],
      },
      {
        problem:
          "관리자가 메일을 즉시 수신할 수 있는 안정적인 메일 전송 기능이 필요했습니다.",
        solutions: [
          "nodemailer 라이브러리를 활용하여 SMTP 서버를 통해 관리자 메일 전송 기능 구현",
          "메일 전송 실패 시 재시도 로직을 추가하여 신뢰성 향상",
        ],
        learned: [
          "nodemailer와 SMTP 서버를 통한 메일 전송 프로세스 학습",
          "메일 전송 실패 대응 로직과 에러 핸들링 방법 학습",
        ],
      },
      {
        problem:
          "관리자용 파일 업로드 기능을 추가해야 했고, 이를 통해 게시판의 관리 기능을 제공해야 했습니다.",
        solutions: [
          "파일 업로드 및 CRUD 기능이 포함된 게시판 개발",
          "Recoil을 사용하여 게시판 상태를 관리하고 사용자 인터페이스를 동적 변경",
        ],
        learned: [
          "파일 업로드 및 CRUD 기능 개발을 통한 게시판 기능 구현 능력 향상",
          "Recoil로 전역 상태를 관리하는 방법과 상태 동기화 기술 습득",
        ],
      },
    ],
    outcome: {
      achievements: [
        "웹/모바일을 모두 지원하는 반응형 FarmOS 공식 웹사이트 개발",
        "nodemailer를 활용한 관리자 메일 전송 기능 구현으로 빠른 커뮤니케이션 환경 조성",
        "파일 업로드 및 게시판 기능 개발로 관리자의 작업 효율성 향상",
        "Node.js 및 Express로 백엔드 서버 및 API 통신 로직 구현",
      ],
      improvements: [
        "반응형 웹사이트 개발로 다양한 디바이스에 대응하는 유연한 레이아웃 구현",
        "SMTP 서버 기반의 메일 전송 시스템으로 관리자와의 커뮤니케이션 효율성 향상",
        "파일 업로드 및 게시판 기능을 통해 관리자와 사용자의 소통 채널을 확립",
      ],
    },
    demo: "https://farmos.co.kr/",
    thumbnail: "/videos/farmos-video.mp4",
    images: [
      "/images/farmos/farmos-1.png",
      "/images/farmos/farmos-2.png",
      "/images/farmos/farmos-3.png",
      "/images/farmos/farmos-4.png",
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
