# Component Documentation

## Overview

This document provides detailed information about the React components used in the Bigul Algo Trading Platform.

## Component Hierarchy

```
DiscoverStrategies (Page)
├── StrategyCard (Multiple instances)
└── StrategyModal

StrategyDetails (Page)
└── DeploySection
```

---

## StrategyCard

A card component that displays strategy information in a compact, visually appealing format.

### Import
```typescript
import { StrategyCard } from '@components/StrategyCard';
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| name | string | Yes | - | Strategy name |
| tags | Tag[] | Yes | - | Array of tag objects |
| description | string | Yes | - | Short description of the strategy |
| lastDeployed | string | No | undefined | Last deployment time (e.g., "2 days ago") |
| minCapital | string | Yes | - | Minimum capital required |
| avgReturn | string | Yes | - | Average return display text |
| backtestTooltip | string | Yes | - | Tooltip text for backtest info |
| status | 'deployed' \| 'available' | Yes | - | Strategy status |
| isBookmarked | boolean | No | false | Whether strategy is bookmarked |
| onBookmark | () => void | No | - | Bookmark button click handler |
| onShare | () => void | No | - | Share button click handler |
| onView | () => void | No | - | View button click handler |
| onShowMore | () => void | No | - | Show more button click handler |

### Tag Interface
```typescript
interface Tag {
  label: string;
  type: 'intraday' | 'medium' | 'nifty' | 'options';
}
```

### Example Usage
```typescript
<StrategyCard
  name="Bank Nifty-Delta Neutral Strategy"
  tags={[
    { label: 'Intraday', type: 'intraday' },
    { label: 'Medium', type: 'medium' }
  ]}
  description="This strategy uses delta-neutral positioning..."
  lastDeployed="2 days ago"
  minCapital="₹50k"
  avgReturn="Backtest"
  backtestTooltip="Information is based on last 3 month trades"
  status="deployed"
  isBookmarked={true}
  onBookmark={() => handleBookmark()}
  onShare={() => handleShare()}
  onView={() => handleView()}
  onShowMore={() => handleShowMore()}
/>
```

### Features
- Responsive design
- Tag display with color coding
- Last deployed badge (shows when provided)
- Truncated description with "Show more" button
- Statistics display with tooltip
- Bookmark and share actions
- Hover animations

### Styling
The component uses CSS classes defined in `src/assets/styles.css`:
- `.strategy-card` - Main container
- `.strategy-header` - Name and action buttons
- `.tags-and-deployed` - Tags and last deployed badge
- `.description-section` - Description with show more
- `.stats-row` - Statistics at the bottom

---

## StrategyModal

A modal component for displaying full strategy descriptions.

### Import
```typescript
import { StrategyModal } from '@components/StrategyModal';
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| isOpen | boolean | Yes | - | Controls modal visibility |
| title | string | Yes | - | Modal title (strategy name) |
| description | string | Yes | - | Full strategy description |
| onClose | () => void | Yes | - | Close button click handler |

### Example Usage
```typescript
<StrategyModal
  isOpen={modalOpen}
  title="Bank Nifty-Delta Neutral Strategy"
  description="Full strategy description here..."
  onClose={() => setModalOpen(false)}
/>
```

### Features
- Full-screen overlay
- Scrollable content
- ESC key to close
- Click outside to close
- Smooth fade-in animation

### Keyboard Shortcuts
- **ESC** - Close modal

---

## DeploySection

A section component for deploying trading strategies with mode selection.

### Import
```typescript
import { DeploySection } from '@components/DeploySection';
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| strategyName | string | Yes | - | Name of the strategy |
| expiryDayCapital | string | No | undefined | Capital required on expiry day |
| nonExpiryDayCapital | string | No | undefined | Capital required on non-expiry day |
| onDeploy | (mode: DeployMode) => void | Yes | - | Deploy button click handler |

### DeployMode Type
```typescript
type DeployMode = 'forward-test' | 'live-trading';
```

### Example Usage
```typescript
<DeploySection
  strategyName="Bank Nifty-Delta Neutral Strategy"
  expiryDayCapital="₹50,000"
  nonExpiryDayCapital="₹35,000"
  onDeploy={(mode) => handleDeploy(mode)}
/>
```

### Features
- Two deployment modes:
  - **Forward Test** - Simulation mode (paper trading)
  - **Live Trading** - Real money trading
- Contextual nudges based on selected mode
- Capital requirement table (for live trading)
- Visual feedback for mode selection
- Animated nudge appearance

### Nudges

#### Forward Test Nudge
- Blue theme (#E8EAFF background, #5266FC accent)
- Info icon (ℹ️)
- Explains no real money or trades

#### Live Trading Nudge
- Yellow theme (#FEF3C7 background, #F59E0B accent)
- Warning icon (⚠️)
- Shows capital requirements table
- Displays expiry vs non-expiry day capital

---

## Type Definitions

### Strategy Type
```typescript
interface Strategy {
  id: string;
  name: string;
  tags: Tag[];
  description: string;
  fullDescription?: string;
  lastDeployed?: string;
  minCapital: string;
  avgReturn: string;
  backtestTooltip: string;
  status: 'deployed' | 'available';
  expiryDayCapital?: string;
  nonExpiryDayCapital?: string;
}
```

### Deploy Config Type
```typescript
interface DeployConfig {
  mode: DeployMode;
  strategyId: string;
  capital?: number;
}
```

---

## Styling Guidelines

### Color Scheme
- **Primary**: #5266FC
- **Gradient**: linear-gradient(135deg, #5367fc 0%, #4d6ff7 50%, #00e8b0 100%)
- **Success**: #10b981
- **Warning**: #f59e0b
- **Gray**: #666
- **Dark**: #1a1a1a

### Tag Colors
- **Intraday**: #E8EAFF (bg) / #5266FC (text)
- **Medium**: #FEF3C7 (bg) / #92400E (text)
- **Nifty**: #DCFCE7 (bg) / #166534 (text)
- **Options**: #F3E8FF (bg) / #7C3AED (text)

### Typography
- **Font**: Poppins
- **Weights**: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Base Size**: 14px

### Spacing
- Card padding: 20px
- Gap between elements: 12px
- Border radius: 8px (cards), 4px (tags/buttons)

### Animations
- Hover transition: 0.2s
- Slide-in animation: 0.3s ease-out

---

## Best Practices

1. **Always provide handlers**: Even if empty, provide onClick handlers to components for better UX
2. **Use TypeScript**: Leverage TypeScript interfaces for type safety
3. **Responsive design**: All components are mobile-responsive by default
4. **Accessibility**: Use aria-labels for icon buttons
5. **Performance**: Use React.memo for strategy cards in large lists
6. **State management**: Keep state at the page level for better control

---

## Testing

### Example Test Cases

```typescript
// StrategyCard
- Renders with all required props
- Shows last deployed badge when provided
- Hides last deployed badge when not provided
- Calls onBookmark when bookmark button clicked
- Shows correct tag colors based on type
- Truncates long descriptions
- Shows "Show more" button for long descriptions

// StrategyModal
- Opens when isOpen is true
- Closes when close button clicked
- Closes when ESC key pressed
- Closes when clicking outside modal
- Does not render when isOpen is false

// DeploySection
- Shows forward test nudge when forward test selected
- Shows live trading nudge when live trading selected
- Displays capital table only for live trading
- Calls onDeploy with correct mode
- Allows mode switching
```

---

## Future Enhancements

- Add loading states
- Add error states
- Add skeleton loaders
- Add animation variants
- Add dark mode support
- Add accessibility improvements (ARIA, keyboard navigation)
- Add unit tests
- Add Storybook stories
