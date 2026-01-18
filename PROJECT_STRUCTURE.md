# Project Structure Overview

This document provides a visual overview of the complete project structure.

```
bigul-algo-trading/
│
├── 📁 docs/                          # Documentation
│   ├── ARCHITECTURE.md               # Architecture and design patterns
│   ├── COMPONENTS.md                 # Component API documentation
│   ├── FONTS.md                      # Font setup instructions
│   ├── GETTING_STARTED.md            # Quick start guide
│   └── STYLING.md                    # Styling guide and design system
│
├── 📁 prototypes/                    # HTML mockups and design iterations
│   ├── README.md                     # Prototypes documentation
│   ├── discover-strategy-enhanced.html
│   ├── discover-strategy-enhanced-v2.html
│   ├── discover-strategy-enhanced-v3.html
│   ├── discover-strategy-final.html  # ✅ Final approved design
│   ├── discover-strategy-backtest-options.html
│   ├── discover-strategy-min-capital-options.html
│   ├── strategy-deploy-nudges.html
│   ├── strategy-deploy-nudges-v2.html
│   └── strategy-deploy-nudges-v3.html # ✅ Final approved design
│
├── 📁 public/                        # Public static assets
│   └── 📁 fonts/                     # Font files
│       ├── poppins.css               # Font face declarations
│       ├── poppins-regular.woff2     # Font file (Regular)
│       ├── poppins-medium.woff2      # Font file (Medium)
│       ├── poppins-semibold.woff2    # Font file (SemiBold)
│       ├── poppins-bold.woff2        # Font file (Bold)
│       ├── download-fonts.py         # Python script to download fonts
│       └── download-fonts.sh         # Bash script to download fonts
│
├── 📁 src/                           # Source code
│   ├── 📁 assets/                    # Styles and static resources
│   │   ├── styles.css                # Main stylesheet (current)
│   │   └── index.css                 # Tailwind CSS setup (alternative)
│   │
│   ├── 📁 components/                # Reusable React components
│   │   ├── StrategyCard.tsx          # Strategy card component
│   │   ├── StrategyModal.tsx         # Modal for full descriptions
│   │   └── DeploySection.tsx         # Strategy deployment UI
│   │
│   ├── 📁 pages/                     # Page-level components
│   │   ├── DiscoverStrategies.tsx    # Strategy discovery page
│   │   └── StrategyDetails.tsx       # Strategy details page
│   │
│   ├── 📁 types/                     # TypeScript type definitions
│   │   └── strategy.ts               # Strategy-related types
│   │
│   ├── 📁 utils/                     # Utility functions
│   │   └── constants.ts              # App-wide constants
│   │
│   └── main.tsx                      # Application entry point
│
├── 📄 .env                           # Environment variables
├── 📄 .eslintrc.cjs                  # ESLint configuration
├── 📄 .gitignore                     # Git ignore rules
├── 📄 index.html                     # HTML entry point
├── 📄 package.json                   # NPM dependencies and scripts
├── 📄 README.md                      # Main project README
├── 📄 PROJECT_STRUCTURE.md           # This file
├── 📄 tsconfig.json                  # TypeScript configuration
├── 📄 tsconfig.node.json             # TypeScript config for Node
└── 📄 vite.config.ts                 # Vite build configuration
```

## Directory Purposes

### `/docs`
Complete documentation for the project including architecture, components, styling, and getting started guides.

### `/prototypes`
HTML mockups showing design iterations. These are reference files used during development to finalize the UI/UX.

### `/public`
Static assets served directly without processing. Currently contains font files.

### `/src`
Main application source code written in TypeScript and React.

## Key Files

| File | Purpose |
|------|---------|
| `src/main.tsx` | Application entry point, renders root component |
| `src/assets/styles.css` | Main stylesheet with all component styles |
| `package.json` | Dependencies, scripts, and project metadata |
| `vite.config.ts` | Build tool configuration and path aliases |
| `tsconfig.json` | TypeScript compiler options |
| `.env` | Environment variables (API keys, etc.) |

## Component Hierarchy

```
App (main.tsx)
└── DiscoverStrategies (Page)
    ├── StrategyCard (Component) ×N
    └── StrategyModal (Component)

StrategyDetails (Page)
└── DeploySection (Component)
```

## Development Flow

```
1. Edit files in /src
2. Vite detects changes (HMR)
3. Browser updates automatically
4. TypeScript type checks
5. ESLint validates code
```

## Build Output

```
npm run build

dist/
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── poppins-[hash].woff2
├── fonts/
│   └── ...
└── index.html
```

## Import Aliases

| Alias | Resolves To |
|-------|-------------|
| `@/` | `src/` |
| `@components/` | `src/components/` |
| `@pages/` | `src/pages/` |
| `@types/` | `src/types/` |
| `@utils/` | `src/utils/` |
| `@assets/` | `src/assets/` |

Example:
```typescript
// Instead of
import { StrategyCard } from '../../components/StrategyCard';

// Use
import { StrategyCard } from '@components/StrategyCard';
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `StrategyCard.tsx`)
- **Pages**: PascalCase (e.g., `DiscoverStrategies.tsx`)
- **Types**: camelCase (e.g., `strategy.ts`)
- **Utils**: camelCase (e.g., `constants.ts`)
- **Styles**: kebab-case (e.g., `styles.css`)
- **Config**: kebab-case (e.g., `vite.config.ts`)

## Code Organization Principles

### 1. Separation of Concerns
- **Components**: Pure presentation
- **Pages**: State management and composition
- **Types**: Data structures
- **Utils**: Helper functions

### 2. Single Responsibility
Each file has one clear purpose and does it well.

### 3. Reusability
Components are designed to be reused across different pages.

### 4. Type Safety
Everything is typed with TypeScript for better developer experience.

### 5. Maintainability
Clear structure makes it easy to find and modify code.

## Next Steps

1. **Start Development**: `npm run dev`
2. **Read Docs**: Check `/docs` folder
3. **Review Prototypes**: Open `/prototypes` files
4. **Write Code**: Add components in `/src`
5. **Build**: `npm run build` when ready

## Quick Reference

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

---

**Last Updated**: January 2025
