시스템 에어컨 · 인테리어 전문 회사 홈페이지 (Next.js 16, App Router).
PRD 원본은 [PRD-홈페이지.md](./PRD-홈페이지.md) 참고.

## 시작하기

```bash
npm install
npm run dev
```

<http://localhost:3000> 에서 확인합니다.

## 실제 오픈 전 필수 작업

### 1. 회사 정보 채우기

[src/config/site.ts](./src/config/site.ts) 한 파일에 회사명, 전화번호, 이메일, 사업자정보,
시공지역, 카카오채널 URL 등이 모여 있습니다. 이 파일의 값만 실제 정보로 바꾸면
헤더/푸터/홈/about/contact 등 전체 페이지에 반영됩니다.

[src/data/about.ts](./src/data/about.ts) (연혁, 보유 면허), [src/data/home.ts](./src/data/home.ts)
(강점, 후기, 취급 브랜드)도 실제 내용으로 교체하세요.

### 2. 이메일 발송 설정 (견적 문의 폼)

견적 문의는 [Resend](https://resend.com)로 발송됩니다. 프로젝트 루트에 `.env.local`을
만들고 아래 값을 설정하세요.

```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=admin@yourcompany.com   # 문의를 받을 이메일 (미설정 시 site.ts의 email 사용)
CONTACT_FROM_EMAIL=noreply@yourdomain.com  # Resend에 인증된 발신 도메인 (미설정 시 onboarding@resend.dev)
```

`RESEND_API_KEY`가 없으면 발송은 실패하지만, 문의 내용은 서버 콘솔에 로그로 남고
사용자에게는 전화번호 안내 메시지가 표시되어 문의 자체가 유실되지는 않습니다.

### 3. 시공 사례 추가하기

[content/portfolio/](./content/portfolio/) 폴더에 `.mdx` 파일 하나를 추가하면 자동으로
`/portfolio` 목록과 `/portfolio/[slug]` 상세 페이지에 반영됩니다. 코드 수정이 필요 없습니다.

```yaml
---
title: "강남구 30평 아파트 시스템에어컨 4대 설치"
slug: "gangnam-apt-aircon-2026-01"   # URL: /portfolio/gangnam-apt-aircon-2026-01
category: "aircon"                   # aircon | interior | both
location: "서울 강남구"
spaceType: "아파트 30평"
duration: "2일"
date: "2026-01-15"
thumbnail: "/images/portfolio/gangnam-apt/01.jpg"
images:
  - "/images/portfolio/gangnam-apt/01.jpg"
  - "/images/portfolio/gangnam-apt/02.jpg"
featured: true                       # 홈/서비스 페이지에 노출할지 여부
---

시공 설명을 마크다운으로 자유롭게 작성합니다.

## 시공 포인트
- 포인트 1
- 포인트 2
```

사진은 `public/images/portfolio/` 아래 폴더를 만들어 넣고, frontmatter의 `thumbnail`/`images`
경로와 맞추면 됩니다. (현재는 사진이 없어 자리표시 이미지가 대신 표시됩니다.)

### 4. SEO 마무리

- `src/config/site.ts`의 `domain`을 실제 도메인으로 변경
- `verification.google` / `verification.naver`에 구글 서치콘솔·네이버 서치어드바이저
  소유 확인 코드 입력
- `src/app/opengraph-image.tsx`는 텍스트 기반 기본 OG 이미지입니다. 실제 대표 시공
  사진이 준비되면 이미지 기반으로 교체하는 것을 권장합니다.

## 기술 스택

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React Hook Form + Zod ·
Resend · next-mdx-remote (시공 사례 MDX 렌더링)

## 배포

Vercel 배포 시 위 환경변수(`RESEND_API_KEY` 등)를 프로젝트 설정에 동일하게 등록하세요.
