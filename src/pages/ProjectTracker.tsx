
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building, DollarSign, Calendar, MapPin } from "lucide-react";

const keyMetrics = [
  {
    icon: <Building className="h-7 w-7 text-cyan-400" />,
    label: "Active Projects",
    value: "1,210",
    change: "+4.5% MoM",
    color: "text-green-400",
  },
  {
    icon: <DollarSign className="h-7 w-7 text-emerald-400" />,
    label: "Total Investment",
    value: "$248B",
    change: "+$2.1B",
    color: "text-green-300",
  },
  {
    icon: <Calendar className="h-7 w-7 text-orange-400" />,
    label: "Avg. Duration",
    value: "3.6 yrs",
    change: "-2.3% YoY",
    color: "text-yellow-400",
  },
  {
    icon: <Building className="h-7 w-7 text-sky-400" />,
    label: "Completed This Year",
    value: "42",
    change: "+8.5%",
    color: "text-green-400",
  }
];

const statusData = [
  { status: "Planning", count: 420, color: "bg-yellow-400/80", percent: 34 },
  { status: "Under Construction", count: 565, color: "bg-blue-500/80", percent: 47 },
  { status: "Operational", count: 170, color: "bg-green-500/80", percent: 14 },
  { status: "Completed", count: 55, color: "bg-emerald-400/80", percent: 5 },
];

const regions = [
  { name: "Asia-Pacific", value: "38%", color: "text-cyan-300", icon: <MapPin className="h-5 w-5" /> },
  { name: "North America", value: "25%", color: "text-sky-200", icon: <MapPin className="h-5 w-5" /> },
  { name: "Europe", value: "22%", color: "text-blue-400", icon: <MapPin className="h-5 w-5" /> },
  { name: "Others", value: "15%", color: "text-slate-400", icon: <MapPin className="h-5 w-5" /> }
];

const mockProjects = [
  {
    name: "Green Bridge Initiative",
    sector: "Transport",
    location: "France",
    status: "Under Construction",
    investment: "$3.2B",
    progress: 65,
    sponsor: "EuroTrans Inc."
  },
  {
    name: "BlueGrid Solar Park",
    sector: "Energy",
    location: "Australia",
    status: "Planning",
    investment: "$1.1B",
    progress: 15,
    sponsor: "SunGrid Partners"
  },
  {
    name: "Thames Water Tunnel",
    sector: "Water & Utilities",
    location: "UK",
    status: "Operational",
    investment: "$900M",
    progress: 100,
    sponsor: "London Waterworks"
  },
  {
    name: "Delta Fiber Rollout",
    sector: "Digital Infra",
    location: "USA",
    status: "Under Construction",
    investment: "$1.8B",
    progress: 47,
    sponsor: "ConnectNow"
  },
];

const statusVariants: Record<string, { color: string }> = {
  Planning: { color: "bg-yellow-400/90 text-yellow-900" },
  "Under Construction": { color: "bg-blue-500/90 text-white" },
  Operational: { color: "bg-green-500/90 text-white" },
  Completed: { color: "bg-emerald-400/90 text-emerald-900" },
};

const ProjectTracker = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
    <Navigation />
    <main className="flex-1 w-full max-w-6xl mx-auto px-2 md:px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-2 text-center">
        Project Tracker
      </h1>
      <p className="text-slate-400 text-lg mb-6 text-center max-w-2xl">
        Discover, filter and monitor infrastructure projects worldwide.<br />
        Real data and analytics coming soon!
      </p>
      {/* Key Metrics */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {keyMetrics.map((m, i) => (
          <Card key={i} className="bg-slate-900 border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center space-x-3">
                {m.icon}
                <span className="text-lg font-semibold text-slate-100">{m.label}</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
              <div className={`text-xs font-medium ${m.color}`}>{m.change}</div>
            </CardContent>
          </Card>
        ))}
      </section>
      {/* Status Overview & Region Breakdown */}
      <section className="flex flex-col lg:flex-row w-full gap-6 mb-8">
        {/* Status Distribution */}
        <Card className="flex-1 bg-slate-900 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-slate-100 text-lg">Project Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {statusData.map(({ status, count, color, percent }) => (
                <div key={status} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <Badge className={`${color} px-2 py-1`} variant="secondary">{status}</Badge>
                      <span className="text-sm text-slate-200">{count} projects</span>
                    </span>
                    <span className="text-slate-400 text-xs">{percent}%</span>
                  </div>
                  <Progress value={percent} className="h-2 bg-slate-800" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        {/* Region Distribution */}
        <Card className="flex-1 bg-slate-900 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-slate-100 text-lg">Regional Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              {regions.map((r) => (
                <div key={r.name} className="flex items-center justify-between">
                  <span className={`flex items-center gap-2 font-medium ${r.color}`}>
                    {r.icon}
                    {r.name}
                  </span>
                  <span className="font-bold text-slate-100">{r.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      {/* Search & Filter Bar Mockup */}
      <section className="w-full mb-8">
        <Card className="bg-slate-900/90 border-0">
          <CardContent className="flex flex-col md:flex-row items-center gap-2 md:gap-4 py-4">
            <Input
              type="search"
              placeholder="Search projects, companies..."
              className="w-full md:w-72 bg-slate-800/70 border-slate-700 placeholder-slate-400 text-white"
              disabled
            />
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-blue-800 text-blue-300">Sector</Badge>
              <Badge variant="secondary" className="bg-purple-800 text-purple-200">Region</Badge>
              <Badge variant="secondary" className="bg-green-800 text-green-300">Status</Badge>
              <Badge variant="secondary" className="bg-yellow-800 text-yellow-300">Investment</Badge>
              <Badge variant="secondary" className="bg-slate-800 text-slate-300">Timeline</Badge>
            </div>
            <Button variant="secondary" className="hidden md:block cursor-not-allowed opacity-50" disabled>Apply Filters</Button>
          </CardContent>
        </Card>
      </section>
      {/* Project List Table */}
      <section className="w-full mb-8">
        <Card className="bg-slate-900 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-slate-100 text-lg">Sample of Projects</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Sector</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Investment</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Sponsor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockProjects.map((proj, idx) => (
                  <TableRow key={idx} className="hover:bg-slate-800/60">
                    <TableCell>
                      <span className="font-semibold text-white">{proj.name}</span>
                    </TableCell>
                    <TableCell>{proj.sector}</TableCell>
                    <TableCell>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-cyan-300" /> {proj.location}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${statusVariants[proj.status]?.color} px-2 py-1`}>
                        {proj.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{proj.investment}</span>
                    </TableCell>
                    <TableCell className="w-32">
                      <Progress value={proj.progress} className="h-2" />
                      <span className="text-xs pl-1 text-slate-400">{proj.progress}%</span>
                    </TableCell>
                    <TableCell>{proj.sponsor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
      {/* Visual/CTA Section */}
      <section className="w-full flex flex-col md:flex-row items-center gap-8 mb-10">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
          alt="project dashboard preview"
          className="rounded-lg shadow-xl object-cover w-full max-w-xs h-56"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-slate-200 mb-2">What’s coming soon?</h2>
          <ul className="list-disc text-slate-400 pl-6 space-y-1 text-base">
            <li>Advanced search & project filters</li>
            <li>Interactive analytics & maps</li>
            <li>Full profiles for each project</li>
            <li>Data download & sharing</li>
            <li>Alerts and custom watchlists</li>
          </ul>
          <Button className="mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold cursor-not-allowed opacity-70" disabled>
            Request Early Access
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ProjectTracker;
