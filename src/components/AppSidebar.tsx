
import { TrendingUp, DollarSign, BarChart3, Globe, Building, Calendar, MapPin, Users, Activity, Zap, Factory, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { infrastructureTypes, sampleProjects } from "@/data/infrastructureData";

const AppSidebar = () => {
  const [expandedSectors, setExpandedSectors] = useState<Set<string>>(new Set());

  const toggleSector = (sector: string) => {
    const newExpanded = new Set(expandedSectors);
    if (newExpanded.has(sector)) {
      newExpanded.delete(sector);
    } else {
      newExpanded.add(sector);
    }
    setExpandedSectors(newExpanded);
  };

  const marketData = [
    { label: "Global Infra Index", value: "+2.4%", color: "text-green-400" },
    { label: "Green Bond Yield", value: "3.2%", color: "text-cyan-400" },
    { label: "Project Pipeline", value: "$1.2T", color: "text-white" },
    { label: "ESG Compliance", value: "87%", color: "text-purple-400" },
  ];

  const upcomingEvents = [
    { date: "Jun 25-26", event: "Solar & Storage Live Valencia", location: "Valencia, Spain" },
    { date: "Jul 1-3", event: "AgriVoltaics World Conference", location: "Freiburg, Germany" },
    { date: "Jul 2-4", event: "ASEAN Sustainable Energy Week", location: "Bangkok, Thailand" },
    { date: "Sep 8-11", event: "RE+ (Solar, ESI & Smart Energy)", location: "Las Vegas, USA" },
  ];

  const topCompanies = [
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

  return (
    <Sidebar className="border-r border-slate-700/50 bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl" variant="sidebar">
      <SidebarHeader className="p-4 border-b border-slate-700/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
          <h2 className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Intelligence Hub
          </h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-transparent p-4 space-y-6 overflow-y-auto">
        {/* Market Data */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Live Market Data
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="border-slate-700/50 shadow-xl bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
              <CardContent className="p-4 space-y-3">
                {marketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-slate-700/30 last:border-0">
                    <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                    <span className={`text-sm font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Infrastructure Sectors */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Infrastructure Sectors
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {Object.entries(infrastructureTypes).slice(0, 8).map(([sector, data]) => (
                <Collapsible key={sector}>
                  <CollapsibleTrigger
                    onClick={() => toggleSector(sector)}
                    className="w-full"
                  >
                    <div className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 hover:border-cyan-500/30 cursor-pointer ${data.bgColor} ${data.borderColor}`}>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{data.icon}</span>
                        <div className="text-left">
                          <div className={`text-sm font-medium ${data.color}`}>{sector}</div>
                          <div className="text-xs text-slate-500">{data.subtypes.length} subtypes</div>
                        </div>
                      </div>
                      {expandedSectors.has(sector) ? 
                        <ChevronDown className="h-4 w-4 text-slate-400" /> : 
                        <ChevronRight className="h-4 w-4 text-slate-400" />
                      }
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-4 mt-2 space-y-1">
                      {data.subtypes.slice(0, 5).map((subtype, index) => (
                        <div key={index} className="text-xs text-slate-400 py-1 px-3 hover:text-cyan-400 cursor-pointer transition-colors">
                          • {subtype}
                        </div>
                      ))}
                      {data.subtypes.length > 5 && (
                        <div className="text-xs text-slate-500 py-1 px-3">
                          +{data.subtypes.length - 5} more...
                        </div>
                      )}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Key Projects */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Featured Projects
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {[...sampleProjects.Energy, ...sampleProjects.Transport].slice(0, 3).map((project) => (
                <Card key={project.id} className="border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer bg-slate-800/30 backdrop-blur-lg group">
                  <CardContent className="p-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h4>
                        <span className="text-sm font-bold text-green-400">{project.value}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs bg-slate-700/50 text-slate-300 border-slate-600">{project.status}</Badge>
                        <span className="text-xs text-slate-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {project.location}
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: project.completion }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Company Spotlight */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Company Spotlight
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {topCompanies.slice(0, 3).map((company, index) => (
                <div key={index} className="p-3 hover:bg-slate-800/50 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{company.name}</h4>
                      <span className="text-xs text-green-400 font-semibold">{company.change}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-400">{company.sector}</span>
                      <span className="text-xs text-slate-500">{company.market}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Upcoming Events */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Upcoming Events
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {upcomingEvents.slice(0, 3).map((event, index) => (
                <div key={index} className="p-3 hover:bg-slate-800/50 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span className="font-medium text-cyan-400">{event.date}</span>
                      </div>
                      <span className="text-xs text-slate-500 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 font-medium leading-tight group-hover:text-white transition-colors duration-300">{event.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
