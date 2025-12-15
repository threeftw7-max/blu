import React from 'react';
import { NAV_ITEMS } from '../constants';

const NavigationSidebar: React.FC = () => {
  return (
    <div className="w-16 h-screen bg-slate-900 border-r border-slate-800 flex flex-col items-center py-6 z-20 shadow-xl">
      {/* Logo Placeholder */}
      <div className="mb-10 w-8 h-8 bg-red-800/80 border border-red-700 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(220,38,38,0.3)]">
         <span className="text-[10px] font-bold text-red-100">C</span>
      </div>

      <div className="flex flex-col space-y-8 w-full">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            className={`group w-full flex justify-center py-2 relative focus:outline-none`}
            title={item.label}
          >
            {/* Active Indicator Line */}
            {index === 0 && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-full bg-red-500/80" />
            )}
            
            <item.icon 
              size={20} 
              className={`transition-colors duration-200 ${
                index === 0 ? 'text-slate-100' : 'text-slate-600 group-hover:text-slate-300'
              }`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationSidebar;