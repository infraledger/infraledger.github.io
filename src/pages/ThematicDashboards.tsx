
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThematicDashboardCard from "@/components/themes/ThematicDashboardCard";
import { Zap, Car, Droplet, Wifi, Heart, Globe } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const THEMES = [
  {
    key: "energy",
    icon: <Zap className="text-green-400" />,
    title: "Energy & Sustainability",
    description: "Track global renewables, carbon emissions, and energy transition metrics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    metrics: [
      { label: "Renewables Share", value: "28%" },
      { label: "Global CO₂ Drop", value: "-3.1%" },
      { label: "Green Bonds 2025", value: "$460B" },
      { label: "Transition Score", value: "B+" }
    ],
    chartData: [
      { name: "Wind", value: 90 },
      { name: "Solar", value: 100 },
      { name: "Hydro", value: 70 }
    ],
    colorClass: "bg-green-900/75 text-green-300",
    timeline: "Preview Q3 2025",
    status: "In Progress"
  },
  {
    key: "transport",
    icon: <Car className="text-blue-400" />,
    title: "Transportation & Mobility",
    description: "Insights into transport networks, smart mobility, EV and rail progress.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&q=80",
    metrics: [
      { label: "Rail Project Value", value: "$201B" },
      { label: "EV Growth", value: "+42%" },
      { label: "Airport Expansions", value: "14" },
      { label: "Logistics Index", value: "68.9" }
    ],
    chartData: [
      { name: "Rail", value: 120 },
      { name: "Ports", value: 90 },
      { name: "EV", value: 110 }
    ],
    colorClass: "bg-blue-900/75 text-blue-300",
    timeline: "Preview Q4 2025",
    status: "Planned"
  },
  {
    key: "water",
    icon: <Droplet className="text-cyan-400" />,
    title: "Water & Utilities",
    description: "Monitor water infrastructure, stress indices, and utility investments.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80",
    metrics: [
      { label: "Stress Risk (avg)", value: "2.4" },
      { label: "Smart Meters", value: "7.2M" },
      { label: "Treatment Projects", value: "58" },
      { label: "Utility CapEx", value: "$39B" }
    ],
    chartData: [
      { name: "Water", value: 60 },
      { name: "Waste", value: 80 },
      { name: "Smart", value: 100 }
    ],
    colorClass: "bg-cyan-900/75 text-cyan-300",
    timeline: "Preview Q1 2026",
    status: "Planned"
  },
  {
    key: "digital",
    icon: <Wifi className="text-purple-400" />,
    title: "Digital Infrastructure",
    description: "Heatmaps for 5G, data centers, connectivity, and smart cities.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=400&q=80",
    metrics: [
      { label: "5G Countries", value: "77" },
      { label: "Data Center MW", value: "524" },
      { label: "Smart City Pilots", value: "33" },
      { label: "Fiber Penetration", value: "84%" }
    ],
    chartData: [
      { name: "5G", value: 80 },
      { name: "Fiber", value: 110 },
      { name: "Data", value: 90 }
    ],
    colorClass: "bg-purple-900/75 text-purple-300",
    timeline: "Preview Q2 2026",
    status: "Planned"
  },
  {
    key: "social",
    icon: <Heart className="text-pink-400" />,
    title: "Social Infrastructure",
    description: "Education, health, housing and quality of life project metrics.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
    metrics: [
      { label: "Hospitals Built", value: "52" },
      { label: "School Index", value: "59.2" },
      { label: "Affordable Homes", value: "18.6K" },
      { label: "Wellbeing Score", value: "B-" }
    ],
    chartData: [
      { name: "Hospitals", value: 70 },
      { name: "Schools", value: 100 },
      { name: "Homes", value: 95 }
    ],
    colorClass: "bg-pink-900/75 text-pink-300",
    timeline: "Preview Q4 2025",
    status: "Planned"
  },
  {
    key: "regional",
    icon: <Globe className="text-teal-400" />,
    title: "Regional Analysis",
    description: "Compare regions: investment, development, market opportunities.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
    metrics: [
      { label: "Total Projects", value: "1,124" },
      { label: "CapEx 2025", value: "$920B" },
      { label: "Emerging Markets", value: "39%" },
      { label: "Regions Covered", value: "13" }
    ],
    chartData: [
      { name: "America", value: 90 },
      { name: "Europe", value: 110 },
      { name: "Asia", value: 105 }
    ],
    colorClass: "bg-teal-900/75 text-teal-300",
    timeline: "Preview Q3 2026",
    status: "Planned"
  }
];

const DashboardFeatureHighlights = () => (
  <section className="max-w-3xl mx-auto my-8 text-slate-300">
    <h2 className="text-xl text-cyan-300 font-semibold mb-2 text-center">What You'll Soon Unlock</h2>
    <ul className="list-disc px-6 space-y-1 text-base text-slate-400">
      <li>Instantly compare KPIs across infrastructure asset types and countries</li>
      <li>Visualized trends for investment, project timelines, and market opportunities</li>
      <li>Customizable filters for sector, region, or timeframe</li>
      <li>Ready-to-download, presentation-quality charts</li>
      <li>Early access: Get notified as dashboards go live</li>
    </ul>
  </section>
);

const ThematicDashboards = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
    <Navigation />
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10 flex flex-col">
      {/* Title & Intro */}
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-2 text-center">
        Thematic Dashboards
      </h1>
      <p className="text-slate-300 text-lg mb-6 text-center max-w-2xl mx-auto">
        Explore a suite of dashboards designed around the world’s most important infrastructure themes.
        Preview key metrics, trends, and explore future tools for deep infra intelligence.
      </p>
      {/* Filter Tabs (nonfunctional for now) */}
      <Tabs defaultValue="all" className="mb-8 max-w-full">
        <TabsList className="mx-auto flex flex-wrap gap-2 bg-slate-800/70 rounded-lg border border-slate-700/30 p-2 w-fit">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="energy">Energy</TabsTrigger>
          <TabsTrigger value="transport">Transport</TabsTrigger>
          <TabsTrigger value="water">Water</TabsTrigger>
          <TabsTrigger value="digital">Digital</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="regional">Regional</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* Dashboards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {THEMES.map((theme) => (
          <ThematicDashboardCard key={theme.key} {...theme} />
        ))}
      </div>
      <DashboardFeatureHighlights />
      <div className="max-w-2xl mx-auto mt-8 rounded-xl bg-slate-900/70 p-6 text-slate-300 shadow-lg text-center">
        <h3 className="text-cyan-200 font-bold text-lg mb-2">Want early access?</h3>
        <p className="mb-3 text-slate-400 text-sm">Sign up for our newsletter and be first to know when new dashboards go live.</p>
        <form className="flex flex-col sm:flex-row gap-2 items-center justify-center max-w-md mx-auto mb-1">
          <input
            type="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="px-6 py-2 mt-2 sm:mt-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold"
          >
            Notify Me
          </button>
        </form>
        <span className="text-xs text-slate-500">No spam — just dashboard launch updates.</span>
      </div>
    </main>
    <Footer />
  </div>
);

export default ThematicDashboards;
