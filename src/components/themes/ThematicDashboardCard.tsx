
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import type { LucideIcon } from "lucide-react";

interface ThematicDashboardCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  metrics: { label: string; value: string }[];
  chartData: { name: string; value: number }[];
  colorClass: string;
  timeline: string;
  status: string;
}

const ThematicDashboardCard: React.FC<ThematicDashboardCardProps> = ({
  icon,
  title,
  description,
  image,
  metrics,
  chartData,
  colorClass,
  timeline,
  status,
}) => (
  <Card className="flex flex-col h-full rounded-xl bg-slate-900/90 border-slate-700/50 shadow-lg">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-t-xl"
        loading="lazy"
      />
      <div className="absolute top-3 left-3">
        <Badge className={colorClass + " px-2 py-1 text-xs"} variant="secondary">
          {icon}
        </Badge>
      </div>
      <div className="absolute top-3 right-3">
        <Badge className="bg-yellow-300/10 text-yellow-200 border-yellow-200">{status}</Badge>
      </div>
    </div>
    <CardHeader className="flex-row items-center gap-3 pb-2 pt-4 px-4">
      <CardTitle className="text-lg font-bold text-cyan-300">{title}</CardTitle>
    </CardHeader>
    <CardDescription className="px-4 pb-2 text-slate-400">{description}</CardDescription>
    <CardContent className="flex flex-col gap-2 pt-0 px-4 flex-1">
      <div className="grid grid-cols-2 gap-1 mb-1">
        {metrics.map((m) => (
          <div key={m.label} className="text-sm text-slate-300">
            <span className="block font-semibold">{m.value}</span>
            <span className="text-xs text-slate-400">{m.label}</span>
          </div>
        ))}
      </div>
      <div className="w-full h-20">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Bar dataKey="value" fill="#22d3ee" radius={[6, 6, 0, 0]} />
            <XAxis dataKey="name" hide />
            <YAxis hide />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </CardContent>
    <CardFooter className="flex items-center justify-between pt-0 px-4 pb-4">
      <span className="text-xs text-slate-400">{timeline}</span>
      <Button variant="secondary" size="sm" className="text-cyan-400 border-cyan-500/30">
        Explore Preview
      </Button>
    </CardFooter>
  </Card>
);

export default ThematicDashboardCard;
