# Design Guidelines: Educational Tree Learning App

## Design Approach
**System**: Material Design principles adapted for educational content with nature-themed aesthetics
**Rationale**: Educational tools benefit from proven usability patterns. Material Design provides excellent information hierarchy and component clarity while allowing customization for the nature theme.

## Core Design Elements

### A. Typography
- **Primary Font**: Inter or Roboto via Google Fonts
- **Headers**: Bold weights (700) for tree names and section titles, sizes 2xl-4xl
- **Body Text**: Regular (400) for descriptions, size base-lg for optimal readability
- **Quiz Questions**: Semibold (600) for emphasis, size lg-xl
- **Score/Progress**: Bold (700) for numerical feedback

### B. Layout System
**Spacing Units**: Tailwind 4, 6, 8, 12, 16 for consistent rhythm
- Section padding: py-12 to py-16
- Card padding: p-6 to p-8
- Element gaps: gap-4 for related items, gap-8 for sections
- Container: max-w-6xl for main content, max-w-4xl for reading sections

### C. Component Library

**Navigation**
- Fixed top navigation with app title "TreeLearn" and progress indicator (X/12 trees completed)
- Tree selection grid/list accessible from home

**Tree Learning Cards**
- Large card layout with tree image at top (aspect-ratio-4/3)
- Tree name as prominent heading
- Description sections with clear paragraph breaks
- Characteristics list with bullet points or tags
- "Take Quiz" CTA button at bottom

**Quiz Interface**
- Question card with clear numbering (Question 1 of 5)
- Multiple choice options as full-width clickable buttons with hover states
- Immediate visual feedback (correct/incorrect)
- Progress bar showing quiz completion
- Score display prominent at end

**Success/Congratulations Screen**
- Large success message with score percentage
- Tree completion badge/icon
- "Next Tree" and "Review" action buttons
- Visual celebration element (confetti or nature-themed graphic)

**Progress Dashboard**
- 3-column grid (md:grid-cols-2, lg:grid-cols-3) showing all 12 trees
- Each tree card shows: thumbnail, name, completion status
- Locked/unlocked visual states for sequential learning (if applicable)

### D. Layout Structure

**Home/Dashboard Page**
- Header with app branding and overall progress
- Grid of 12 tree cards showing completion status
- Each card: tree thumbnail, name, "Start Learning" or "Completed" badge

**Tree Detail Page**
- Hero section with large tree photograph and tree name overlay
- Content section with max-w-4xl for readable text width
- Sidebar or accordion for quick facts (height, habitat, uses)
- Sticky "Start Quiz" button

**Quiz Flow**
- Single question per screen for focus
- Large, tappable answer options with spacing
- Bottom navigation: "Previous" and "Next/Submit" buttons
- Score summary page with visual feedback

## Images Section

**Required Images**:
1. **Hero/Header**: Nature-themed banner with forest canopy or leaves (1920x400px recommended) - use on home page
2. **Tree Photos**: Individual high-quality photos for each of 12 trees (800x600px) - one per tree detail page as hero
3. **Tree Thumbnails**: Smaller versions for grid display (400x300px)
4. **Success Icons**: Celebratory graphics or badges for quiz completion

**Placement**:
- Home page: Forest canopy hero banner spanning full width
- Tree detail pages: Individual tree photo as page hero with name overlay (buttons on image should have blurred/frosted backgrounds)
- Quiz completion: Optional nature-themed success graphic

## Accessibility
- High contrast text on all backgrounds
- Touch-friendly button sizes (min h-12)
- Clear focus states for keyboard navigation
- Semantic HTML for screen readers
- Consistent form input styling throughout

## Visual Hierarchy
- Tree names: Largest, boldest text
- Quiz questions: Medium-large, clearly separated
- Descriptions: Comfortable reading size with line-height of 1.6-1.8
- Metadata/labels: Smaller, muted styling

This creates an engaging, educational experience that's both functional for learning and visually appealing for high school students.