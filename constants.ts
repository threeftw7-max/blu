import { ChartDataPoint, Issue, Scenario, Severity, Environment, AIAnalysis } from './types';
import { LayoutDashboard, AlertCircle, FileText, Layers, Users } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', icon: LayoutDashboard, label: 'Home' },
  { id: 'issues', icon: AlertCircle, label: 'Issues' },
  { id: 'dispositions', icon: Layers, label: 'Dispositions' },
  { id: 'scenarios', icon: FileText, label: 'Scenarios' },
  { id: 'employee', icon: Users, label: 'Employee' },
];

export const CHART_DATA: ChartDataPoint[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (30 - i));
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  
  // Create a slight upward trend for optimal, flat or dips for current
  const baseVal = 400000;
  const variance = Math.random() * 20000;
  
  return {
    date: dateStr,
    currentRevenue: baseVal + (i * 500) + variance,
    optimalRevenue: baseVal + (i * 1200) + variance + 15000,
  };
});

export const ISSUES_DATA: Issue[] = [
  { 
    id: '1', 
    title: 'Hydraulic Press Valve Leak', 
    description: 'Main seal failure on Press #4 causing pressure drops.',
    date: '2023-10-24', 
    severity: Severity.CRITICAL, 
    environment: Environment.PRODUCTION 
  },
  { 
    id: '2', 
    title: 'Supply Chain Delay: Steel', 
    description: 'Raw steel shipment delayed by 48h due to logistics strike.',
    date: '2023-10-22', 
    severity: Severity.HIGH, 
    environment: Environment.LOGISTICS 
  },
  { 
    id: '3', 
    title: 'Quality Check Fail: Batch 404', 
    description: 'Micro-fractures detected in 15% of output samples.',
    date: '2023-10-20', 
    severity: Severity.MEDIUM, 
    environment: Environment.QUALITY 
  },
  { 
    id: '4', 
    title: 'Conveyor Belt Motor Overheat', 
    description: 'Motor B2 exceeding thermal threshold during peak load.',
    date: '2023-10-18', 
    severity: Severity.HIGH, 
    environment: Environment.PRODUCTION 
  },
  { 
    id: '5', 
    title: 'Inventory Mismatch: Resin', 
    description: 'System count exceeds physical stock by 200 units.',
    date: '2023-10-15', 
    severity: Severity.LOW, 
    environment: Environment.PROCUREMENT 
  },
  { 
    id: '6', 
    title: 'Sensor Calibration Drift', 
    description: 'Temp sensors on Line A reading 2°C variance.',
    date: '2023-10-12', 
    severity: Severity.MEDIUM, 
    environment: Environment.PRODUCTION 
  },
];

export const SCENARIOS_DATA: Scenario[] = [
  { 
    id: '1', 
    title: 'Vendor Consolidation Plan', 
    environment: Environment.PROCUREMENT, 
    cost: 12000, 
    workOrderCount: 5, 
    executionTime: '3 Weeks',
    marginalIncrease: 4.5 
  },
  { 
    id: '2', 
    title: 'Automated QC Integration', 
    environment: Environment.QUALITY, 
    cost: 45000, 
    workOrderCount: 12, 
    executionTime: '2 Months',
    marginalIncrease: 12.2 
  },
  { 
    id: '3', 
    title: 'Logistics Route Opt.', 
    environment: Environment.LOGISTICS, 
    cost: 5000, 
    workOrderCount: 2, 
    executionTime: '5 Days',
    marginalIncrease: 3.1 
  },
  { 
    id: '4', 
    title: 'Preventative Maint. Schedule', 
    environment: Environment.PRODUCTION, 
    cost: 8500, 
    workOrderCount: 8, 
    executionTime: '1 Week',
    marginalIncrease: 5.8 
  },
  { 
    id: '5', 
    title: 'Energy Reduction Initiative', 
    environment: Environment.PRODUCTION, 
    cost: 15000, 
    workOrderCount: 6, 
    executionTime: '1 Month',
    marginalIncrease: 2.4 
  },
];

export const AI_ANALYSIS_DATA: AIAnalysis = {
  cause: "Unexpected downtime in hydraulic assembly lines due to valve seal fatigue.",
  subject: "Production Line A & B",
  effect: "Reduced daily output by 14% and delayed shipment for Logistics Order #992.",
  metric: "OEE (Overall Equipment Effectiveness) dropped from 82% to 68%.",
  upside: "Restoring optimal pressure integrity could recover $24k/day in lost throughput.",
  resolution: "Initiate emergency maintenance workflow (Ticket #4421) and expedite seal replacement from reserve inventory."
};

export const SEVERITY_COLORS = {
  [Severity.CRITICAL]: 'text-red-300 bg-red-900/30 border-red-900/40',
  [Severity.HIGH]: 'text-orange-300 bg-orange-900/30 border-orange-900/40',
  [Severity.MEDIUM]: 'text-amber-300 bg-amber-900/30 border-amber-900/40',
  [Severity.LOW]: 'text-blue-300 bg-blue-900/30 border-blue-900/40',
};

export const ENV_COLORS = {
  [Environment.PRODUCTION]: 'bg-slate-800 text-purple-300 border border-slate-700',
  [Environment.LOGISTICS]: 'bg-slate-800 text-indigo-300 border border-slate-700',
  [Environment.QUALITY]: 'bg-slate-800 text-emerald-300 border border-slate-700',
  [Environment.PROCUREMENT]: 'bg-slate-800 text-cyan-300 border border-slate-700',
};