import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { infrastructureTypes } from "@/data/infrastructureData";
import { Globe, Building, DollarSign, TrendingUp, Filter } from "lucide-react";

const MarketSnapshot = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedSubsector, setSelectedSubsector] = useState("all");

  const countries = [
    "United States", "United Kingdom", "Germany", "France", "Japan", "China", 
    "India", "Brazil", "Australia", "Canada", "Netherlands", "Singapore"
  ];

  const cities = [
    "New York", "London", "Tokyo", "Paris", "Hong Kong", "Singapore", 
    "Sydney", "Toronto", "Amsterdam", "Frankfurt", "Mumbai", "São Paulo"
  ];

  const getSubsectors = () => {
    if (selectedSector === "all" || !infrastructureTypes[selectedSector]) return [];
    return infrastructureTypes[selectedSector].subtypes;
  };

  const marketMetrics = [
    {
      title: "Active Projects",
      value: "2,847",
      change: "+12.3%",
      icon: Building,
      color: "text-cyan-400"
    },
    {
      title: "Total Investment",
      value: "$2.8T",
      change: "+8.7%",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Green Projects",
      value: "68%",
      change: "+15.2%",
      icon: TrendingUp,
      color: "text-emerald-400"
    },
    {
      title: "Completion Rate",
      value: "94.2%",
      change: "+2.1%",
      icon: Globe,
      color: "text-blue-400"
    }
  ];

  const liveMarketData = [
    { label: "Global Infra Index", value: "+2.4%", color: "text-green-400" },
    { label: "Green Bond Yield", value: "3.2%", color: "text-cyan-400" },
    { label: "Project Pipeline", value: "$1.2T", color: "text-white" },
    { label: "ESG Compliance", value: "87%", color: "text-purple-400" },
  ];

  const topPerformingCompanies = [
    { 
      name: "Adani Green Energy", 
      sector: "Renewable Energy", 
      market: "India",
      change: "+12.3%",
      trend: "up"
    },
    { 
      name: "OMV Aktiengesellschaft", 
      sector: "Energy Transition", 
      market: "Austria",
      change: "+8.7%",
      trend: "up"
    },
    { 
      name: "Air Products", 
      sector: "Hydrogen", 
      market: "USA",
      change: "+15.2%",
      trend: "up"
    },
    { 
      name: "Grenergy Renovables", 
      sector: "Solar/Storage", 
      market: "Spain",
      change: "+22.1%",
      trend: "up"
    },
  ];

  const regionalData = [
    { region: "North America", volume: "$847B", share: "29.8%", projects: "4,234", growth: "+11.2%" },
    { region: "Asia-Pacific", volume: "$1.12T", share: "39.4%", projects: "6,891", growth: "+18.7%" },
    { region: "Europe", volume: "$654B", share: "23.0%", projects: "3,456", growth: "+7.9%" },
    { region: "Middle East & Africa", volume: "$156B", share: "5.5%", projects: "891", growth: "+24.3%" },
    { region: "Latin America", volume: "$67B", share: "2.3%", projects: "175", growth: "+6.1%" }
  ];

  const sectorBreakdown = [
    { sector: "Energy", volume: "$982B", share: "34.6%", color: "bg-yellow-500" },
    { sector: "Transport", volume: "$721B", share: "25.4%", color: "bg-blue-500" },
    { sector: "Digital", volume: "$456B", share: "16.1%", color: "bg-cyan-500" },
    { sector: "Water", volume: "$289B", share: "10.2%", color: "bg-blue-600" },
    { sector: "Housing", volume: "$234B", share: "8.2%", color: "bg-amber-500" },
    { sector: "Other", volume: "$158B", share: "5.5%", color: "bg-slate-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4 text-center">
            Market Snapshot
          </h1>
          <p className="text-slate-400 text-lg text-center mx-auto max-w-3xl">
            Real-time overview of global infrastructure markets with advanced filtering and analytics
          </p>
        </div>

        {/* Filters */}
        <Card className="bg-slate-900/70 border-slate-700/50 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="h-5 w-5 text-cyan-400" />
              Market Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Country</label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-200">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country.toLowerCase().replace(" ", "-")}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">City</label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-200">
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all">All Cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city.toLowerCase().replace(" ", "-")}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Sector</label>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-200">
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all">All Sectors</SelectItem>
                    {Object.keys(infrastructureTypes).map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {infrastructureTypes[sector].icon} {sector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">Subsector</label>
                <Select value={selectedSubsector} onValueChange={setSelectedSubsector}>
                  <SelectTrigger className="bg-slate-800 border-slate-600 text-slate-200">
                    <SelectValue placeholder="Select subsector" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600">
                    <SelectItem value="all">All Subsectors</SelectItem>
                    {getSubsectors().map((subsector) => (
                      <SelectItem key={subsector} value={subsector.toLowerCase().replace(" ", "-")}>
                        {subsector}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Market Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-cyan-400" />
                Live Market Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {liveMarketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300 font-medium">{item.label}</span>
                    <span className={`font-bold text-lg ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                Top Performing Companies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topPerformingCompanies.map((company, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors">
                    <div>
                      <div className="text-white font-medium text-sm">{company.name}</div>
                      <div className="text-slate-400 text-xs">{company.sector} • {company.market}</div>
                    </div>
                    <div className="text-green-400 font-semibold text-sm">{company.change}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {marketMetrics.map((metric, index) => (
            <Card key={index} className="bg-slate-900/70 border-slate-700/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    {metric.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-slate-400 text-sm">{metric.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Regional Breakdown */}
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Regional Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionalData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                    <div>
                      <div className="text-white font-medium">{region.region}</div>
                      <div className="text-slate-400 text-sm">{region.projects} projects</div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-semibold">{region.volume}</div>
                      <div className="text-green-400 text-sm">{region.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sector Allocation */}
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Sector Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {sectorBreakdown.map((sector, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${sector.color}`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-white text-sm">{sector.sector}</span>
                        <span className="text-slate-400 text-sm">{sector.share}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                        <div 
                          className={`h-2 rounded-full ${sector.color}`}
                          style={{ width: sector.share }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-cyan-400 font-medium text-sm">{sector.volume}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default MarketSnapshot;