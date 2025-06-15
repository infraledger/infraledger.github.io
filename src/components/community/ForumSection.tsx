
import ThreadedDiscussion from "./ThreadedDiscussion";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { MessageCircle, TrendingUp, Filter, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  "Energy",
  "Transport",
  "Water",
  "Telecom",
  "Social Infra",
  "Waste",
  "Other",
];

const exampleDiscussions = [
  // top-level only for demo; ThreadedDiscussion would manage hierarchy
  {
    id: 1,
    title: "Scaling Green Hydrogen Infrastructure: Lessons Learned",
    sector: "Energy",
    author: "Dr. Sarah Chen",
    verified: true,
    upvotes: 143,
    replies: 29,
    lastActivity: "2h ago",
    trending: true,
  },
  {
    id: 2,
    title: "Smart Mobility: Best Practices in Urban Transport",
    sector: "Transport",
    author: "Emma Thompson",
    verified: false,
    upvotes: 88,
    replies: 19,
    lastActivity: "4h ago",
    trending: false,
  },
];

const ForumSection = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // Only show filtered and/or searched results for demo
  const filtered =
    category && category !== "All"
      ? exampleDiscussions.filter((d) => d.sector === category)
      : exampleDiscussions;
  const searched = search
    ? filtered.filter((d) =>
        d.title.toLowerCase().includes(search.toLowerCase())
      )
    : filtered;

  return (
    <div>
      {/* Category + search/filter */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <div className="flex gap-1">
          <Button
            size="sm"
            variant={category ? "outline" : "default"}
            className={`text-xs px-3 ${!category ? "bg-cyan-600 text-white" : ""}`}
            onClick={() => setCategory(null)}
          >
            All
          </Button>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={cat === category ? "default" : "outline"}
              className={`text-xs px-3 ${
                cat === category ? "bg-cyan-600 text-white" : ""
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="grow md:max-w-xs ml-auto flex items-center">
          <Input
            placeholder="Search discussions…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-slate-800/60 border-slate-700 text-slate-200"
          />
        </div>
        <Button variant="outline" className="border-slate-600 text-slate-300">
          <Filter className="h-4 w-4 mr-1" />
          Filter
        </Button>
      </div>

      {/* List of discussions */}
      <div className="space-y-4">
        {searched.map((disc) => (
          <div
            key={disc.id}
            className={`rounded-lg border border-slate-700/50 bg-slate-800/40 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4 group hover:bg-slate-800/70 transition-all duration-200 ${
              disc.trending ? "ring-2 ring-cyan-500/30" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs px-2 py-0.5">
                  {disc.sector}
                </Badge>
                {disc.trending && (
                  <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>
              <h3 className="font-semibold text-white hover:text-cyan-400 transition-colors">
                {disc.title}
              </h3>
              <div className="flex items-center text-slate-400 text-xs gap-2 mt-1">
                <span>
                  {disc.author}
                  {disc.verified && (
                    <Badge className="ml-1 bg-blue-500/20 text-blue-400 border-blue-500/30 text-xxs">
                      Verified
                    </Badge>
                  )}
                </span>
                <span>· {disc.lastActivity}</span>
              </div>
            </div>
            <div className="flex gap-5 items-center self-end sm:self-auto">
              <span className="flex items-center text-green-400 text-xs font-semibold">
                ▲ {disc.upvotes}
              </span>
              <span className="flex items-center text-slate-400 text-xs">
                <MessageCircle className="h-4 w-4 mr-1" />
                {disc.replies}
              </span>
              <Button variant="secondary" className="text-xs px-2 py-1">
                View Thread
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Stubs for threading/voting */}
      <div className="mt-8">
        <ThreadedDiscussion />
      </div>
    </div>
  );
};

export default ForumSection;
