
import { TrendingUp, DollarSign, BarChart3, Globe, Building, Calendar, MapPin, Users, Activity, Zap, Factory } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AppSidebar = () => {
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

  const categories = [
    { name: "Renewable Energy", count: 24, icon: Zap, color: "text-green-400" },
    { name: "Transportation", count: 31, icon: Globe, color: "text-blue-400" },
    { name: "Digital Infrastructure", count: 18, icon: Activity, color: "text-purple-400" },
    { name: "Water & Utilities", count: 15, icon: Factory, color: "text-cyan-400" },
  ];

  const keyDeals = [
    { 
      title: "Rail Baltica HSR", 
      value: "$1.06B", 
      status: "Construction", 
      region: "Baltic States",
      completion: "70%"
    },
    { 
      title: "Houston Ship Channel", 
      value: "$1.2B", 
      status: "70% Complete", 
      region: "USA",
      completion: "70%"
    },
    { 
      title: "OMV Green Hydrogen", 
      value: "€140M", 
      status: "FID Approved", 
      region: "Austria",
      completion: "25%"
    },
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
    <Sidebar className="border-r border-slate-700/50 bg-gradient-to-b from-slate-900 to-slate-800" variant="sidebar">
      <SidebarContent className="bg-transparent p-4 space-y-6">
        {/* Market Data */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Market Snapshot
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="border-slate-700/50 shadow-xl bg-slate-800/30 backdrop-blur-lg">
              <CardContent className="p-4 space-y-3">
                {marketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-1 border-b border-slate-700/30 last:border-0">
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

        {/* Categories */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Sectors
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton className="h-auto py-3 px-3 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-cyan-500/30 rounded-lg">
                    <category.icon className={`h-4 w-4 ${category.color}`} />
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm font-medium text-slate-300">{category.name}</span>
                      <Badge variant="secondary" className="text-xs font-semibold bg-slate-700/50 text-cyan-400 border-cyan-500/30">
                        {category.count}
                      </Badge>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Key Deals */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Key Deals Tracker
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {keyDeals.map((deal, index) => (
                <Card key={index} className="border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer bg-slate-800/30 backdrop-blur-lg group">
                  <CardContent className="p-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-white leading-tight group-hover:text-cyan-400 transition-colors duration-300">{deal.title}</h4>
                        <span className="text-sm font-bold text-green-400">{deal.value}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs bg-slate-700/50 text-slate-300 border-slate-600">{deal.status}</Badge>
                        <span className="text-xs text-slate-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {deal.region}
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-1.5">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: deal.completion }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Top Companies */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white font-semibold text-sm mb-3 flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
            Company Spotlight
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {topCompanies.map((company, index) => (
                <div key={index} className="p-3 hover:bg-slate-800/50 rounded-md transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
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
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 hover:bg-slate-800/50 rounded-md transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
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
