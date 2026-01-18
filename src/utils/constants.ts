export const TAG_TYPES = {
  INTRADAY: 'intraday',
  MEDIUM: 'medium',
  NIFTY: 'nifty',
  OPTIONS: 'options',
} as const;

export const STRATEGY_STATUS = {
  DEPLOYED: 'deployed',
  AVAILABLE: 'available',
} as const;

export const DEPLOY_MODES = {
  FORWARD_TEST: 'forward-test',
  LIVE_TRADING: 'live-trading',
} as const;

export const COLORS = {
  PRIMARY: '#5266FC',
  GRADIENT_START: '#5367fc',
  GRADIENT_MID: '#4d6ff7',
  GRADIENT_END: '#00e8b0',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  GRAY: '#666',
  DARK: '#1a1a1a',
} as const;
