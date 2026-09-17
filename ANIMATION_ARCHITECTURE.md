# Animation Architecture - Premium Cinematic AI Portfolio

## Design Philosophy
- **Intentional Motion**: Every animation serves a purpose — guiding attention, revealing content, providing feedback
- **Cinematic Quality**: Smooth, film-like transitions with proper easing (cubic-bezier(0.16, 1, 0.3, 1))
- **Performance First**: 60fps on mobile, GPU-accelerated transforms, reduced motion support
- **Scroll-Driven Narrative**: Content reveals as user scrolls, creating storytelling flow

---

## Core Animation Systems

### 1. Lenis Smooth Scrolling (Global)
- **Purpose**: Buttery smooth scroll foundation for all scroll-driven animations
- **Config**: lerp: 0.08, duration: 1.2, smoothWheel: true, touchMultiplier: 2
- **Integration**: ScrollTrigger/Observer for GSAP, Framer Motion `whileInView`

### 2. Scroll Progress Indicator
- **Location**: Fixed top bar (2px height)
- **Animation**: ScaleX 0→1 based on scroll progress
- **Color**: Cyan gradient (--color-cyan-400 to --color-violet-500)

### 3. Text Reveal System (Framer Motion)
- **Variants**: `fadeUp`, `fadeDown`, `slideLeft`, `slideRight`, `blurReveal`, `wordReveal`, `charReveal`
- **Stagger**: 0.04s per line/word/char
- **Trigger**: `whileInView` with `viewport={{ once: true, margin: "-100px" }}`

### 4. Magnetic Buttons (GSAP)
- **Effect**: Element follows cursor within radius, springs back on leave
- **Strength**: 0.3 (subtle, premium feel)
- **Apply to**: Primary CTAs, social links, card actions

### 5. Parallax System (GSAP ScrollTrigger)
- **Layers**: Background (0.3x), Midground (0.5x), Foreground (0.8x)
- **Hero Video**: Slow zoom (1.0→1.15) on scroll
- **Portrait**: Subtle Y-parallax (0.2x) in About section

### 6. Card Hover System (Framer Motion)
- **Elevation**: translateY(-8px) + scale(1.01) + shadow increase
- **Border Glow**: Cyan border fade-in
- **Content Reveal**: Hidden details slide up
- **Duration**: 0.3s ease-out

### 7. Section Transition Orchestration
- **Sequence**: Header → Content → Interactive Elements
- **Delay**: 0.1s between sections
- **Viewport Margin**: -150px (start earlier)

---

## Section-by-Section Animation Plan

### HERO (Cinematic Entry)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Video | Slow zoom 1.0→1.15 | Scroll (0-50vh) | Continuous |
| Status Pill | fadeUp + scale | Mount | 0.6s |
| Headline | wordReveal (stagger 0.04) | Mount | 1.0s |
| Subtitle | blurReveal | Mount + 0.2s | 0.8s |
| Buttons | magnetic + fadeUp stagger | Mount + 0.3s | 0.6s |
| Metrics | counter + fadeUp stagger | Mount + 0.5s | 0.8s |
| Scroll Indicator | bounce + fadeIn | Mount + 0.7s | Loop |
| Portrait (if visible) | parallax Y (0.15x) | Scroll | Continuous |

### ABOUT (Scroll Storytelling)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section Header | fadeUp | InView | 0.6s |
| Portrait | parallax Y (0.2x) + scale(1.02) | Scroll | Continuous |
| Portrait Badge | slideUp + fade | InView + 0.2s | 0.5s |
| Body Text | lineReveal stagger | InView + 0.1s | 0.8s |
| Pillar Cards | fadeUp stagger (0.08s) | InView + 0.3s | 0.6s |
| Pillar Hover | magnetic + glow | Hover | 0.3s |

### PROJECTS (Sophisticated Cards)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section Header | fadeUp | InView | 0.6s |
| Cards Grid | fadeUp stagger (0.1s) | InView | 0.7s |
| Card Hover | elevate + borderGlow + contentReveal | Hover | 0.3s |
| Card Number | magnetic | Hover | 0.2s |
| Modal Open | scale(0.95→1) + fadeIn + blur | Click | 0.4s |
| Modal Close | scale(1→0.95) + fadeOut | Click | 0.3s |

### TECH STACK (Interactive 3D)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Category Pills | magnetic + active state | Click/Hover | 0.2s |
| Presenter Image | float (subtle) | Continuous | 6s loop |
| Orbital Ring | continuous rotate (16s) | Continuous | Linear |
| Orbiting Badges | counter-rotate (upright) | Continuous | 16s |
| Energy Waves | pulse + dash animation | Continuous | 2s |
| Skill Cards | AnimatePresence stagger | Category Change | 0.4s |
| Skill Card Hover | magnetic + select state | Hover/Click | 0.2s |

### ARCHITECTURE (Flow Diagrams)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Tab Switch | AnimatePresence crossfade | Click | 0.4s |
| Nodes | fadeUp stagger (0.06s) | Tab Change | 0.5s |
| Connections | drawSVG (path length) | Node Reveal | 0.8s |
| Active Node | pulse glow | Auto-sequence | 2s loop |
| Arrow | pulse | Continuous | 1.5s |

