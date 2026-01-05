# ADEV Portfolio

A minimalist, beige-themed portfolio website featuring 3D interactive elements, motion graphics, and smooth parallax scrolling.

## Features

- **3D Interactive Elements**: Floating sphere with distortion effects using Three.js
- **Motion Graphics**: Smooth animations with Framer Motion
- **Split Text Animation**: Character-by-character text reveals
- **Parallax Scrolling**: Smooth scroll effects in the Services section
- **Testimonials Carousel**: Auto-rotating testimonials with fade transitions
- **Grain Texture Overlay**: Canvas-based noise effect in the Contact section
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Three.js** with @react-three/fiber for 3D graphics
- **@react-three/drei** for 3D utilities

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   └── HeroScene.tsx      # 3D floating sphere
│   ├── reusable/
│   │   ├── SplitText.tsx      # Animated text component
│   │   └── Noise.tsx          # Canvas grain texture
│   └── sections/
│       ├── Hero.tsx           # Hero section with 3D scene
│       ├── Services.tsx       # Services with parallax
│       ├── CaseStudies.tsx    # Project showcase
│       ├── Testimonials.tsx   # Rotating testimonials
│       └── Contact.tsx        # Contact with grain overlay
├── App.tsx
└── main.tsx
```

## Design System

- **Colors**: Warm Beige (#F2F8F3), Soft Black (#2C2C2C), Muted Olive (#9CA3AF)
- **Typography**: Inter (body), Playfair Display (headings)
- **Animations**: Smooth easing with staggered reveals
- **Layout**: Clean, minimal with generous whitespace

## Development Server

The project is currently running at: http://localhost:5173/

## Notes

- Uses React 18 with @react-three/drei v9.x.x for compatibility
- Optimized for performance with minimal 3D assets
- Canvas-based grain texture for better performance than CSS filters