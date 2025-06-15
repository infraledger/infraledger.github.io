
import React from "react";
import { Badge } from "@/components/ui/badge";
// Maps status to color variants
const variantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  "Complete": "default",
  "In Progress": "secondary",
  "Launched": "default",
  "Planned": "outline",
};

const colorMap: Record<string, string> = {
  "Complete": "bg-green-500 text-white",
  "In Progress": "bg-blue-500 text-white",
  "Launched": "bg-cyan-500 text-white",
  "Planned": "bg-yellow-500 text-white",
};

const StatusBadge = ({ status }: { status: string }) => (
  <span
    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colorMap[status] || "bg-slate-700 text-white"}`}
  >
    {status}
  </span>
);

export default StatusBadge;
