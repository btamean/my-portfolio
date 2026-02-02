# 웹 개발자 포트폴리오

Next.js 14, TypeScript, Tailwind CSS로 제작된 모던 포트폴리오 웹사이트입니다.

## 🚀 기술 스택

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Font:** Google Fonts (Inter, JetBrains Mono)

## 📦 설치 및 실행

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 🎨 커스터마이징 가이드

### 1. 개인 정보 수정

**`app/layout.tsx`** - 메타데이터 수정
```typescript
export const metadata: Metadata = {
  title: "Your Name - Web Developer Portfolio",
  description: "Your description here",
  // ...
};
```

**`components/Navigation.tsx`** - 로고/이름 변경
```typescript
<a href="#home" className="text-2xl font-bold gradient-text">
  &lt;YourName /&gt;
</a>
```

### 2. 색상 테마 변경

**`app/globals.css`**에서 CSS 변수 수정:

```css
:root {
  --primary: 255 20 147;      /* 핑크 */
  --secondary: 0 255 255;     /* 시안 */
  --accent: 138 43 226;       /* 보라 */
}
```

원하는 RGB 값으로 변경하여 전체 테마를 커스터마이징할 수 있습니다.

### 3. 섹션 내용 수정

각 섹션은 `components/` 폴더의 개별 파일로 분리되어 있습니다:

- **Hero.tsx** - 메인 인트로
- **About.tsx** - 자기소개
- **Skills.tsx** - 기술 스택
- **Projects.tsx** - 프로젝트 쇼케이스
- **Contact.tsx** - 연락처

### 4. 프로젝트 추가/수정

**`components/Projects.tsx`**의 `projects` 배열 수정:

```typescript
const projects = [
  {
    title: "프로젝트 이름",
    description: "프로젝트 설명",
    tags: ["React", "Next.js"],
    image: "🚀",  // 이모지 또는 이미지 URL
    link: "https://your-project.com",
    github: "https://github.com/username/repo",
  },
  // 더 추가...
];
```

### 5. 기술 스택 수정

**`components/Skills.tsx`**의 `skillCategories` 배열 수정:

```typescript
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      // 더 추가...
    ],
  },
];
```

## 🌐 배포

### Vercel (추천)

1. [Vercel](https://vercel.com)에 GitHub 저장소 연결
2. 자동 배포 설정
3. 완료!

### 기타 플랫폼

- Netlify
- AWS Amplify
- GitHub Pages (정적 빌드)

## 📝 디렉토리 구조

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 💡 추가 기능 제안

- [ ] 다크/라이트 모드 토글
- [ ] 블로그 섹션 추가
- [ ] 이력서 다운로드 기능
- [ ] 다국어 지원 (i18n)
- [ ] Google Analytics 연동
- [ ] 실제 백엔드와 연동된 컨택트 폼

## 📄 라이선스

MIT License - 자유롭게 사용하세요!

## 🤝 기여

개선 사항이나 버그를 발견하시면 이슈를 열어주세요!
