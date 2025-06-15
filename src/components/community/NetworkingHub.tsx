
import { useState } from "react";
import { Users, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const connections = [
  {
    id: 1,
    name: "Rahul Singh",
    company: "GreenGrid Developers",
    common: 3,
  },
  {
    id: 2,
    name: "Julia Becker",
    company: "TransInfra Group",
    common: 5,
  },
];

const companies = [
  {
    id: 1,
    name: "GreenGrid Developers",
    sector: "Energy",
    members: 24,
  },
  {
    id: 2,
    name: "TransInfra Group",
    sector: "Transport",
    members: 37,
  },
];

// Once more features are needed, split below into subcomponents

const NetworkingHub = () => {
  const [tab, setTab] = useState<"connections" | "companies">("connections");

  return (
    <section>
      <div className="flex gap-6 mb-6">
        <button
          className={`font-semibold pb-1 border-b-2 ${
            tab === "connections"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent text-slate-300 hover:text-cyan-400"
          }`}
          onClick={() => setTab("connections")}
        >
          Connections
        </button>
        <button
          className={`font-semibold pb-1 border-b-2 ${
            tab === "companies"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent text-slate-300 hover:text-cyan-400"
          }`}
          onClick={() => setTab("companies")}
        >
          Companies
        </button>
      </div>
      {tab === "connections" && (
        <div className="space-y-5">
          <div className="text-slate-400 text-sm mb-3">Your Professional Connections</div>
          <div className="grid md:grid-cols-2 gap-5">
            {connections.map((conn) => (
              <div
                key={conn.id}
                className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-4 flex gap-4 items-center"
              >
                <div className="rounded-full h-12 w-12 bg-cyan-900 flex items-center justify-center font-bold text-lg text-cyan-300">
                  {conn.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">{conn.name}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {conn.company}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {conn.common} shared connections
                  </div>
                </div>
                <Button variant="outline" className="text-xs px-3 mr-1">
                  <Mail className="h-4 w-4 mr-1" />
                  Message
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      {tab === "companies" && (
        <div className="space-y-5">
          <div className="text-slate-400 text-sm mb-3">Company Network &amp; Pages</div>
          <div className="grid md:grid-cols-2 gap-5">
            {companies.map((co) => (
              <div
                key={co.id}
                className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-4 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="rounded-full h-10 w-10 bg-cyan-900 flex items-center justify-center font-bold text-sm text-cyan-400">
                    {co.name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">{co.name}</div>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">
                      {co.sector}
                    </Badge>
                  </div>
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  {co.members} team members
                </div>
                <Button variant="secondary" className="mt-3 text-xs px-4 w-max">
                  View Page
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
export default NetworkingHub;
