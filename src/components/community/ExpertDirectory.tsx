import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Award, Search, Briefcase, UserPlus, Mail } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const sampleExperts = [
  {
    id: 1,
    name: "Dr. Maria Santos",
    title: "Chief Infrastructure Officer",
    company: "European Investment Bank",
    expertise: ["PPP", "Green Finance", "Infra Policy"],
    verified: true,
  },
  {
    id: 2,
    name: "David Kim",
    title: "Head of Infrastructure",
    company: "Singapore Sovereign Wealth Fund",
    expertise: ["Asset Management", "APAC Markets"],
    verified: true,
  },
  {
    id: 3,
    name: "Prof. Anna Petrov",
    title: "Research Director",
    company: "MIT Technology Review",
    expertise: ["Smart Cities", "Digital Infra", "Innovation"],
    verified: false,
  },
  {
    id: 4,
    name: "Julia Becker",
    title: "Sustainable Waste Consultant",
    company: "CleanLoop Europe",
    expertise: ["Circular Economy", "Urban Waste", "Carbon Markets"],
    verified: true,
  },
  {
    id: 5,
    name: "Lina Becker",
    title: "Waste Management Lead",
    company: "BruClean India",
    expertise: ["Closing the Loop", "ESG Analysis"],
    verified: false,
  },
  {
    id: 6,
    name: "Rahul Singh",
    title: "CTO",
    company: "GreenGrid Developers",
    expertise: ["Smart Grids", "AI Infra", "Resilient Energy"],
    verified: true,
  },
  {
    id: 7,
    name: "Arjun Patel",
    title: "Telecom Network Architect",
    company: "Infowave South Asia",
    expertise: ["5G", "Rural Broadband", "Emerging Markets"],
    verified: false,
  },
  {
    id: 8,
    name: "Emma Thompson",
    title: "Mobility Program Manager",
    company: "London Transport Authority",
    expertise: ["Public Private Partnerships", "Urban Mobility"],
    verified: false,
  },
  {
    id: 9,
    name: "Dr. Sarah Chen",
    title: "Green Hydrogen Advisor",
    company: "HydroCore Global",
    expertise: ["Hydrogen Policy", "Electrolysis", "Project Finance"],
    verified: true,
  },
  {
    id: 10,
    name: "Javier Morales",
    title: "Digital Water Specialist",
    company: "AquaSmart Analytics",
    expertise: ["Water Digital Twins", "GIS Integration"],
    verified: false,
  },
  {
    id: 11,
    name: "Ayesha Kumar",
    title: "Port Engineer",
    company: "Mumbai Ports Authority",
    expertise: ["Harbor Design", "Coastal Infra"],
    verified: false,
  },
  {
    id: 12,
    name: "Samuel Tan",
    title: "Disaster Response Director",
    company: "Manila Government",
    expertise: ["Crisis Planning", "Telecom Resilience"],
    verified: true,
  },
  {
    id: 13,
    name: "Meena Wolff",
    title: "Climate Policy Researcher",
    company: "TU Berlin",
    expertise: ["Climate Finance", "Decarbonization"],
    verified: false,
  },
];

const ExpertDirectory = () => {
  const [search, setSearch] = useState("");
  // Simulate logged-in state for demo
  const IS_AUTH = false;

  const filtered = search
    ? sampleExperts.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search.toLowerCase()) ||
          ex.company.toLowerCase().includes(search.toLowerCase()) ||
          ex.expertise.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      )
    : sampleExperts;

  const handleConnect = (name: string) => {
    if (!IS_AUTH) {
      toast("Sign in required", { description: "Please log in to send a connection request." });
      return;
    }
    toast("Request sent", { description: `Connection requested from ${name} (demo)` });
  };
  const handleAsk = (name: string) => {
    if (!IS_AUTH) {
      toast("Sign in required", { description: "Please log in to ask questions." });
      return;
    }
    toast("Q&A started", { description: `Started a thread with ${name} (demo)` });
  };
  const handleBook = (name: string) => {
    if (!IS_AUTH) {
      toast("Sign in required", { description: "Please log in to book a consult." });
      return;
    }
    toast("Booked (DEMO)", { description: `Consult booking (placeholder) with ${name}` });
  };

  return (
    <section>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <Input
            placeholder="Search experts, companies, skills…"
            className="pl-10 bg-slate-800/60 border-slate-700 text-slate-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.length === 0 ? (
          <div className="col-span-full py-12 text-center text-slate-400">
            <div className="mb-2 text-xl">No experts found</div>
            <Button
              size="sm"
              className="bg-cyan-700 text-white"
              onClick={() => setSearch("")}
            >
              Reset Search
            </Button>
          </div>
        ) : (
          filtered.map((expert) => (
            <div
              key={expert.id}
              className={`rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-5 hover:bg-slate-800/70 transition-all`}
            >
              <div className="flex gap-4 items-center mb-2">
                <div className="rounded-full h-12 w-12 bg-cyan-900 flex items-center justify-center font-bold text-lg text-cyan-300">
                  {/* Placeholder initials + user emoji for vibrancy */}
                  <span className="mr-1">{String.fromCodePoint(0x1F464 + (expert.id % 5))}</span>
                  {expert.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{expert.name}</span>
                    {expert.verified && (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <span className="text-slate-400 text-xs">{expert.title}</span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Briefcase className="h-3 w-3" /> {expert.company}
                  </span>
                </div>
              </div>
              <div className="pt-2 mb-3">
                <span className="text-xs text-slate-500 mb-1">Expertise:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {expert.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-2 flex gap-2">
                <Button
                  variant="outline"
                  className="text-xs px-3 border-slate-700"
                  disabled={!IS_AUTH}
                  onClick={() => handleAsk(expert.name)}
                  title={IS_AUTH ? "Ask a question" : "Sign in to ask"}
                >
                  Ask
                </Button>
                <Button
                  variant="secondary"
                  className="text-xs px-3"
                  disabled={!IS_AUTH}
                  onClick={() => handleConnect(expert.name)}
                  title={IS_AUTH ? "Connect" : "Sign in to connect"}
                >
                  <UserPlus className="h-3 w-3 mr-1" />
                  Connect
                </Button>
                {expert.verified && (
                  <Button
                    className="text-xs px-3 bg-gradient-to-r from-cyan-700 to-blue-700 text-white"
                    disabled={!IS_AUTH}
                    onClick={() => handleBook(expert.name)}
                    title={IS_AUTH ? "Book consult" : "Sign in to book"}
                  >
                    Book Consult
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 text-sm text-cyan-400">
        Tip: Click "Ask" for expert Q&A. "Book Consult" is demo-only; sign in to unlock actions.
      </div>
    </section>
  );
};
export default ExpertDirectory;
