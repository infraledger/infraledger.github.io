
import { TrendingUp, DollarSign, BarChart3, Globe, Building, Calendar, MapPin, Users, Activity } from "lucide-react";
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
    { label: "Global Infra Index", value: "+2.4%", color: "text-green-600" },
    { label: "Green Bond Yield", value: "3.2%", color: "text-blue-600" },
    { label: "Project Pipeline", value: "$1.2T", color: "text-slate-900" },
    { label: "ESG Compliance", value: "87%", color: "text-purple-600" },
  ];

  const upcomingEvents = [
    { date: "Dec 15", event: "Infrastructure Investment Summit", location: "London" },
    { date: "Dec 18", event: "Green Finance Conference", location: "Singapore" },
    { date: "Jan 8", event: "Asian Development Forum", location: "Tokyo" },
    { date: "Jan 15", event: "RE+ Europe", location: "Amsterdam" },
  ];

  const categories = [
    { name: "Smart Cities", count: 24, icon: Building },
    { name: "Renewable Energy", count: 31, icon: TrendingUp },
    { name: "Transportation", count: 18, icon: Globe },
    { name: "Digital Infrastructure", count: 15, icon: BarChart3 },
  ];

  const keyDeals = [
    { 
      title: "Rail Baltica HSR", 
      value: "$1.06B", 
      status: "Construction", 
      region: "Baltic States" 
    },
    { 
      title: "Houston Ship Channel", 
      value: "$1.2B", 
      status: "70% Complete", 
      region: "USA" 
    },
    { 
      title: "OMV Green Hydrogen", 
      value: "€140M", 
      status: "FID Approved", 
      region: "Austria" 
    },
  ];

  const topCompanies = [
    { name: "Adani Green Energy", sector: "Renewable Energy", market: "India" },
    { name: "OMV Aktiengesellschaft", sector: "Energy Transition", market: "Austria" },
    { name: "Air Products", sector: "Hydrogen", market: "USA" },
    { name: "Grenergy Renovables", sector: "Solar/Storage", market: "Spain" },
  ];

  return (
    <Sidebar className="border-r border-slate-200" variant="sidebar">
      <SidebarContent className="bg-slate-50 p-4 space-y-6">
        {/* Market Data */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm mb-3">
            Market Snapshot
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 space-y-3">
                {marketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs text-slate-600 font-medium">{item.label}</span>
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
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm mb-3">
            Sectors
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton className="h-auto py-3 px-3 hover:bg-white transition-colors">
                    <category.icon className="h-4 w-4 text-slate-600" />
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm font-medium">{category.name}</span>
                      <Badge variant="secondary" className="text-xs font-semibold">
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
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm mb-3">
            Key Deals Tracker
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {keyDeals.map((deal, index) => (
                <Card key={index} className="border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
                  <CardContent className="p-3">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-slate-900 leading-tight">{deal.title}</h4>
                        <span className="text-sm font-bold text-green-600">{deal.value}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">{deal.status}</Badge>
                        <span className="text-xs text-slate-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {deal.region}
                        </span>
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
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm mb-3">
            Company Spotlight
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {topCompanies.map((company, index) => (
                <div key={index} className="p-3 hover:bg-white rounded-md transition-colors cursor-pointer border border-transparent hover:border-slate-200">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-slate-900">{company.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-600">{company.sector}</span>
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
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm mb-3">
            Upcoming Events
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 hover:bg-white rounded-md transition-colors cursor-pointer border border-transparent hover:border-slate-200">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span className="font-medium">{event.date}</span>
                      </div>
                      <span className="text-xs text-slate-500 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-tight">{event.event}</p>
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
