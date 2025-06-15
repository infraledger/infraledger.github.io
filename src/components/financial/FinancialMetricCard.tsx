
import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface FinancialMetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  growth: string;
  positive?: boolean;
}

const FinancialMetricCard: React.FC<FinancialMetricCardProps> = ({
  icon,
  label,
  value,
  growth,
  positive = true,
}) => (
  <Card className="bg-slate-900/80 border-slate-700/50 rounded-xl shadow flex flex-col h-full">
    <CardHeader className="flex-row items-center gap-2 pb-2 pt-4 px-4">
      {icon}
      <span className="text-xs text-slate-400 font-medium">{label}</span>
    </CardHeader>
    <CardContent className="pt-0 pb-3 px-4 flex flex-col justify-end flex-1">
      <div className="text-2xl md:text-3xl font-bold text-slate-100">{value}</div>
      <div className={`mt-1 text-sm font-medium ${positive ? "text-green-400" : "text-red-400"}`}>
        {growth}
      </div>
    </CardContent>
  </Card>
);

export default FinancialMetricCard;
