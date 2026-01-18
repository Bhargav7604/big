# Bigul Algo Trading Platform

A modern, React-based platform for discovering, creating, and managing algorithmic trading strategies.

## Project Structure

```
project/
├── docs/                      # Documentation files
│   └── FONTS.md              # Font setup documentation
├── prototypes/               # HTML mockups and design prototypes
│   ├── discover-strategy-*.html
│   └── strategy-deploy-*.html
├── public/                   # Static assets
│   └── fonts/               # Font files and download scripts
│       ├── poppins.css
│       ├── poppins-*.woff2
│       ├── download-fonts.py
│       └── download-fonts.sh
├── src/                     # Source code
│   ├── assets/             # Stylesheets and static resources
│   │   └── styles.css
│   ├── components/         # Reusable React components
│   │   ├── StrategyCard.tsx
│   │   ├── StrategyModal.tsx
│   │   └── DeploySection.tsx
│   ├── pages/              # Page components
│   │   ├── DiscoverStrategies.tsx
│   │   └── StrategyDetails.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── strategy.ts
│   ├── utils/              # Utility functions and constants
│   │   └── constants.ts
│   └── main.tsx           # Application entry point
├── .env                    # Environment variables
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # NPM dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # This file
```

## Features

### Strategy Discovery
- Browse available trading strategies
- View strategy details, metrics, and performance
- Bookmark favorite strategies
- Filter by tags (Intraday, Medium Risk, Nifty, Options)
- Interactive strategy cards with animations

### Strategy Deployment
- Forward Test mode (Paper Trading/Simulation)
- Live Trading mode with capital requirements
- Visual nudges for risk awareness
- Capital requirement comparisons for expiry/non-expiry days

### Components

#### StrategyCard
Displays strategy information in a card format with:
- Strategy name and actions (bookmark, share)
- Tags and last deployed time
- Description with show more functionality
- Key metrics (Min Capital, Avg Return, Status)
- Gradient buttons and interactive elements

#### StrategyModal
Full-screen modal for displaying complete strategy descriptions.

#### DeploySection
Strategy deployment interface with:
- Mode selection (Forward Test vs Live Trading)
- Contextual nudges based on selected mode
- Capital requirement tables
- Deploy button with gradient styling

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up fonts (optional):
```bash
# Using Python
python3 public/fonts/download-fonts.py

# Or using Bash
bash public/fonts/download-fonts.sh
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Design System

### Colors
- **Primary**: #5266FC (Blue)
- **Gradient**: #5367fc → #4d6ff7 → #00e8b0
- **Success**: #10b981 (Green)
- **Warning**: #f59e0b (Orange)
- **Gray**: #666
- **Dark**: #1a1a1a

### Typography
- **Font Family**: Poppins (400, 500, 600, 700)
- **Base Font Size**: 14px

### Tag Colors
- **Intraday**: Blue (#E8EAFF / #5266FC)
- **Medium**: Yellow (#FEF3C7 / #92400E)
- **Nifty**: Green (#DCFCE7 / #166534)
- **Options**: Purple (#F3E8FF / #7C3AED)

## Component API

### StrategyCard Props
```typescript
interface StrategyCardProps {
  name: string;
  tags: Tag[];
  description: string;
  lastDeployed?: string;
  minCapital: string;
  avgReturn: string;
  backtestTooltip: string;
  status: 'deployed' | 'available';
  isBookmarked?: boolean;
  onBookmark?: () => void;
  onShare?: () => void;
  onView?: () => void;
  onShowMore?: () => void;
}
```

### DeploySection Props
```typescript
interface DeploySectionProps {
  strategyName: string;
  expiryDayCapital?: string;
  nonExpiryDayCapital?: string;
  onDeploy: (mode: DeployMode) => void;
}
```

## Prototypes

HTML mockups are available in the `prototypes/` directory for reference:
- `discover-strategy-final.html` - Final strategy discovery design
- `strategy-deploy-nudges-v3.html` - Latest deployment nudges design

## Environment Variables

Create a `.env` file in the root directory:
```
VITE_API_URL=your_api_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - Bigul

## Contributing

This is a private project. Contact the development team for contribution guidelines.
