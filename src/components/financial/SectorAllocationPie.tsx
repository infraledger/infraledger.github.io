
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { name: "Energy", value: 28 },
  { name: "Transport", value: 24 },
  { name: "Digital", value: 18 },
  { name: "Water", value: 14 },
  { name: "Social", value: 16 }
];

const COLORS = ["#06b6d4", "#818cf8", "#f472b6", "#22d3ee", "#fbbf24"];

const SectorAllocationPie: React.FC = () => (
  <Card className="bg-slate-900/80 border-slate-700/50 rounded-xl shadow h-full">
    <CardHeader>
      <CardTitle className="text-base text-cyan-300">Sector Allocation (%)</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={32} outerRadius={60} fill="#8884d8" label>
              {data.map((entry, idx) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default SectorAllocationPie;
