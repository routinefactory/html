# Search Advisor (서치어드바이저)

네이버 서치어드바이저 데이터 분석 및 시각화 패널

## 개요

Search Advisor는 네이버 서치어드바이저의 데이터를 직관적으로 분석하고 시각화하는 React 기반의 웹 애플리케이션입니다. 북마클릿 형태로 실행되며, 실시간 모드와 스냅샷 모드를 모두 지원합니다.

## 주요 기능

- **전체 사이트 개요**: 등록된 모든 사이트의 요약 통계
- **일별 추세 분석**: 클릭, 노출, CTR 추세 차트
- **URL 분석**: 페이지별 성과 분석
- **검색어 분석**: 키워드별 성과 분석
- **크롤링 상태**: 크롤링 및 인덱싱 상태 모니터링
- **백링크 분석**: 외부 링크 현황
- **SEO 진단**: 사이트 건강 점수 및 이슈 분석

## 실행 모드

### 1. 실시간 모드 (Live Mode)
- `searchadvisor.naver.com`에서 실행
- 네이버 API를 통한 실시간 데이터 조회
- 데이터 새로고침 지원

### 2. 스냅샷 모드 (Snapshot Mode)
- 내보낸 HTML 파일에서 실행
- 저장된 데이터를 기반으로 분석
- 오프라인에서도 확인 가능

## 설치 및 실행

### 개발 환경

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 북마클릿 빌드
npm run build:bookmarklet
```

### 프로젝트 구조

```
search-advisor/
├── src/
│   ├── types/           # TypeScript 타입 정의
│   │   └── index.ts     # 모든 타입 정의
│   ├── utils/           # 유틸리티 함수
│   │   ├── format.ts    # 포맷팅 함수
│   │   ├── helpers.ts   # 헬퍼 함수
│   │   ├── dom.ts       # DOM 조작 및 스타일
│   │   └── index.ts     # 유틸리티 통합 export
│   ├── api/             # API 및 데이터 레이어
│   │   ├── cache.ts     # 메모리 캐시 관리
│   │   ├── queue.ts     # 요청 큐 및 동시성 제어
│   │   ├── client.ts    # API 클라이언트
│   │   ├── mock.ts      # 목 데이터 생성기
│   │   └── index.ts     # API 통합 export
│   ├── hooks/           # React 커스텀 훅
│   │   ├── useAppContext.ts    # 전역 상태 관리
│   │   ├── useDataFetching.ts  # 데이터 조회 훅
│   │   ├── usePanel.ts         # UI 상태 훅
│   │   └── index.ts     # 훅 통합 export
│   ├── components/      # React 컴포넌트
│   │   ├── common/      # 공통 컴포넌트
│   │   ├── charts/      # 차트 컴포넌트
│   │   ├── panels/      # 패널 컴포넌트
│   │   └── index.ts     # 컴포넌트 통합 export
│   ├── App.tsx          # 메인 앱 컴포넌트
│   └── index.ts         # 진입점
├── scripts/             # 빌드 스크립트
│   └── build-bookmarklet.js
├── public/              # 정적 파일
├── dist/                # 빌드 결과물
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 기술 스택

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Shadow DOM + CSS-in-JS
- **State Management**: React Context + Custom Hooks

## 모듈 설명

### Types (`src/types/`)
모든 타입 정의를 중앙 집중화하여 타입 안전성 확보

### Utils (`src/utils/`)
- `format.ts`: 숫자, 날짜, URL 포맷팅
- `helpers.ts`: 디바운스, 스로틀, 깊은 복사 등
- `dom.ts`: Shadow DOM 생성, 스타일 주입

### API (`src/api/`)
- `cache.ts`: TTL 기반 메모리 캐시
- `queue.ts`: 동시성 제어, 재시도 로직
- `client.ts`: 네이버 API 래핑
- `mock.ts`: 개발용 목 데이터

### Hooks (`src/hooks/`)
- `useAppContext`: 전역 상태 관리 (Context + Reducer)
- `useDataFetching`: 각종 데이터 조회 훅
- `usePanel`: UI 상태 (검색, 정렬, 페이지네이션)

### Components (`src/components/`)
- `common/`: 버튼, 카드, 테이블 등 재사용 컴포넌트
- `charts/`: 스파크라인, 바차트, 라인차트, 파이차트
- `panels/`: 각 탭별 패널 컴포넌트

## 라이선스

MIT
