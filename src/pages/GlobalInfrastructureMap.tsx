import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Filter, Globe } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mapbox GL JS dependency for interactive map visualization
import "mapbox-gl/dist/mapbox-gl.css";

// Lazy-load Mapbox GL JS since it's a large module and only needed here
const MapboxMap = React.lazy(() => import("../utils/MapboxMap"));

type Project = {
  name: string;
  coords: [number, number];
  sector: string;
  region: string;
  status: string;
  investment: string;
};

const infrastructureSectors = [
  "Transport",
  "Energy",
  "Water & Utilities",
  "Digital Infra",
  "Social Infra"
];
const projectStatuses = [
  "Planning",
  "Under Construction",
  "Operational",
  "Completed"
];
const regions = [
  "Asia-Pacific",
  "North America",
  "Europe",
  "Middle East & Africa",
  "Latin America"
];

// Explicitly type as Project[] for correct tuple annotation
const demoProjects: Project[] = [
  { name: "Green Bridge", coords: [2.35, 48.85], sector: "Transport", region: "Europe", status: "Under Construction", investment: "$2B" }, // Paris
  { name: "Solar Oasis", coords: [55.27, 25.20], sector: "Energy", region: "Middle East & Africa", status: "Planning", investment: "$820M" }, // Dubai
  { name: "Pacific Fiber", coords: [151.2, -33.8], sector: "Digital Infra", region: "Asia-Pacific", status: "Operational", investment: "$1.3B" }, // Sydney
  { name: "Andes Tunnel", coords: [-58.42, -34.6], sector: "Transport", region: "Latin America", status: "Completed", investment: "$900M" }, // Buenos Aires
  { name: "Thames Clean Water", coords: [-0.13, 51.51], sector: "Water & Utilities", region: "Europe", status: "Under Construction", investment: "$400M" }, // London
];

const GlobalInfrastructureMap = () => {
  // Mapbox public token input and state
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Filter state (mock logic for demonstration)
  const [sector, setSector] = useState<string | "">("");
  const [region, setRegion] = useState<string | "">("");
  const [status, setStatus] = useState<string | "">("");

  // Filtered markers based on active filters
  const filteredProjects = demoProjects.filter(p => {
    return (!sector || p.sector === sector)
      && (!region || p.region === region)
      && (!status || p.status === status);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        <section className="mb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-2">
            Global Infrastructure Map
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore major infrastructure projects worldwide. Apply filters to visualize projects by sector, region, status, and more.
          </p>
        </section>

        {/* Filter Controls */}
        <Card className="mb-6 bg-slate-900/90 border-0 mx-auto max-w-3xl">
          <CardHeader className="flex flex-row items-center gap-3">
            <Filter className="text-cyan-400" />
            <CardTitle className="text-cyan-300 font-semibold text-lg">
              Play with Map Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">Sector</label>
                <select
                  className="bg-slate-800 text-white rounded px-3 py-2 outline-none"
                  value={sector}
                  onChange={e => setSector(e.target.value)}
                >
                  <option value="">All</option>
                  {infrastructureSectors.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">Region</label>
                <select
                  className="bg-slate-800 text-white rounded px-3 py-2 outline-none"
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                >
                  <option value="">All</option>
                  {regions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-slate-300 text-sm font-semibold mb-1">Status</label>
                <select
                  className="bg-slate-800 text-white rounded px-3 py-2 outline-none"
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <option value="">All</option>
                  {projectStatuses.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mapbox Token Input (if not present) */}
        {showTokenInput && (
          <div className="max-w-xl mx-auto mt-2 mb-6 bg-yellow-100/80 border-l-4 border-yellow-500 p-4 rounded text-yellow-800 flex flex-col items-center">
            <span className="font-semibold text-sm mb-1">You need a Mapbox public token to visualize the global infrastructure map.</span>
            <span className="text-xs text-yellow-900 mb-2">
              (Create a free account at <a target="_blank" rel="noopener noreferrer" href="https://mapbox.com" className="underline">mapbox.com</a>, go to Tokens, and copy-paste your public token here.)
            </span>
            <Input
              value={mapboxToken}
              onChange={e => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox public token..."
              className="mb-2 bg-slate-100 text-slate-900 w-full"
            />
            <Button
              onClick={() => setShowTokenInput(false)}
              disabled={!mapboxToken}
              className="bg-cyan-600 text-white font-semibold px-5"
            >
              Load Map
            </Button>
          </div>
        )}

        {/* MAP SECTION */}
        {!showTokenInput && (
          <React.Suspense fallback={<div className="h-[400px] flex items-center justify-center text-cyan-400">Loading map...</div>}>
            <MapboxMap
              token={mapboxToken}
              projects={filteredProjects}
            />
          </React.Suspense>
        )}

        {/* Legend */}
        <div className="max-w-3xl mx-auto mt-8 flex gap-4 justify-center text-xs flex-wrap">
          <Badge className="bg-cyan-700 text-cyan-100"><Globe className="inline h-4 w-4 mr-1" /> Move & zoom map</Badge>
          <Badge className="bg-blue-700 text-blue-100"><MapPin className="inline h-4 w-4 mr-1" /> Project marker</Badge>
          <Badge className="bg-green-700 text-green-100">Clickable for project info</Badge>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GlobalInfrastructureMap;
