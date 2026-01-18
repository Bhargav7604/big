# Styling Guide

## Current Approach: Vanilla CSS

The project currently uses vanilla CSS for styling, located in `src/assets/styles.css`.

### Why Vanilla CSS?

1. **No Dependencies**: No additional libraries required
2. **Full Control**: Complete control over styles
3. **Small Bundle**: No CSS framework overhead
4. **Learning Curve**: Easy to understand for all developers
5. **Performance**: No runtime CSS-in-JS overhead

## Styling Structure

### Main Stylesheet: `src/assets/styles.css`

```
styles.css
├── Reset & Base Styles
├── Layout Components (.container, .grid)
├── Strategy Card Styles
├── Modal Styles
├── Deploy Section Styles
├── Nudge Styles
└── Utility Styles & Animations
```

### Font Styles: `public/fonts/poppins.css`

Contains @font-face declarations for Poppins font family.

## Alternative: Tailwind CSS

An alternative Tailwind CSS setup is available in `src/assets/index.css` (currently unused). This file includes:

- Tailwind CSS imports
- Custom CSS variables for design tokens
- Dark mode support
- Extended color palette

### To Switch to Tailwind:

1. Install Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Update `src/main.tsx`:
```typescript
import './assets/index.css'; // Instead of styles.css
```

3. Create `tailwind.config.js`:
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5266FC',
        // ... other colors
      }
    }
  }
}
```

4. Convert components to use Tailwind classes

## Design System

### Color Palette

```css
/* Primary Colors */
--primary: #5266FC
--gradient-start: #5367fc
--gradient-mid: #4d6ff7
--gradient-end: #00e8b0

/* Status Colors */
--success: #10b981
--warning: #f59e0b
--error: #ef4444

/* Neutral Colors */
--gray-100: #f5f5f5
--gray-200: #e5e5e5
--gray-300: #d4d4d4
--gray-400: #a3a3a3
--gray-500: #737373
--gray-600: #525252
--gray-700: #404040
--gray-800: #262626
--gray-900: #171717

/* Text Colors */
--text-primary: #1a1a1a
--text-secondary: #666
--text-light: #999
```

### Tag Colors

```css
/* Intraday Tag */
.tag.intraday {
  background: #E8EAFF;
  color: #5266FC;
}

/* Medium Risk Tag */
.tag.medium {
  background: #FEF3C7;
  color: #92400E;
}

/* Nifty Tag */
.tag.nifty {
  background: #DCFCE7;
  color: #166534;
}

/* Options Tag */
.tag.options {
  background: #F3E8FF;
  color: #7C3AED;
}
```

### Typography Scale

```css
/* Font Family */
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Font Weights */
--font-regular: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700

/* Font Sizes */
--text-xs: 9px     /* Labels, tags */
--text-sm: 10px    /* Small text */
--text-base: 12px  /* Body text */
--text-md: 13px    /* Descriptions */
--text-lg: 14px    /* Headings */
--text-xl: 16px    /* Buttons */
--text-2xl: 18px   /* Modal titles */
--text-3xl: 24px   /* Strategy names */
--text-4xl: 28px   /* Page titles */
```

### Spacing Scale (8px Grid)

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
```

### Border Radius

```css
--radius-sm: 4px   /* Tags, buttons */
--radius-md: 6px   /* Small cards */
--radius-lg: 8px   /* Cards, sections */
--radius-xl: 12px  /* Modals */
```

### Shadows

```css
/* Card Hover */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

/* Modal */
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
```

### Transitions

```css
/* Standard */
transition: all 0.2s ease;

/* Smooth */
transition: all 0.3s ease-out;
```

## Component Styling Patterns

### 1. Card Component Pattern

```css
.component-card {
  /* Container */
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;

  /* Layout */
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* Interaction */
  transition: box-shadow 0.2s;
}

.component-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### 2. Button Pattern

```css
.btn {
  /* Reset */
  border: none;
  background: none;
  cursor: pointer;

  /* Spacing */
  padding: 12px 24px;

  /* Typography */
  font-size: 14px;
  font-weight: 600;

  /* Interaction */
  transition: opacity 0.2s;
}

.btn-primary {
  background: linear-gradient(135deg, #5367fc 0%, #4d6ff7 50%, #00e8b0 100%);
  color: white;
  border-radius: 8px;
}

.btn-primary:hover {
  opacity: 0.9;
}
```

### 3. Tag Pattern

```css
.tag {
  /* Base styles */
  font-size: 10px;
  font-weight: 400;
  padding: 4px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

/* Color variants through modifiers */
.tag.variant-name { }
```

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones, 0-640px) */
/* Default styles */

/* Medium devices (tablets, 641px-768px) */
@media (min-width: 641px) { }

/* Large devices (desktops, 769px-1024px) */
@media (min-width: 769px) { }

/* Extra large devices (large desktops, 1025px+) */
@media (min-width: 1025px) { }
```

### Grid System

```css
.strategy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}
```

## Animation Guidelines

### Entrance Animations

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: slideIn 0.3s ease-out;
}
```

### Hover Effects

```css
/* Scale on hover */
.interactive-element:hover {
  transform: scale(1.02);
}

/* Color change on hover */
.interactive-element:hover {
  color: #5266FC;
}

/* Shadow on hover */
.interactive-element:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## Best Practices

### 1. Class Naming

Use BEM-inspired naming:
```css
/* Block */
.strategy-card { }

/* Element */
.strategy-card__header { }
.strategy-card__body { }

/* Modifier */
.strategy-card--bookmarked { }
.strategy-card--deployed { }
```

### 2. Avoid Inline Styles

Bad:
```typescript
<div style={{ color: 'red', fontSize: '14px' }}>Text</div>
```

Good:
```typescript
<div className="error-text">Text</div>
```

### 3. Use CSS Variables for Theming

```css
:root {
  --primary-color: #5266FC;
  --text-color: #1a1a1a;
}

.element {
  color: var(--primary-color);
}
```

### 4. Mobile-First

Start with mobile styles, then add media queries for larger screens:

```css
/* Mobile first */
.element {
  padding: 12px;
}

/* Tablet and up */
@media (min-width: 641px) {
  .element {
    padding: 20px;
  }
}
```

### 5. Performance

- Avoid excessive animations
- Use `transform` and `opacity` for animations (GPU accelerated)
- Minimize reflows and repaints
- Use CSS containment when appropriate

## Accessibility

### Focus States

```css
.interactive-element:focus {
  outline: 2px solid #5266FC;
  outline-offset: 2px;
}
```

### Color Contrast

Ensure all text meets WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Tools & Resources

### Browser DevTools
- Chrome DevTools for debugging
- Firefox DevTools for grid/flexbox visualization
- Lighthouse for performance auditing

### VS Code Extensions
- CSS Peek
- IntelliSense for CSS
- Prettier for formatting

### External Resources
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) for browser support
