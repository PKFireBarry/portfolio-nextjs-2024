# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Basic Operations
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Development Server
The development server supports hot reloading. Edit files in `src/` and changes will automatically update in the browser.

## Project Architecture

This is a Next.js 14 portfolio website using the App Router pattern with TypeScript and Tailwind CSS.

### Key Architecture Patterns

**Component Structure:**
- `src/app/page.tsx` - Main page that imports and renders all section components
- `src/components/` - Section-based components (Hero, About, Projects, Contact, etc.)
- `src/components/ui/` - Reusable UI components using shadcn/ui design system
- `src/lib/utils.ts` - Utility functions, primarily the `cn()` function for conditional CSS classes

**Styling System:**
- Uses Tailwind CSS with custom configuration in `tailwind.config.ts`
- shadcn/ui components configured in `components.json`
- CSS variables defined for consistent theming (HSL color system)
- Dark mode support configured with class-based strategy

**Key Dependencies:**
- **UI Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS + shadcn/ui components
- **Animation:** Framer Motion for animations, react-simple-typewriter for text effects
- **Icons:** Heroicons, Radix UI icons, Lucide React, react-social-icons
- **State:** No global state management - uses component-level state

### Component Organization
The main page (`src/app/page.tsx`) renders components in this order:
1. Header (fixed navigation with modern glass morphism design)
2. Hero (mountain-themed landing with Pikes Peak coordinates)
3. About
4. Projects (grid-based with JSON data source)
5. TechStack
6. Contact (working Gmail API integration)

### Dynamic Content Management
- **Projects**: Managed via `/src/data/projects.json` - add new projects without code changes
- **Gmail Integration**: Contact form sends emails via `/api/send-email` route

### Image Configuration
Next.js image optimization is configured for external domains:
- i.ibb.co
- images.unsplash.com
- cdn.worldvectorlogo.com

### Import Aliases
- `@/components` → `src/components`
- `@/lib/utils` → `src/lib/utils`
- `@/components/ui` → `src/components/ui`

## Development Notes

- This is a single-page portfolio application with section-based navigation
- Uses TypeScript with strict configuration
- Follows Next.js App Router conventions
- All styling uses Tailwind CSS classes with the shadcn/ui design system
- No server-side API routes - purely static/client-side portfolio