
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const data = [
  { quarter: "Q1'21", value: 470 },
  { quarter: "Q2'21", value: 490 },
  { quarter: "Q3'21", value: 520 },
  { quarter: "Q4'21", value: 560 },
  { quarter: "Q1'22", value: 590 },
  { quarter: "Q2'22", value: 610 },
  { quarter: "Q3'22", value: 680 },
  { quarter: "Q4'22", value: 670 },
  { quarter: "Q1'23", value: 720 },
  { quarter: "Q2'23", value: 805 },
  { quarter: "Q3'23", value: 880 },
  { quarter: "Q4'23", value: 900 },
  { quarter: "Q1'24", value: 1040 }
];

const FinancialTrendsChart: React.FC = () => (
  <Card className="bg-slate-900/80 border-slate-700/50 rounded-xl shadow h-full">
    <CardHeader>
      <CardTitle className="text-base text-cyan-300">Investment Flow Timeline</CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" strokeDasharray="5 3" />
            <XAxis dataKey="quarter" tick={{fill:"#64748b"}} />
            <YAxis tick={{fill:"#64748b"}} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4, fill: "#22d3ee" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  </Card>
);

export default FinancialTrendsChart;
