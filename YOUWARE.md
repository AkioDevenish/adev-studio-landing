# YOUWARE.md

## Project Overview

A minimalist, beige-themed landing page for a design studio, featuring 3D interactive elements, motion graphics, and smooth parallax scrolling.

## Project Overview

**Theme**: Warm Beige (#F2F0E9), Soft Black (#2C2C2C), Muted Olive (#A6A296).
**Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Three.js (@react-three/fiber).
**Key Features**:
- **Typography**: Animated split text (Framer Motion).
- **Services**: Parallax scrolling effect (Framer Motion).
- **Testimonials**: Fading carousel.
- **Contact**: Grain texture overlay (Canvas).

## Architecture

### Components
- src/components/3d/HeroScene.tsx : The 3D R3F scene containing the floating sphere.
- src/components/sections/ : Contains individual page sections (Hero, Services, CaseStudies, Testimonials, Contact).
- src/components/reusable/ : External UI components (Noise, SplitText).

### Styling
- **Global CSS**: Used for layout, spacing, and typography.
- **Colors**: Defined in tailwind.config.js ( background , foreground , accent , surface ).
- **Fonts**: Inter (sans) and Playfair Display (Display).

## Development

### Commands
- npm run dev : Start development server.
- npm run build : Build for production.
- npm run preview : Preview production build.

### Dependencies
- framer-motion : For general animations and parallax.
- @react-three/fiber & @react-three/drei : For 3D elements.
- lucide-react : Icons.

## Notes

### Notes
- The SplitText component uses framer-motion for character splitting animations.
- The Noise component uses a Canvas-based approach for performance.
- 3D elements are optimized with MeshDistortMaterial for visual impact without heavy assets.
- **Critical Dependency Versions**: This project uses React 18. Ensure @react-three/drei is v9.x.x and @react-three/fiber is v8.x.x. Do not upgrade to R3F v9/drei v10 unless upgrading React to v19.