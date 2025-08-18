import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";

const MarketAnalysis = () => {
  const marketTrends = [
    {
      title: "Green Infrastructure Investment",
      trend: "up",
      percentage: "+24.5%",
      description: "Renewable energy and sustainable infrastructure projects continue to attract significant capital"
    },
    {
      title: "Asian Market Growth",
      trend: "up", 
      percentage: "+18.2%",
      description: "Asia-Pacific region leads global infrastructure investment with major rail and energy projects"
    },
    {
      title: "Traditional Energy Sector",
      trend: "down",
      percentage: "-8.7%",
      description: "Fossil fuel infrastructure investment declining as markets shift toward cleaner alternatives"
    },
    {
      title: "Digital Infrastructure",
      trend: "up",
      percentage: "+31.4%",
      description: "5G networks, data centers, and telecommunications infrastructure seeing massive growth"
    }
  ];

  const sectorAnalysis = [
    { sector: "Energy", investment: "$890B", growth: "+15.3%", projects: "2,847" },
    { sector: "Transport", investment: "$654B", growth: "+8.7%", projects: "1,923" },
    { sector: "Water", investment: "$234B", growth: "+12.1%", projects: "856" },
    { sector: "Digital", investment: "$445B", growth: "+28.9%", projects: "1,234" },
    { sector: "Housing", investment: "$567B", growth: "+6.4%", projects: "3,456" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4 text-center">
            Market Analysis
          </h1>
          <p className="text-slate-400 text-lg text-center mx-auto max-w-3xl">
            Deep dive into infrastructure market trends, sector performance, and investment flows
          </p>
        </div>

        {/* Market Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Market Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketTrends.map((trend, index) => (
              <Card key={index} className="bg-slate-900/70 border-slate-700/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-white text-lg">{trend.title}</CardTitle>
                  {trend.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-400" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-400" />
                  )}
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${trend.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                    {trend.percentage}
                  </div>
                  <p className="text-slate-400 text-sm mt-2">{trend.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sector Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Sector Performance</h2>
          <div className="bg-slate-900/70 border border-slate-700/50 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Sector</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Investment</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Growth</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">Active Projects</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  {sectorAnalysis.map((sector, index) => (
                    <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-white font-medium">{sector.sector}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-cyan-400 font-semibold">{sector.investment}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-green-400 font-medium">{sector.growth}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-slate-300">{sector.projects}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Key Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-900/70 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cyan-400" />
                  Market Volatility
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Infrastructure markets showing increased stability with ESG-focused investments leading growth patterns.
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/70 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  Capital Flows
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Private capital increasingly flowing toward green infrastructure, with public-private partnerships growing.
              </CardContent>
            </Card>
            
            <Card className="bg-slate-900/70 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                  Future Outlook
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">
                Digital and renewable energy infrastructure expected to dominate investment flows through 2025.
              </CardContent>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MarketAnalysis;