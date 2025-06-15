
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Award, Search, Briefcase } from "lucide-react";

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
];

const ExpertDirectory = () => {
  const [search, setSearch] = useState("");

  const filtered = search
    ? sampleExperts.filter(
        (ex) =>
          ex.name.toLowerCase().includes(search.toLowerCase()) ||
          ex.company.toLowerCase().includes(search.toLowerCase()) ||
          ex.expertise.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      )
    : sampleExperts;

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
        {filtered.map((expert) => (
          <div
            key={expert.id}
            className={`rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-5 hover:bg-slate-800/70 transition-all`}
          >
            <div className="flex gap-4 items-center mb-2">
              <div className="rounded-full h-12 w-12 bg-cyan-900 flex items-center justify-center font-bold text-lg text-cyan-300">
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
              <Button variant="outline" className="text-xs px-3 border-slate-700">
                Ask
              </Button>
              <Button variant="secondary" className="text-xs px-3">
                Connect
              </Button>
              {expert.verified && (
                <Button className="text-xs px-3 bg-gradient-to-r from-cyan-700 to-blue-700 text-white">
                  Book Consult
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-sm text-cyan-400">
        Tip: Click "Ask" to start an expert Q&amp;A thread. "Book Consult" is for private sessions.
      </div>
    </section>
  );
};
export default ExpertDirectory;
