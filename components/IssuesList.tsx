import React from 'react';
import { Issue } from '../types';
import { SEVERITY_COLORS, ENV_COLORS } from '../constants';

interface IssuesListProps {
  issues: Issue[];
}

const IssuesList: React.FC<IssuesListProps> = ({ issues }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Issues</h3>
      
      {/* Scrollable Container with defined height mask */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-3">
        {issues.map((issue) => (
          <div 
            key={issue.id} 
            className="group relative bg-slate-800/20 hover:bg-slate-800/40 transition-colors p-4 border border-slate-800 hover:border-slate-700 cursor-pointer flex flex-col"
          >
            {/* Top Row: Env Left, Date Right */}
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] px-2 py-0.5 ${ENV_COLORS[issue.environment]}`}>
                {issue.environment}
              </span>
              <span className="text-xs text-slate-500 font-mono">{issue.date}</span>
            </div>
            
            {/* Middle Content */}
            <h4 className="text-sm font-medium text-slate-300 mb-1 truncate pr-4 group-hover:text-slate-100 transition-colors">
              {issue.title}
            </h4>
            <p className="text-xs text-slate-500 line-clamp-2 mb-3">
              {issue.description}
            </p>
            
            {/* Bottom Row: Severity Right */}
            <div className="flex justify-end mt-auto">
              <span className={`text-[10px] font-bold px-2 py-0.5 border uppercase tracking-wider ${SEVERITY_COLORS[issue.severity]}`}>
                {issue.severity}
              </span>
            </div>

            {/* Hover Decorator */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-transparent group-hover:bg-slate-600 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesList;