# Personalized Energy Blueprint

## Overview

A personalized 30-day wellness tracking application designed for "The Energy Lifestyle Company" client. The application provides daily meal plans, workout routines, and progress tracking through an interactive checklist system. Built with a hybrid wellness-focused design combining productivity app efficiency with wellness brand warmth, the platform guides users through a structured 4-week energy transformation journey.

**Current Status**: MVP Complete (November 24, 2025)
- All core features functional: dashboard, week/day views, checklist tracking with persistence, PDF printing
- Days 1-14 have complete detailed content (checklists, meal plans, workouts, motivation)
- Days 15-30 have structural framework in place, ready for content completion
- Branded as "Personalized Energy Blueprint / The Energy Lifestyle Company"
- Support email: sunshine@thenergylifestyle.com (in footer)
- Shop link: https://www.theenergylifestyle.com/shop (on completion page)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (Dashboard, WeekView, DayView, AllDaysView, CompletionPage)
- TanStack Query (React Query) for server state management with infinite stale time and disabled refetch behaviors

**UI Component System**
- Radix UI primitives for accessible, unstyled component foundations
- shadcn/ui component library ("new-york" style variant) with extensive Radix UI components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system emphasizing wellness aesthetics with "energizing minimalism" principle

**State Management**
- TanStack Query for server state (checklist items, program data)
- Local React state for UI interactions (modals, toggles)
- No global client-side state management library - leveraging server state and React's built-in capabilities

**Key Design Patterns**
- Component composition with Card-based layouts
- Responsive grid systems (4-column desktop, 2-column tablet, 1-column mobile)
- Progress visualization through percentage bars and completion indicators
- Modal-based user feedback for achievement celebrations

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- Dual-mode setup: development (index-dev.ts with Vite middleware) and production (index-prod.ts serving static files)
- Custom logging middleware for API request tracking

**API Structure**
RESTful endpoints:
- `GET /api/checklist` - Retrieve all checklist items
- `GET /api/checklist/day/:day` - Retrieve checklist items for specific day (1-30)
- `POST /api/checklist/toggle` - Toggle completion status with Zod validation

**Data Storage Strategy**
- In-memory storage implementation (MemStorage class) for rapid prototyping
- Database-agnostic interface (IStorage) enabling future PostgreSQL integration
- Drizzle ORM configured for PostgreSQL with schema definitions ready for migration

**Data Model**
Static program content (30 days of meals, workouts, motivational content) stored in TypeScript constants, while user progress (checklist completion) persists in database

### External Dependencies

**Core Database & ORM**
- Drizzle ORM (v0.39.1) for type-safe database queries
- @neondatabase/serverless (v0.10.4) for PostgreSQL connectivity
- connect-pg-simple for session management (configured but not actively used)
- Drizzle-zod for schema validation integration

**UI Component Libraries**
- @radix-ui/* components (18+ packages) for accessible primitives including Dialog, Checkbox, Progress, Tabs, Toast, and more
- embla-carousel-react for carousel functionality
- cmdk for command palette patterns
- date-fns for date manipulation
- lucide-react for icon system

**Form & Validation**
- react-hook-form with @hookform/resolvers for form management
- Zod for runtime type validation and API request validation

**Development Tools**
- TypeScript for type safety across full stack
- Vite plugins: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner
- ESBuild for production server bundling

**Styling System**
- Tailwind CSS with PostCSS
- class-variance-authority for variant-based component styling
- clsx and tailwind-merge for conditional class composition

**Design Assets**
- Plus Jakarta Sans and DM Sans fonts (Google Fonts)
- Custom color system with HSL values for light mode (primary: orange accent at 32° 95% 50%)
- Elevation system using opacity-based shadows