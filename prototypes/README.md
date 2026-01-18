# Prototypes

This directory contains HTML mockups and design prototypes created during the development process.

## File Overview

### Strategy Discovery Prototypes

1. **discover-strategy-enhanced.html**
   - Initial enhanced design iteration
   - Basic card layout with tags and stats

2. **discover-strategy-enhanced-v2.html**
   - Second iteration
   - Improved tag layout and descriptions

3. **discover-strategy-enhanced-v3.html**
   - Third iteration
   - Added last deployed badges
   - Refined tag positioning

4. **discover-strategy-final.html**
   - Final design approved for implementation
   - Features:
     - Strategy cards with bookmark/share actions
     - Dynamic tag display (max 2 with last deployed, all tags without)
     - Show more button for long descriptions
     - Backtest asterisk with hover tooltip
     - Gradient view button
     - Modal for full descriptions
     - Responsive grid layout

5. **discover-strategy-backtest-options.html**
   - Exploration of backtest display variations
   - Alternative layouts for backtest information

6. **discover-strategy-min-capital-options.html**
   - Exploration of minimum capital display options
   - Different ways to show capital requirements

### Strategy Deployment Prototypes

1. **strategy-deploy-nudges.html**
   - Initial nudges design
   - Forward test and live trading mode nudges

2. **strategy-deploy-nudges-v2.html**
   - Second iteration
   - Improved nudge styling and messaging
   - Added capital comparison tables

3. **strategy-deploy-nudges-v3.html**
   - Final design approved for implementation
   - Features:
     - Forward Test / Live Trading mode selection
     - Contextual nudges based on selected mode
     - Capital requirements table for live trading
     - Alternative capital display options (table, cards, inline)
     - Updated terminology: "Forward Test" header, "Simulation Trade" description

## Key Design Decisions

### Color Scheme
- Primary: #5266FC (Blue)
- Gradient: #5367fc → #4d6ff7 → #00e8b0
- Success: #10b981 (Green)
- Warning: #f59e0b (Orange)

### Typography
- Font Family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- System fonts for better performance in prototypes
- Production uses Poppins font

### Layout Principles
1. **Fixed Heights**: Description sections have fixed heights to maintain grid alignment
2. **Responsive Grid**: Auto-fill with min 320px columns
3. **Visual Hierarchy**: Clear separation between sections using borders and spacing
4. **Progressive Disclosure**: Show more button for long content

### Interactive Elements
- Hover states on all clickable elements
- Smooth transitions (0.2s)
- Gradient buttons for primary actions
- Icon buttons for secondary actions

## Usage

These HTML files can be opened directly in a browser for design review and testing. They are standalone files with inline CSS and JavaScript.

### Opening a Prototype
```bash
# Open in default browser
open discover-strategy-final.html

# Or use a local server
python3 -m http.server 8000
# Then navigate to http://localhost:8000/prototypes/discover-strategy-final.html
```

## Implementation Status

| Prototype | Status | Implementation |
|-----------|--------|----------------|
| discover-strategy-final.html | ✅ Implemented | StrategyCard component |
| strategy-deploy-nudges-v3.html | ✅ Implemented | DeploySection component |
| Other variations | 📁 Archived | Reference only |

## Notes

- These prototypes use emoji icons (🔖, 📤, ℹ️, ⚠️) for quick mockups
- Production code should use proper icon libraries or SVG icons
- Some prototypes show multiple variations on the same page for comparison
- Always refer to the final/v3 versions for implementation guidance

## Design Review Process

1. Create initial HTML mockup
2. Iterate based on feedback (v2, v3, etc.)
3. Mark final version
4. Extract components and styles for React implementation
5. Archive previous iterations for reference

## Related Documentation

- Component implementation: `/src/components/`
- Styling: `/src/assets/styles.css`
- Type definitions: `/src/types/strategy.ts`
