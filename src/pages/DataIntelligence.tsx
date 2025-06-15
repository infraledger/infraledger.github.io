
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Building, Users } from "lucide-react";
import MarketDashboard from "@/components/MarketDashboard";

const TABS = [
  { key: "market", name: "Market Intelligence", icon: <BarChart3 className="h-4 w-4 mr-1" /> },
  { key: "projects", name: "Project Intelligence", icon: <Building className="h-4 w-4 mr-1" /> },
  { key: "companies", name: "Company Intelligence", icon: <Users className="h-4 w-4 mr-1" /> }
];

const DataIntelligencePage = () => {
  const [activeTab, setActiveTab] = useState("market");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10">
        <section className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-3">
            Infrastructure Intelligence Center
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real-time insights, analytics, and trends for global infrastructure.
            Explore market dashboards, track projects, and analyze companies in one place.
          </p>
        </section>
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-8 justify-center">
          {TABS.map(tab => (
            <button
              key={tab.key}
              className={`flex items-center font-semibold px-4 py-2 rounded 
                ${activeTab === tab.key
                  ? "bg-cyan-600 text-white shadow"
                  : "bg-slate-800/60 text-cyan-300 hover:bg-slate-700 transition-colors"
                }`}
              onClick={() => setActiveTab(tab.key)}
              aria-selected={activeTab === tab.key}
            >
              {tab.icon}{tab.name}
            </button>
          ))}
        </div>
        {/* Tab content */}
        <div className="mt-2">
          {activeTab === "market" && (
            <MarketDashboard />
          )}
          {activeTab === "projects" && (
            <Card className="bg-slate-900/70 border-0 shadow-md mb-16">
              <CardHeader>
                <CardTitle className="text-cyan-400 font-bold text-lg">Project Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Track, compare and analyze infrastructure project pipelines, status, and performance.<br />
                  <span className="text-yellow-400">Detailed project analytics coming soon!</span>
                </p>
              </CardContent>
            </Card>
          )}
          {activeTab === "companies" && (
            <Card className="bg-slate-900/70 border-0 shadow-md mb-16">
              <CardHeader>
                <CardTitle className="text-cyan-400 font-bold text-lg">Company Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Discover top companies, performance rankings, and analytics on infrastructure players.<br/>
                  <span className="text-yellow-400">Company intelligence features launching soon!</span>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataIntelligencePage;
