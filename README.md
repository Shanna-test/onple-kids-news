# 어린이 뉴스 📰

초등학교 3-4학년을 위한 쉽고 재미있는 뉴스 서비스입니다.

## 특징

- 📚 **쉬운 설명**: 초등학생도 이해하기 쉬운 말로 뉴스를 설명합니다
- 🎯 **주간 정리**: 매주 8개의 뉴스를 한 주차로 정리합니다
- ✨ **다양한 주제**: 사회, 과학, 문화, 교육, 동물, 환경 등 다양한 주제를 다룹니다
- 📱 **모바일 우선**: 모바일과 데스크톱 모두에서 편리하게 볼 수 있습니다

## 기술 스택

- [Astro](https://astro.build/) - 정적 사이트 생성 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크
- [Markdown](https://www.markdownguide.org/) - 콘텐츠 작성 형식

## 프로젝트 구조

```
kids-news/
├── content/              # 콘텐츠 파일들
│   ├── articles/        # 기사 Markdown 파일
│   └── notices/         # 공지사항 Markdown 파일
├── public/              # 정적 파일들
├── src/
│   ├── layouts/        # 레이아웃 컴포넌트
│   ├── pages/          # 페이지 라우트
│   └── utils/          # 유틸리티 함수
├── astro.config.mjs     # Astro 설정
├── tailwind.config.mjs # Tailwind 설정
└── package.json        # 프로젝트 의존성
```

## 콘텐츠 작성

### 기사 작성 (Articles)

`content/articles/` 폴더에 Markdown 파일을 생성하세요.

**Frontmatter 스키마:**
```yaml
---
title: "기사 제목"
slug: "고유한-slug"
date: "2025-12-08"
weekId: "2025-W50"
category: "사회"
excerpt: "기사 요약 (선택사항)"
image: "이미지 URL (선택사항)"
---
```

**카테고리 예시:**
- 사회
- 교육
- 과학
- 문화
- 동물
- 환경
- 생활

### 공지사항 작성 (Notices)

`content/notices/` 폴더에 Markdown 파일을 생성하세요.

**Frontmatter 스키마:**
```yaml
---
title: "공지사항 제목"
slug: "고유한-slug"
date: "2025-12-01"
---
```

## 로컬 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

개발 서버가 시작되면 브라우저에서 `http://localhost:4321`로 접속할 수 있습니다.

### 3. 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 4. 빌드 미리보기

빌드된 사이트를 미리보려면:

```bash
npm run preview
```

## 라우트 구조

- `/` - 메인 페이지 (랜딩)
- `/archive` - 주차 모음
- `/week/[weekId]` - 주간 기사 목록 (예: `/week/2025-W50`)
- `/article/[slug]` - 기사 상세 (예: `/article/2025-w50-01`)
- `/notice` - 공지사항 목록
- `/notice/[slug]` - 공지사항 상세 (예: `/notice/notice-01`)

## 배포

이 프로젝트는 정적 사이트이므로 다양한 플랫폼에 배포할 수 있습니다:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

배포 시 `npm run build` 명령으로 빌드한 후 `dist/` 폴더의 내용을 배포하면 됩니다.

## 라이선스

이 프로젝트는 자유롭게 사용할 수 있습니다.

## 문의

궁금한 점이 있으시면 이슈를 등록해주세요.

