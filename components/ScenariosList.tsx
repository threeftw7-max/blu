import React from 'react';
import { Scenario } from '../types';
import { ENV_COLORS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

interface ScenariosListProps {
  scenarios: Scenario[];
}

const ScenariosList: React.FC<ScenariosListProps> = ({ scenarios }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Scenarios</h3>
      
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {scenarios.map((scenario) => (
          <div 
            key={scenario.id} 
            className="group bg-slate-800/20 hover:bg-slate-800/40 transition-colors p-4 border border-slate-800 hover:border-slate-700 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] px-2 py-0.5 ${ENV_COLORS[scenario.environment]}`}>
                    {scenario.environment}
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-slate-400" />
            </div>

            <h4 className="text-sm font-medium text-slate-300 mb-3 truncate group-hover:text-slate-100 transition-colors">{scenario.title}</h4>

            <div className="grid grid-cols-4 gap-2 py-2 border-t border-slate-700/50">
                <div>
                    <p className="text-[9px] text-slate-500 uppercase">Cost</p>
                    <p className="text-xs text-slate-300 font-mono">${scenario.cost.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-[9px] text-slate-500 uppercase">W.O. Count</p>
                    <p className="text-xs text-slate-300 font-mono">{scenario.workOrderCount}</p>
                </div>
                <div>
                    <p className="text-[9px] text-slate-500 uppercase">Est. Time</p>
                    <p className="text-xs text-slate-300 font-mono">{scenario.executionTime}</p>
                </div>
                <div>
                    <p className="text-[9px] text-slate-500 uppercase">Increase</p>
                    <p className="text-xs text-emerald-500/80 font-mono">+{scenario.marginalIncrease}%</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenariosList;