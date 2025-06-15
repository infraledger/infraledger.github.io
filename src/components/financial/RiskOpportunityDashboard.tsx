
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, Globe, TrendingUp, TrendingDown, CheckCircle } from "lucide-react";

const RiskOpportunityDashboard: React.FC = () => (
  <Card className="bg-slate-900/80 border-slate-700/50 rounded-xl shadow h-full">
    <CardHeader>
      <CardTitle className="text-base text-cyan-300">Risks & Opportunities</CardTitle>
    </CardHeader>
    <CardContent className="pt-1 flex flex-col gap-3 text-sm">
      <div className="flex items-center gap-3">
        <Shield className="text-yellow-300" size={18} />
        <div>
          <span className="font-semibold text-slate-200">Political Risk:</span>{" "}
          <span className="text-slate-400">Low (Western Europe), High (Emerging Asia)</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TrendingDown className="text-red-400" size={18} />
        <div>
          <span className="font-semibold text-slate-200">Currency Risk:</span>{" "}
          <span className="text-slate-400">Elevated in LatAm & EMEA, moderate elsewhere</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <CheckCircle className="text-green-400" size={18} />
        <div>
          <span className="font-semibold text-slate-200">ESG Scores:</span>{" "}
          <span className="text-slate-400">Avg. 7.5/10 (Energy best, Social needs improvement)</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Globe className="text-cyan-300" size={18} />
        <div>
          <span className="font-semibold text-slate-200">Market Opportunities:</span>{" "}
          <span className="text-slate-400">Africa (growth), Eastern Europe (renewables)</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <TrendingUp className="text-green-400" size={18} />
        <div>
          <span className="font-semibold text-slate-200">Regulatory Trends:</span>{" "}
          <span className="text-slate-400">Favorable policy in green bonds & PPPs</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default RiskOpportunityDashboard;
