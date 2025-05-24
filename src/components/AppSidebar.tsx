
import { TrendingUp, DollarSign, BarChart3, Globe, Building, Calendar } from "lucide-react";
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
    { date: "Dec 15", event: "Infrastructure Investment Summit" },
    { date: "Dec 18", event: "Green Finance Conference" },
    { date: "Jan 8", event: "Asian Development Forum" },
  ];

  const categories = [
    { name: "Smart Cities", count: 24, icon: Building },
    { name: "Renewable Energy", count: 31, icon: TrendingUp },
    { name: "Transportation", count: 18, icon: Globe },
    { name: "Digital Infrastructure", count: 15, icon: BarChart3 },
  ];

  return (
    <Sidebar className="border-r border-slate-200" variant="sidebar">
      <SidebarContent className="bg-slate-50">
        {/* Market Data */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm">
            Market Snapshot
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <Card className="border-0 shadow-sm">
              <CardContent className="p-4 space-y-3">
                {marketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs text-slate-600">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.color}`}>
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
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm">
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {categories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton className="h-auto py-2">
                    <category.icon className="h-4 w-4 text-slate-600" />
                    <div className="flex justify-between items-center w-full">
                      <span className="text-sm">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Upcoming Events */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-900 font-semibold text-sm">
            Upcoming Events
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 hover:bg-white rounded-md transition-colors">
                  <div className="flex items-center space-x-1 text-xs text-slate-500">
                    <Calendar className="h-3 w-3" />
                    <span>{event.date}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">{event.event}</p>
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
