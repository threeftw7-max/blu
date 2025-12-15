import React from 'react';
import NavigationSidebar from './components/NavigationSidebar';
import CorvAiSidebar from './components/CorvAiSidebar';
import RevenueChart from './components/RevenueChart';
import IssuesList from './components/IssuesList';
import ScenariosList from './components/ScenariosList';
import { CHART_DATA, ISSUES_DATA, SCENARIOS_DATA, AI_ANALYSIS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#0b1121] overflow-hidden font-sans text-slate-400 selection:bg-indigo-500/30">
      
      {/* Left Permanent Sidebar */}
      <NavigationSidebar />

      {/* Main Center Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Title Bar */}
        <header className="flex-none h-16 flex items-center px-8 border-b border-slate-800/50 bg-[#0b1121]/50 backdrop-blur-sm z-10">
          <div className="flex items-baseline gap-3">
            <h1 className="text-2xl font-bold text-slate-300 tracking-tight">CORV</h1>
            <span className="text-sm font-medium text-slate-600">Overview</span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
          <div className="max-w-6xl mx-auto h-full flex flex-col gap-6">
            
            {/* Top Section: Line Graph */}
            <div className="flex-none h-[320px]">
              <RevenueChart data={CHART_DATA} />
            </div>

            {/* Bottom Section: Modules Grid */}
            {/* Using flex-1 to make them take remaining space, or a fixed height if scrolling is strictly internal */}
            <div className="flex-1 min-h-[300px] grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
              <IssuesList issues={ISSUES_DATA} />
              <ScenariosList scenarios={SCENARIOS_DATA} />
            </div>

          </div>
        </div>
      </div>

      {/* Right Sidebar: CORV AI */}
      <div className="flex-none z-10 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.5)]">
        <CorvAiSidebar data={AI_ANALYSIS_DATA} />
      </div>

    </div>
  );
};

export default App;