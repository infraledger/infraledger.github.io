import { useState } from "react";
import { Users, Briefcase, Mail, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/sonner";

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
  {
    id: 3,
    name: "David Kim",
    company: "Singapore Sovereign Wealth Fund",
    common: 2,
  },
  {
    id: 4,
    name: "Nina Lee",
    company: "CleanLoop Europe",
    common: 4,
  },
  {
    id: 5,
    name: "Carlos Martin",
    company: "Veolia France",
    common: 1,
  },
  {
    id: 6,
    name: "Javier Morales",
    company: "AquaSmart Analytics",
    common: 2,
  },
  {
    id: 7,
    name: "Ayesha Kumar",
    company: "Mumbai Ports Authority",
    common: 4,
  },
  {
    id: 8,
    name: "Samuel Tan",
    company: "Manila Government",
    common: 4,
  },
  {
    id: 9,
    name: "Meena Wolff",
    company: "TU Berlin",
    common: 2,
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
  {
    id: 3,
    name: "CleanLoop Europe",
    sector: "Waste",
    members: 12,
  },
  {
    id: 4,
    name: "BruClean India",
    sector: "Waste",
    members: 9,
  },
  {
    id: 5,
    name: "HydroCore Global",
    sector: "Energy",
    members: 14,
  },
  {
    id: 6,
    name: "AquaSmart Analytics",
    sector: "Water",
    members: 7,
  },
  {
    id: 7,
    name: "Infowave South Asia",
    sector: "Telecom",
    members: 18,
  },
  {
    id: 8,
    name: "GridFlex UK",
    sector: "Energy",
    members: 21,
  }
];

const NetworkingHub = () => {
  const [tab, setTab] = useState<"connections" | "companies">("connections");
  const IS_AUTH = false;

  const handleMsg = (name: string) => {
    if (!IS_AUTH) {
      toast("Sign in required", { description: "Sign in to message professional connections." });
      return;
    }
    toast("Message Sent", { description: `DM sent to ${name} (DEMO)` });
  };
  const handleView = (company: string) => {
    toast("Company Page", { description: `Placeholder company page: ${company}` });
  };

  return (
    <section>
      <div className="flex gap-6 mb-6">
        <button
          className={`font-semibold pb-1 border-b-2 ${tab === "connections"
            ? "border-cyan-400 text-cyan-400"
            : "border-transparent text-slate-300 hover:text-cyan-400"
            }`}
          onClick={() => setTab("connections")}
        >
          Connections
        </button>
        <button
          className={`font-semibold pb-1 border-b-2 ${tab === "companies"
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
            {connections.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-400">
                No connections yet. <span className="block mt-2">Explore experts to grow your network!</span>
              </div>
            ) : (
              connections.map((conn) => (
                <div
                  key={conn.id}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-4 flex gap-4 items-center"
                >
                  <div className="rounded-full h-12 w-12 bg-cyan-900 flex items-center justify-center font-bold text-lg text-cyan-300">
                    <span className="mr-1">{String.fromCodePoint(0x1F464 + (conn.id % 5))}</span>
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
                  <Button
                    variant="outline"
                    className="text-xs px-3 mr-1"
                    disabled={!IS_AUTH}
                    title={IS_AUTH ? "Send message" : "Sign in to message"}
                    onClick={() => handleMsg(conn.name)}
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      {tab === "companies" && (
        <div className="space-y-5">
          <div className="text-slate-400 text-sm mb-3">Company Network &amp; Pages</div>
          <div className="grid md:grid-cols-2 gap-5">
            {companies.length === 0 ? (
              <div className="col-span-full py-12 text-center text-slate-400">
                No companies to display.
              </div>
            ) : (
              companies.map((co) => (
                <div
                  key={co.id}
                  className="rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-4 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full h-10 w-10 bg-cyan-900 flex items-center justify-center font-bold text-sm text-cyan-400">
                      <Link className="h-4 w-4 mr-1" />
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
                  <Button
                    variant="secondary"
                    className="mt-3 text-xs px-4 w-max"
                    onClick={() => handleView(co.name)}
                  >
                    View Page
                  </Button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default NetworkingHub;
