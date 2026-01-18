# Architecture Documentation

## Overview

The Bigul Algo Trading Platform follows a modern React architecture with TypeScript, emphasizing component reusability, type safety, and clean separation of concerns.

## Architecture Principles

### 1. Component-Based Architecture
- **Atomic Design**: Components are built from small, reusable pieces
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Components compose together rather than extend

### 2. Type Safety
- **TypeScript First**: All code written in TypeScript
- **Strict Mode**: TypeScript strict mode enabled
- **Interface Contracts**: Clear interfaces for all props and data structures

### 3. Separation of Concerns
- **Presentation Layer**: React components (pure presentation)
- **Business Logic**: Extracted to utility functions and hooks
- **Data Layer**: Type definitions and data transformations
- **Styling**: Separate CSS files, no inline styles

### 4. File Organization
```
src/
├── components/     # Reusable UI components
├── pages/         # Page-level components
├── types/         # TypeScript type definitions
├── utils/         # Utility functions and constants
└── assets/        # Static assets (CSS, images)
```

## Component Architecture

### Component Types

#### 1. Page Components (`src/pages/`)
- Top-level route components
- Manage page state
- Compose smaller components
- Handle data fetching (future)

**Example:**
```typescript
// DiscoverStrategies.tsx
export const DiscoverStrategies: React.FC = () => {
  // State management
  // Data fetching
  // Event handlers
  return (
    <div>
      {/* Compose child components */}
    </div>
  );
};
```

#### 2. UI Components (`src/components/`)
- Pure presentational components
- Accept props for configuration
- No internal state (or minimal state)
- Reusable across pages

**Example:**
```typescript
// StrategyCard.tsx
export const StrategyCard: React.FC<StrategyCardProps> = (props) => {
  // Minimal state (UI only)
  return <div>{/* Render UI */}</div>;
};
```

#### 3. Layout Components (Future)
- Header, Footer, Sidebar
- Navigation components
- Page wrappers

### Component Communication

```
┌─────────────────────────┐
│    Page Component       │
│  (State Management)     │
└────────┬────────────────┘
         │
         ├─── Props ────▶ Component A
         │                   │
         │                   └─── Callback ────▶ Page
         │
         └─── Props ────▶ Component B
                             │
                             └─── Callback ────▶ Page
```

- **Downward**: Props flow from parent to child
- **Upward**: Callbacks flow from child to parent
- **Sibling**: Communication through shared parent

## Data Flow

### Current Architecture (Client-Side)

```
┌──────────────┐
│   Page       │ ◀── User Interaction
│              │
│  - State     │
│  - Handlers  │
└──────┬───────┘
       │
       ├── Props ──▶ ┌──────────────┐
       │             │  Component   │
       │             └──────────────┘
       │
       └── Props ──▶ ┌──────────────┐
                     │  Component   │
                     └──────────────┘
```

### Future Architecture (With API)

```
┌──────────────┐         ┌──────────────┐
│   Page       │ ◀────▶  │   API Layer  │
│              │         │  (Services)  │
│  - State     │         └──────┬───────┘
│  - Handlers  │                │
└──────┬───────┘                ▼
       │                  ┌──────────────┐
       │                  │   Backend    │
       │                  │   (Supabase) │
       │                  └──────────────┘
       ├── Props ──▶ Components
       │
       └── Props ──▶ Components
```

## Type System

### Type Hierarchy

```typescript
// Base Types
type TagType = 'intraday' | 'medium' | 'nifty' | 'options';
type StrategyStatus = 'deployed' | 'available';
type DeployMode = 'forward-test' | 'live-trading';

// Interfaces
interface Tag {
  label: string;
  type: TagType;
}

interface Strategy {
  id: string;
  name: string;
  // ... other fields
}

// Component Props extend interfaces
interface StrategyCardProps extends Pick<Strategy, 'name' | 'tags'> {
  onBookmark?: () => void;
  // ... other props
}
```

### Type Organization
- **Domain Types**: `src/types/` - Business domain types (Strategy, Tag, etc.)
- **Component Props**: Defined in component files
- **Utility Types**: TypeScript utility types (Pick, Omit, Partial, etc.)

## State Management

### Current Approach: Component State

```typescript
// Local state for UI
const [modalOpen, setModalOpen] = useState(false);

// Derived state
const [bookmarkedStrategies, setBookmarkedStrategies] = useState<Set<string>>(new Set());
```

### Future: Context API (When Needed)

```typescript
// For app-wide state
const StrategyContext = React.createContext<StrategyContextType>(defaultValue);

// Provider at app level
<StrategyContext.Provider value={contextValue}>
  <App />
</StrategyContext.Provider>

// Consumer in components
const { strategies, bookmarks } = useContext(StrategyContext);
```

