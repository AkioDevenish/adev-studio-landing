# ADEV Studio Portfolio

## Project Overview

**Theme**: Warm Beige (#F2F0E9), Soft Black (#2C2C2C), Muted Olive (#A6A296).
**Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js (@react-three/fiber + @react-three/drei).

## Key Features
- **3D Hero Scene**: Genshin-inspired constellation background using React Three Fiber.
- **Typography**: Animated split text (Framer Motion), Inter + Playfair Display fonts via `next/font`.
- **Services**: Glassmorphism cards with tilt parallax and gradient orbs.
- **Blog**: MDX-powered blog with search, category filtering, and pagination.
- **Case Studies**: 3 detailed project pages (Met Office, Multi-Hazard EWS, Lumë Refillery).
- **AI Chatbot**: Embedded Gemini-powered assistant for visitor questions.
- **Contact**: Web3Forms integration + Cal.com scheduling embed.
- **SEO**: Dynamic OG images, sitemap, robots.txt, structured data, GA4.

## Architecture

### Pages
- `/` — Agency landing page (hero → services → work → testimonial → process → pricing → about → contact)
- `/portfolio` — Full portfolio with developer/data science tab switching
- `/blog` — Blog listing with search and category filters
- `/blog/[slug]` — Individual blog post (MDX rendered)
- `/case-study/*` — 3 case study pages

### Components
- `src/components/3d/HeroScene.tsx` — 3D R3F constellation scene
- `src/components/sections/` — Homepage sections
- `src/components/pages/` — Case study page components
- `src/components/blog/` — Blog listing client component
- `src/components/reusable/` — Shared UI (Noise, SplitText)
- `src/components/ChatBubble.tsx` — AI assistant widget
- `src/components/Header.tsx` — Global header + Cal.com initialization
- `src/components/Footer.tsx` — Global footer

### Styling
- **Colors**: Defined in `tailwind.config.js` (background, foreground, muted, surface)
- **Fonts**: Inter (sans) and Playfair Display (display) via `next/font/google`

## Development

### Commands
- `npm run dev` — Start development server (Turbopack)
- `npm run build` — Build for production
- `npm start` — Preview production build
- `npm run lint` — Run ESLint

### Environment Variables
- `GOOGLE_GENERATIVE_AI_API_KEY` — Gemini API key for the chatbot
- `NEXT_PUBLIC_WEB3FORMS_KEY` — Web3Forms access key for the contact form