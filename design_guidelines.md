# Personalized Energy Blueprint - Design Guidelines

## Design Approach
**Hybrid Wellness-Focused Design**: Combining productivity app efficiency (Linear/Notion patterns) with wellness brand warmth (Headspace/Calm aesthetics). The interface should feel organized yet uplifting, functional yet energizing.

## Core Design Principles
- **Energizing Minimalism**: Clean layouts with purposeful pops of brand energy
- **Progress Visibility**: Clear visual feedback for accomplishments and momentum
- **Warm Professionalism**: Wellness-focused without being overly casual

## Typography System
- **Headlines**: Bold, confident sans-serif (e.g., "Plus Jakarta Sans" or "DM Sans" at 700 weight)
  - Page titles: text-3xl to text-4xl
  - Week headers: text-2xl
  - Day headers: text-xl
- **Body Text**: Clean, readable sans-serif (same family, 400-500 weight)
  - Main content: text-base
  - Supporting text: text-sm
- **Special Text**: Use 600 weight for checklist items, CTA buttons, and emphasis

## Layout System
**Spacing Units**: Consistent use of 4, 6, 8, 12, 16, 20, and 24 (tailwind units)
- Container padding: p-6 on mobile, p-8 to p-12 on desktop
- Section spacing: mb-8 to mb-12 between major sections
- Card padding: p-6 consistently
- List item spacing: gap-4

## Component Library

### Navigation Header
- Fixed top navigation with logo left, week selector center, support link right
- Clean border-bottom for definition
- Height: h-16 to h-20
- Include "Personalized Energy Blueprint for Melissa Gregory" as tagline/subheader

### Week Overview Dashboard
- 4-column grid on desktop (grid-cols-4), 2 on tablet, 1 on mobile
- Week cards with: Week number, date range, completion percentage, quick stats
- Subtle shadow and rounded corners (rounded-lg)
- Progress ring or bar showing week completion

### Daily View Layout
- **Left Sidebar** (w-64 on desktop, collapsible on mobile):
  - Calendar navigation showing all 30 days
  - Current day highlighted with brand accent
  - Completed days with checkmark indicators
- **Main Content Area**:
  - Day header with date and motivational quote
  - Daily checklist section (most prominent)
  - Meal plan preview card
  - Workout preview card
  - Daily reminder callout box

### Checklist Component
- Large, satisfying checkboxes (w-6 h-6)
- Strikethrough animation on completion
- Hover state with subtle scale
- Group related items with subtle dividers

### Meal Plan & Workout Cards
- Two-column layout on desktop for meal/workout side-by-side
- Each card: Title, preview content, "View Full Plan" and "Print PDF" buttons
- Icon indicators for meal types (breakfast/lunch/dinner) and workout categories

### Print PDF Pages
- Clean, printer-friendly layouts
- Week header with dates
- Tables for meal plans (day, meal type, items, notes)
- Workout schedules with exercises, sets, reps
- The Energy Lifestyle Company branding in header
- Footer with week number and page numbers

### Congratulations Modal/Cards
- Appears on day completion
- Celebratory message with day-specific encouragement
- Progress stats (X/30 days complete)
- Motivational image or illustration placeholder
- "Continue Tomorrow" CTA

### Completion Page (Day 30)
- Hero section celebrating completion
- Stats summary: Total days completed, meals tracked, workouts done
- Two prominent CTAs:
  - "Add 1:1 Coach" (primary button)
  - "Buy New Plan" (secondary button)
- Both linking to shop with appropriate UTM parameters

### Footer
- Subtle background separation
- Center-aligned: "Support: sunshine@thenergylifestyle.com"
- The Energy Lifestyle Company branding
- Sticky on longer pages

## Images & Visual Assets

### Hero/Welcome Section
- Energizing lifestyle image showing vitality, movement, or wellness
- Placed on initial dashboard/welcome screen
- Overlay with semi-transparent gradient for text readability
- CTAs on blurred background overlays

### Daily Motivational Images
- Small wellness-themed images for daily headers (optional but recommended)
- Nature, energy, movement themes
- Consistent aspect ratio (16:9 or 4:3)

### Icons
- **Use Heroicons** via CDN for all interface icons
- Consistent stroke width throughout
- Icons for: checkmarks, calendar, meal types, workout categories, PDF export, email

## Interactive States
- **Checkboxes**: Smooth check animation with subtle bounce
- **Buttons**: Gentle scale on hover (scale-105), no color shifts for buttons on images
- **Cards**: Subtle shadow increase on hover
- **Progress bars**: Smooth fill animations
- **Day navigation**: Highlight current day, fade incomplete future days

## Accessibility
- Minimum touch target: 44x44px for all interactive elements
- Clear focus states with visible outlines
- High contrast for text (WCAG AA minimum)
- Screen reader labels for all checkboxes and progress indicators

## Responsive Breakpoints
- Mobile-first approach
- Sidebar collapses to hamburger menu below 1024px
- Cards stack to single column below 768px
- Maintain generous spacing on mobile (minimum p-4)

## Brand Consistency
- Use orange/yellow accent from provided logo strategically (CTAs, progress indicators, active states)
- Keep most interface neutral with brand energy in purposeful moments
- Maintain wellness-focused, professional tone throughout
- Every page reinforces "The Energy Lifestyle Company" identity