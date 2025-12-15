export enum Severity {
  CRITICAL = 'Critical',
  HIGH = 'High',
  MEDIUM = 'Medium',
  LOW = 'Low'
}

export enum Environment {
  PRODUCTION = 'Production',
  LOGISTICS = 'Logistics',
  QUALITY = 'Quality',
  PROCUREMENT = 'Procurement'
}

export interface Issue {
  id: string;
  title: string;
  description: string;
  date: string;
  severity: Severity;
  environment: Environment;
}

export interface Scenario {
  id: string;
  title: string;
  environment: Environment;
  cost: number;
  workOrderCount: number;
  executionTime: string;
  marginalIncrease: number; // Percentage
}

export interface ChartDataPoint {
  date: string;
  currentRevenue: number;
  optimalRevenue: number;
}

export interface AIAnalysis {
  cause: string;
  subject: string;
  effect: string;
  metric: string;
  upside: string;
  resolution: string;
}