### State Management Rules

1. **Keep state as low as possible** in the component tree
2. **Lift state only when needed** for sharing between components
3. **Use local state for UI-only state** (modals, dropdowns, etc.)
4. **Use context for truly global state** (user, theme, etc.)

## Styling Architecture

### CSS Organization

```
src/assets/styles.css
├── Reset & Base Styles
├── Layout Components
│   ├── Container
│   ├── Grid
│   └── Flex utilities
├── Component Styles
│   ├── StrategyCard
│   ├── Modal
│   └── DeploySection
├── Utility Classes
└── Animations
```

### Styling Principles

1. **Class-based styling**: No inline styles
2. **BEM-inspired naming**: `.component-element--modifier`
3. **Scoped styles**: Component-specific classes
4. **Responsive by default**: Mobile-first approach
5. **CSS Variables**: For theme values (future enhancement)

### Example Structure
```css
/* Component */
.strategy-card { }

/* Element */
.strategy-card .strategy-header { }

/* Modifier */
.strategy-card.bookmarked { }

/* State */
.strategy-card:hover { }
```

## Build Architecture

### Vite Configuration

```typescript
// vite.config.ts
{
  plugins: [react()],
  resolve: {
    alias: {
      '@': './src',
      '@components': './src/components',
      '@pages': './src/pages',
      // ... etc
    }
  }
}
```

### Path Aliases

- `@/` - src root
- `@components/` - components directory
- `@pages/` - pages directory
- `@types/` - types directory
- `@utils/` - utils directory
- `@assets/` - assets directory

### Build Process

```
TypeScript → Vite → Optimized Bundle
    ↓           ↓
Type Check   Tree Shaking
             Code Splitting
             Minification
```

## Future Enhancements

### 1. API Integration Layer

```typescript
// src/services/api.ts
export const strategyService = {
  getAll: () => fetch('/api/strategies'),
  getById: (id: string) => fetch(`/api/strategies/${id}`),
  deploy: (config: DeployConfig) => fetch('/api/deploy', { ... })
};
```

### 2. Custom Hooks

```typescript
// src/hooks/useStrategies.ts
export const useStrategies = () => {
  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch logic

  return { strategies, loading };
};
```

### 3. Error Boundaries

```typescript
// src/components/ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  // Error handling
}
```

### 4. Testing Infrastructure

```
tests/
├── unit/           # Component unit tests
├── integration/    # Integration tests
└── e2e/           # End-to-end tests
```

### 5. Performance Optimization

- React.memo for expensive components
- useMemo for expensive computations
- useCallback for stable callbacks
- Code splitting with React.lazy
- Virtual scrolling for long lists

## Design Patterns

### 1. Container/Presentational Pattern

```typescript
// Container (Smart)
const DiscoverStrategiesContainer = () => {
  const [state, setState] = useState();
  // Logic here
  return <DiscoverStrategiesView data={state} />;
};

// Presentational (Dumb)
const DiscoverStrategiesView = ({ data }) => {
  // Only rendering
};
```

### 2. Compound Components Pattern

```typescript
// Future enhancement for complex components
<DeploySection>
  <DeploySection.Header />
  <DeploySection.ModeSelector />
  <DeploySection.Nudge />
  <DeploySection.Button />
</DeploySection>
```

### 3. Render Props Pattern

```typescript
// For flexible components
<DataFetcher
  url="/api/strategies"
  render={({ data, loading }) => (
    loading ? <Spinner /> : <StrategyList data={data} />
  )}
/>
```

## Security Considerations

### 1. XSS Prevention
- All user input sanitized
- React's built-in escaping
- No dangerouslySetInnerHTML without sanitization

### 2. API Security
- Environment variables for sensitive data
- No secrets in client code
- CORS properly configured

### 3. Type Safety
- TypeScript prevents many runtime errors
- Strict mode enabled
- No 'any' types in production code

## Performance Considerations

### 1. Bundle Size
- Code splitting by route
- Tree shaking for unused code
- Lazy loading for heavy components

### 2. Rendering Performance
- Memoization where needed
- Avoid unnecessary re-renders
- Virtual scrolling for lists

### 3. Asset Optimization
- Optimized images (WebP)
- Font subsetting
- CSS minification

## Monitoring & Debugging

### Development Tools
- React DevTools
- TypeScript compiler
- Vite HMR (Hot Module Replacement)
- Browser DevTools

### Production (Future)
- Error tracking (Sentry)
- Performance monitoring
- Analytics
- User feedback

## Conclusion

This architecture provides:
- **Scalability**: Easy to add new features
- **Maintainability**: Clear structure and separation
- **Type Safety**: Fewer runtime errors
- **Performance**: Optimized build and runtime
- **Developer Experience**: Fast feedback loop
