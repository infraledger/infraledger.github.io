
import { useState } from "react";
import { Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ForumSection from "@/components/community/ForumSection";
import ExpertDirectory from "@/components/community/ExpertDirectory";
import NetworkingHub from "@/components/community/NetworkingHub";
import { Badge } from "@/components/ui/badge";

// Remove events/insights, focus on Forums/Experts/Network.
// Essential stats now show in header.

const TABS = [
  { value: "forum", label: "Forum" },
  { value: "experts", label: "Experts" },
  { value: "network", label: "Network" },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState("forum");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header: professional and clean, mini stats */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-2">
            Infrastructure Community
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl text-center mb-4">
            Forums, experts, and professional networking for the global infrastructure sector.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              12,497 Members
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
              2,847 Discussions
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              538 Verified Experts
            </Badge>
          </div>
        </div>

        {/* Main Tabs */}
        <div className="flex justify-center border-b border-slate-700/50 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2 font-semibold transition-colors border-b-2 ${
                activeTab === tab.value
                  ? "border-cyan-400 text-cyan-400"
                  : "border-transparent text-slate-300 hover:text-cyan-300"
              } bg-transparent`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <section>
          {activeTab === "forum" && <ForumSection />}
          {activeTab === "experts" && <ExpertDirectory />}
          {activeTab === "network" && <NetworkingHub />}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
