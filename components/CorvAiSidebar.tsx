import React from 'react';
import { AIAnalysis } from '../types';
import { Sparkles } from 'lucide-react';

interface CorvAiSidebarProps {
  data: AIAnalysis;
}

const CorvAiSidebar: React.FC<CorvAiSidebarProps> = ({ data }) => {
  return (
    <div className="w-80 h-full bg-slate-900/50 border-l border-slate-800 flex flex-col overflow-hidden">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="w-4 h-4 text-slate-400" />
          <h2 className="text-sm font-bold tracking-wider text-slate-300">CORV AI</h2>
        </div>
        <p className="text-xs text-slate-500">Overview Interpretation</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <p className="text-sm text-slate-300 leading-relaxed">{data.cause}</p>
        </div>

        <div>
          <p className="text-sm text-slate-300 leading-relaxed">{data.subject}</p>
        </div>

        <div>
          <p className="text-sm text-slate-300 leading-relaxed">{data.effect}</p>
        </div>

        <div className="p-3 bg-slate-800/20 border border-slate-800">
            <p className="text-sm text-slate-300 font-medium">{data.metric}</p>
        </div>

        <div>
          <p className="text-sm text-emerald-500/80 leading-relaxed">{data.upside}</p>
        </div>

        <div>
          <p className="text-sm text-slate-300 leading-relaxed">{data.resolution}</p>
        </div>
      </div>
      
      <div className="p-6 border-t border-slate-800 bg-slate-900/80">
        <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors">
          Initiate ERN
        </button>
      </div>
    </div>
  );
};

export default CorvAiSidebar;