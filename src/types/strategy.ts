export interface Tag {
  label: string;
  type: 'intraday' | 'medium' | 'nifty' | 'options';
}

export interface Strategy {
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

export type DeployMode = 'forward-test' | 'live-trading';

export interface DeployConfig {
  mode: DeployMode;
  strategyId: string;
  capital?: number;
}
