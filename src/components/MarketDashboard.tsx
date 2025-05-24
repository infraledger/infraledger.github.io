
import { TrendingUp, TrendingDown, DollarSign, Globe, Building, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketDashboard = () => {
  const marketData = [
    {
      title: "Global Infrastructure Index",
      value: "2,847.3",
      change: "+2.4%",
      changeType: "positive",
      icon: Globe,
      description: "YTD Performance"
    },
    {
      title: "Capital Deployed (Q4)",
      value: "$89.2B",
      change: "+12.8%",
      changeType: "positive",
      icon: DollarSign,
      description: "Quarterly Total"
    },
    {
      title: "Active Projects",
      value: "1,247",
      change: "+156",
      changeType: "positive",
      icon: Building,
      description: "Global Pipeline"
    },
    {
      title: "Green Bond Yield",
      value: "3.21%",
      change: "-0.12%",
      changeType: "negative",
      icon: BarChart3,
      description: "10Y Average"
    }
  ];

  const regionData = [
    { region: "Asia-Pacific", allocation: "42%", trend: "up" },
    { region: "North America", allocation: "28%", trend: "stable" },
    { region: "Europe", allocation: "21%", trend: "up" },
    { region: "Others", allocation: "9%", trend: "down" }
  ];

  return (
    <section className="py-16 bg-slate-50" id="trends">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Market Intelligence Dashboard
          </h2>
          <p className="text-xl text-slate-600">
            Real-time insights into global infrastructure investment flows and market performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((metric, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <metric.icon className="h-8 w-8 text-slate-600" />
                  <div className={`flex items-center space-x-1 text-sm font-semibold ${
                    metric.changeType === 'positive' ? 'text-green-600' : 'text-red-500'
                  }`}>
                    {metric.changeType === 'positive' ? 
                      <TrendingUp className="h-4 w-4" /> : 
                      <TrendingDown className="h-4 w-4" />
                    }
                    <span>{metric.change}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-600 mb-2">
                  {metric.title}
                </div>
                <div className="text-xs text-slate-500">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regional Allocation */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-slate-900">Regional Investment Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regionData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                      <span className="text-slate-700 font-medium">{region.region}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-semibold text-slate-900">{region.allocation}</span>
                      {region.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                      {region.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-slate-900">Sector Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { sector: "Renewable Energy", performance: "+18.3%", color: "bg-green-500" },
                  { sector: "Digital Infrastructure", performance: "+15.7%", color: "bg-blue-500" },
                  { sector: "Transportation", performance: "+8.9%", color: "bg-purple-500" },
                  { sector: "Water & Utilities", performance: "+6.2%", color: "bg-cyan-500" }
                ].map((sector, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${sector.color}`}></div>
                      <span className="text-slate-700 font-medium">{sector.sector}</span>
                    </div>
                    <span className="text-green-600 font-semibold">{sector.performance}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;
