import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ChartDataPoint } from '../types';

interface RevenueChartProps {
  data: ChartDataPoint[];
}

const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  return (
    <div className="w-full h-full bg-slate-800/20 border border-slate-800 p-4">
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Revenue Trajectory</h3>
        <div className="flex gap-4">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#6b9c8b]"></div>
                <span className="text-xs text-slate-400">Optimal</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#6b7d9c]"></div>
                <span className="text-xs text-slate-400">Current</span>
             </div>
        </div>
      </div>
      
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} vertical={false} />
            <XAxis 
                dataKey="date" 
                stroke="#475569" 
                tick={{fontSize: 10, fill: '#64748b'}} 
                axisLine={false}
                tickLine={false}
                dy={10}
            />
            <YAxis 
                stroke="#475569" 
                tick={{fontSize: 10, fill: '#64748b'}} 
                tickFormatter={(value) => `$${value / 1000}k`}
                axisLine={false}
                tickLine={false}
            />
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    borderColor: '#334155', 
                    borderRadius: '0px', 
                    fontSize: '12px',
                    color: '#e2e8f0'
                }}
                itemStyle={{ paddingBottom: '2px' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                labelStyle={{ color: '#94a3b8', marginBottom: '8px' }}
            />
            <Line
              type="monotone"
              dataKey="optimalRevenue"
              name="Optimal Scenario"
              stroke="#6b9c8b" // Muted Sage Green
              strokeWidth={2}
              dot={false}
              strokeOpacity={0.8}
              activeDot={{ r: 0, fill: '#6b9c8b' }}
            />
            <Line
              type="monotone"
              dataKey="currentRevenue"
              name="Current Scenario"
              stroke="#6b7d9c" // Muted Slate Blue
              strokeWidth={2}
              dot={false}
              strokeOpacity={0.8}
              activeDot={{ r: 0, fill: '#6b7d9c' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;