### GITHUB (Live Showcase)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Header | fadeUp | InView | 0.6s |
| Filter Pills | magnetic | Hover | 0.2s |
| Repo Cards | fadeUp stagger (0.08s) | InView/Filter | 0.5s |
| Card Hover | elevate + borderGlow | Hover | 0.3s |
| Stats | counter animate | InView | 1.0s |
| Sync Button | rotate + pulse | Click | 0.6s |

### EXPERIENCE (Timeline)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Timeline Line | drawSVG (height) | Scroll | 1.2s |
| Dots | scale(0→1) stagger | Scroll | 0.4s |
| Cards | slideLeft stagger | InView | 0.6s |
| Highlights | fadeUp stagger | Card InView | 0.4s |
| Tech Tags | fadeIn stagger | Card InView + 0.2s | 0.3s |

### EDUCATION/ACHIEVEMENTS
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Section Headers | fadeUp | InView | 0.6s |
| Education Cards | slideUp stagger | InView | 0.5s |
| Achievement Cards | scale(0.95→1) stagger | InView | 0.4s |
| Certifications | slideRight stagger | InView | 0.5s |
| Check Icons | scale(0→1) bounce | Item InView | 0.3s |

### CONTACT (Premium Interaction)
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Header | fadeUp | InView | 0.6s |
| Headline | wordReveal stagger | InView + 0.1s | 1.0s |
| Email Button | magnetic + ripple | Hover/Click | 0.3s |
| Copy Button | magnetic + success state | Click | 0.4s |
| Social Links | magnetic stagger | InView + 0.3s | 0.4s |
| Form Inputs | focus ring + label float | Focus | 0.2s |
| Submit Button | magnetic + loading + success | Click | 0.5s |
| Success State | scale + check animation | Submit | 0.6s |

### FOOTER
| Element | Animation | Trigger | Duration |
|---------|-----------|---------|----------|
| Brand | fadeUp | InView | 0.5s |
| Copyright | fadeIn | InView + 0.1s | 0.4s |
| Back to Top | magnetic + scroll | Click | 0.8s |

---

## Technical Implementation

### Libraries Stack
```
framer-motion@12  - React animations, layout, gestures
gsap@3 + @gsap/react - Complex scroll animations, magnetic, ScrollTrigger
lenis@1 - Smooth scrolling
three@latest + @react-three/fiber@latest + @react-three/drei@latest - 3D elements
tailwindcss@3 - Utility-first styling (existing)
shadcn/ui - Accessible component primitives (Radix UI)
Aceternity UI / Magic UI - Premium pre-built components
clsx + tailwind-merge - Class composition (existing)
```

### Custom Hooks to Create
1. `useLenis()` - Lenis initialization & scroll access
2. `useScrollProgress()` - Scroll progress (0-1)
3. `useMagnetic(strength, radius)` - Magnetic element behavior
4. `useParallax(speed)` - Parallax transform
5. `useInView(options)` - Intersection Observer wrapper
6. `useReducedMotion()` - Respect prefers-reduced-motion

### Utility Components
1. `<TextReveal>` - Word/line/char reveal with variants
2. `<Magnetic>` - Wrapper for magnetic behavior
3. `<Parallax>` - Parallax wrapper
4. `<ScrollProgress>` - Top progress bar
5. `<Reveal>` - Generic Framer Motion reveal wrapper
6. `<Counter>` - Animated number counter

### Performance Guidelines
- Use `transform` and `opacity` only for animations
- `will-change: transform` on animated elements
- `content-visibility: auto` for off-screen sections
- Lazy-load heavy 3D components
- Debounce scroll handlers (Lenis handles this)
- Respect `prefers-reduced-motion` globally

### Reduced Motion Strategy
- Disable: parallax, continuous rotations, complex scroll animations
- Keep: instant state changes, simple fades, functional transitions
- Provide `motion-safe` / `motion-reduce` Tailwind variants

---

## Color & Visual Language
- **Primary**: Cyan (#06b6d4) - Tech, AI, innovation
- **Secondary**: Violet (#8b5cf6) - Creativity, depth
- **Accent**: Emerald (#10b981) - Success, verification
- **Warm**: Amber (#f59e0b) - Achievements, warnings
- **Background**: #050507 (near-black)
- **Surface**: #090a0f / #0c0d12 (elevated)
- **Border**: #1c1e28 (subtle)
- **Text Primary**: #f3f4f6
- **Text Muted**: #9ca3af / #6b7280

### Glow System
- **Subtle**: `shadow-[0_0_20px_rgba(6,182,212,0.15)]`
- **Medium**: `shadow-[0_0_40px_rgba(6,182,212,0.25)]`
- **Strong**: `shadow-[0_0_60px_rgba(6,182,212,0.4)]`
- **Border Glow**: `border-cyan-500/30` + `shadow-[0_0_20px_rgba(6,182,212,0.2)]`

---

## Responsive Breakpoints
- **Mobile**: < 640px - Single column, reduced parallax, simpler animations
- **Tablet**: 640-1024px - Two column grids, moderate effects
- **Desktop**: > 1024px - Full experience, all effects enabled
- **Large**: > 1440px - Expanded layouts, larger media

---

## Accessibility
- All interactive elements: focus-visible rings
- Semantic HTML maintained
- ARIA labels on icon-only buttons
- Color contrast: WCAG AA minimum
- Reduced motion: complete opt-out
- Keyboard navigation: full support