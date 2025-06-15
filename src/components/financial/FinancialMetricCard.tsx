
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface FinancialMetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  growth: string;
  positive?: boolean;
  delay?: number; // animation delay in ms
}

const FinancialMetricCard: React.FC<FinancialMetricCardProps> = ({
  icon,
  label,
  value,
  growth,
  positive = true,
  delay = 0,
}) => (
  <Card
    className={`
      bg-slate-900/80 border-slate-700/50 rounded-xl shadow flex flex-col h-full group
      transition-transform transition-shadow duration-300
      hover:scale-105 hover:shadow-xl
      hover:ring-2 hover:ring-cyan-400/40
      animate-fade-in
    `}
    style={{
      animationDelay: `${delay}ms`,
      animationDuration: "700ms"
    }}
  >
    <CardHeader className="flex-row items-center gap-2 pb-2 pt-4 px-4">
      <span className="rounded-xl bg-cyan-950/60 p-2 flex items-center justify-center">
        {icon}
      </span>
      <span className="text-xs text-slate-400 font-medium">{label}</span>
    </CardHeader>
    <CardContent className="pt-0 pb-3 px-4 flex flex-col justify-end flex-1">
      <div className="text-2xl md:text-3xl font-bold text-slate-100">{value}</div>
      <div className={`mt-1 text-sm font-semibold flex items-center ${positive ? "text-green-400" : "text-red-400"}`}>
        <span
          className={`inline-block mr-1 rounded-full w-2 h-2 ${positive ? "bg-green-400" : "bg-red-400"}`}
        />
        {growth}
      </div>
    </CardContent>
  </Card>
);

export default FinancialMetricCard;
