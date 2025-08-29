# Soft Neo-Brutalist Homepage Template

A bold, memorable React Next.js homepage template with chunky design elements and playful brutalist aesthetics. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

This template embraces **Soft Neo-Brutalism** - a design approach that combines:
- **Bold, chunky elements** with generous proportions
- **Playful color palette** using modern pastels
- **Unapologetic confidence** in visual presentation
- **Rounded edges** to soften traditional brutalist harshness
- **Satisfying interactions** with bouncy animations

## ✨ Features

### 🏗️ Core Architecture
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom brutalist utilities
- **Framer Motion** for smooth animations
- **Lucide React** for bold, filled icons
- **Responsive design** maintaining chunky aesthetic

### 🎯 Homepage Sections
1. **Chunky Navigation** - Bold header with pill-shaped buttons
2. **Hero Block** - Massive headlines with floating elements
3. **Feature Blocks** - 6 colorful feature cards
4. **Stats Blocks** - Eye-catching metrics display
5. **Testimonial Blocks** - Social proof with personality
6. **Pricing Blocks** - Three-tier pricing with popular plan highlight
7. **FAQ Accordion** - Expandable questions with bouncy animations
8. **Newsletter Block** - Email capture with playful messaging
9. **Bold Footer** - Comprehensive footer with chunky social buttons

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download** this template
2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization Guide

### Color System
The template uses a cohesive color palette defined in `tailwind.config.js`:

```javascript
colors: {
  primary: '#6366F1',        // indigo-500
  secondary: '#F43F5E',      // rose-500
  'accent-yellow': '#FDE047', // yellow-300
  'accent-blue': '#60A5FA',   // blue-400
  'accent-pink': '#F472B6',   // pink-400
  'bg-primary': '#F9FAFB',
  'bg-yellow': '#FEF3C7',
  'bg-blue': '#DBEAFE',
  'bg-pink': '#FCE7F3',
}
```

### Typography
- **Headlines**: Clash Display (via Fontshare API)
- **Body text**: Inter (via Google Fonts)
- **Buttons**: Inter Bold with ALL CAPS

### Content Management
Edit content in `src/data/content.ts`:

```typescript
export const features = [
  {
    title: "SUPER FAST",
    description: "Like, seriously fast...",
    color: "yellow",
    icon: "Zap"
  },
  // Add more features...
];
```

### Component Styling
Use brutalist utility classes from `src/app/globals.css`:

```css
.chunky-button-primary  /* Primary CTA button */
.color-block-yellow     /* Yellow content block */
.section-label          /* ALL CAPS section labels */
.chunky-heading         /* Bold Clash Display headings */
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage assembly
│   └── globals.css         # Brutalist utilities & styles
├── components/
│   ├── layout/
│   │   ├── chunky-navigation.tsx
│   │   └── bold-footer.tsx
│   └── sections/
│       ├── hero-block.tsx
│       ├── feature-blocks.tsx
│       ├── stats-blocks.tsx
│       ├── testimonial-blocks.tsx
│       ├── pricing-blocks.tsx
│       ├── faq-accordion.tsx
│       └── newsletter-block.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── data/
    └── content.ts          # All content data
```

## 🔧 Configuration

### Tailwind Extensions
Custom brutalist shadows and animations:

```javascript
boxShadow: {
  'brutal': '8px 8px 0px 0px rgba(0,0,0,0.1)',
  'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,0.2)',
  'brutal-yellow': '8px 8px 0px 0px #FDE047',
}

animation: {
  'bounce-chunky': 'bounce 0.6s ease-in-out',
  'squish': 'squish 0.2s ease-out',
  'float': 'float 6s ease-in-out infinite',
}
```

### Custom CSS Variables
Available in CSS as:
```css
var(--primary)
var(--accent-yellow)
var(--bg-primary)
/* etc. */
```

## 📱 Responsive Design

The template maintains its chunky aesthetic across all screen sizes:
- **Desktop**: Full brutalist experience with large elements
- **Tablet**: Stacked layouts with preserved proportions
- **Mobile**: Touch-optimized with generous spacing

## ♿ Accessibility Features

- **WCAG AA compliant** color contrast ratios
- **Screen reader friendly** with descriptive labels
- **Keyboard navigation** support
- **Touch targets** minimum 44px (most are larger)
- **Focus indicators** for all interactive elements

## 🎭 Animation System

Built with Framer Motion for satisfying interactions:
- **Entrance animations** for sections
- **Hover effects** with scale and shadow
- **Button squish** on click
- **Floating elements** with continuous motion
- **Accordion expand/collapse** with bounce

## 🔄 Performance Optimization

- **Next.js 15** optimizations
- **Image optimization** with Next.js Image component
- **Font loading** optimization with `next/font`
- **Bundle splitting** for efficient loading
- **Lazy loading** for off-screen content

## 🛠️ Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 📦 Dependencies

### Core
- `next`: ^15.0.3
- `react`: ^18.3.1
- `typescript`: ^5.6.3

### Styling
- `tailwindcss`: ^3.4.15
- `framer-motion`: Latest

### Icons & Utilities
- `lucide-react`: Latest
- `clsx`: Latest
- `tailwind-merge`: Latest

## 🎨 Design Patterns

### Button Variations
```jsx
<button className="chunky-button-primary">PRIMARY</button>
<button className="chunky-button-yellow">YELLOW</button>
<button className="chunky-button-blue">BLUE</button>
<button className="chunky-button-pink">PINK</button>
```

### Color Blocks
```jsx
<div className="color-block-yellow">Yellow content</div>
<div className="color-block-blue">Blue content</div>
<div className="color-block-pink">Pink content</div>
```

### Typography Hierarchy
```jsx
<h1 className="font-clash font-black text-7xl">Main Heading</h1>
<h2 className="font-clash font-black text-5xl">Section Heading</h2>
<p className="section-label">SECTION LABEL</p>
<p className="text-lg font-medium">Body text</p>
```

## 🔮 Customization Ideas

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add content data to `src/data/content.ts`

### Color Variations
1. Update colors in `tailwind.config.js`
2. Add new utility classes in `globals.css`
3. Update component color mappings

### Animation Enhancements
1. Add new keyframes in Tailwind config
2. Create Framer Motion variants
3. Apply to components as needed

## 📄 License

This template is available for personal and commercial use. Feel free to customize and make it your own!

## 🙌 Credits

- **Design Inspiration**: Neo-brutalist web design trends
- **Fonts**: Clash Display (Fontshare), Inter (Google Fonts)  
- **Icons**: Lucide React
- **Framework**: Next.js + Tailwind CSS + Framer Motion

---

**Built with ❤️ and lots of coffee**

Made for developers who want to create bold, memorable websites that make users smile while maintaining professional functionality.
