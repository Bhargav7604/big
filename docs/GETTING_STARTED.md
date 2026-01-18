# Getting Started

## Quick Start

Get the Bigul Algo Trading Platform up and running in 5 minutes.

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm** 9.0 or higher (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

### Installation

1. **Clone or navigate to the project directory**
```bash
cd /path/to/bigul-algo-trading
```

2. **Install dependencies**
```bash
npm install
```

This will install all required packages including React, TypeScript, Vite, and development tools.

3. **Start the development server**
```bash
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`.

## Project Overview

### What You'll See

After starting the development server, you'll see the **Discover Strategies** page featuring:
- Strategy cards with information about various trading strategies
- Interactive elements (bookmark, share, view)
- Modal dialogs for detailed descriptions
- Responsive grid layout

### Key Features

1. **Strategy Discovery**
   - Browse trading strategies
   - View key metrics (Min Capital, Avg Return, Status)
   - Filter by tags (Intraday, Medium Risk, Nifty, Options)

2. **Strategy Deployment** (Coming Soon)
   - Forward Test mode (Paper Trading)
   - Live Trading mode
   - Capital requirements display

## Development Workflow

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript type checking
npm run type-check

# Run ESLint for code quality
npm run lint
```

### File Structure

```
src/
├── components/           # Reusable UI components
│   ├── StrategyCard.tsx
│   ├── StrategyModal.tsx
│   └── DeploySection.tsx
├── pages/               # Page-level components
│   ├── DiscoverStrategies.tsx
│   └── StrategyDetails.tsx
├── types/               # TypeScript definitions
│   └── strategy.ts
├── utils/               # Helper functions
│   └── constants.ts
├── assets/              # Styles and static files
│   └── styles.css
└── main.tsx            # Application entry point
```

## Making Your First Changes

### 1. Modify a Component

Open `src/components/StrategyCard.tsx` and make a change:

```typescript
// Before
<div className="strategy-name">{name}</div>

// After
<div className="strategy-name">⚡ {name}</div>
```

Save the file and see the changes instantly in your browser.

### 2. Add a New Strategy

Open `src/pages/DiscoverStrategies.tsx` and add to the `strategies` array:

```typescript
{
  id: '3',
  name: 'Your New Strategy',
  tags: [
    { label: 'Intraday', type: 'intraday' },
  ],
  description: 'Description of your strategy',
  minCapital: '₹25k',
  avgReturn: 'Backtest',
  backtestTooltip: 'Based on 1 month trades',
  status: 'available',
}
```

### 3. Customize Styles

Open `src/assets/styles.css` and modify colors:

```css
/* Change primary color */
.tag.intraday {
  background: #YOUR_COLOR;
  color: #YOUR_TEXT_COLOR;
}
```

## Understanding the Code

### Component Structure

Each component follows this pattern:

```typescript
// 1. Imports
import React from 'react';

// 2. Type definitions
interface ComponentProps {
  // Props here
}

// 3. Component declaration
export const Component: React.FC<ComponentProps> = (props) => {
  // 4. State and logic
  const [state, setState] = useState();

  // 5. Event handlers
  const handleClick = () => { };

  // 6. Return JSX
  return <div>{/* UI here */}</div>;
};
```

### Data Flow

```
Page Component (State)
    ↓ (props)
Child Components (Presentation)
    ↑ (callbacks)
Page Component (State Update)
```

## Common Tasks

### Add a New Page

1. Create file in `src/pages/`:
```typescript
// src/pages/NewPage.tsx
export const NewPage: React.FC = () => {
  return <div>New Page</div>;
};
```

2. Import and use in `main.tsx`

### Create a New Component

1. Create file in `src/components/`:
```typescript
// src/components/NewComponent.tsx
interface NewComponentProps {
  title: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ title }) => {
  return <div>{title}</div>;
};
```

2. Import in your page:
```typescript
import { NewComponent } from '@components/NewComponent';
```

### Add New Types

1. Add to `src/types/strategy.ts`:
```typescript
export interface NewType {
  field: string;
}
```

2. Import where needed:
```typescript
import { NewType } from '@types/strategy';
```

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.ts
server: {
  port: 3001
}
```

### TypeScript Errors

Run type checking:
```bash
npm run type-check
```

Fix errors or use `// @ts-ignore` for temporary workarounds (not recommended).

### CSS Not Loading

1. Check import in `main.tsx`:
```typescript
import './assets/styles.css';
```

2. Clear browser cache (Cmd/Ctrl + Shift + R)

3. Restart dev server

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## IDE Setup

### VS Code (Recommended)

Install these extensions:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features
- ES7+ React/Redux/React-Native snippets

### Settings

Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Next Steps

1. **Read the Documentation**
   - [Architecture](./ARCHITECTURE.md) - Understand the structure
   - [Components](./COMPONENTS.md) - Learn about components
   - [Styling](./STYLING.md) - Master the styling system

2. **Explore the Code**
   - Browse `src/components/` to see component examples
   - Check `src/pages/` for page structure
   - Review `src/types/` for data models

3. **Check the Prototypes**
   - Open files in `prototypes/` folder
   - See design iterations and final mockups
   - Understand the design decisions

4. **Start Building**
   - Add new strategies
   - Create new components
   - Implement new features

## Getting Help

### Resources

- **Project Docs**: Check `/docs` folder
- **Component API**: See [COMPONENTS.md](./COMPONENTS.md)
- **Prototypes**: Browse `/prototypes` folder

### Common Questions

**Q: How do I add routing?**
A: Install `react-router-dom` and set up routes in `main.tsx`

**Q: How do I fetch data from an API?**
A: Use the `fetch` API or libraries like `axios` in page components

**Q: How do I add state management?**
A: Start with React Context API, upgrade to Redux if needed

**Q: How do I add authentication?**
A: Integrate Supabase auth (environment variables already configured)

## Best Practices

1. **Keep Components Small** - Single responsibility principle
2. **Use TypeScript** - Define proper types for everything
3. **Follow the Structure** - Put files in the right directories
4. **Write Clean Code** - Use ESLint and Prettier
5. **Test Changes** - Check in different screen sizes
6. **Commit Often** - Small, focused commits with clear messages

## Development Tips

### Hot Reload

Vite provides instant hot module replacement. Your changes will reflect immediately without full page reload.

### Browser DevTools

- **React DevTools**: Inspect component hierarchy
- **Network Tab**: Monitor API calls (when added)
- **Console**: Check for errors and warnings

### Performance

- Use React DevTools Profiler to identify slow renders
- Avoid unnecessary re-renders with `React.memo`
- Keep bundle size small with code splitting

## Production Build

When ready to deploy:

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Output will be in /dist folder
```

The build is optimized and minified, ready for deployment.

---

Happy coding! 🚀
