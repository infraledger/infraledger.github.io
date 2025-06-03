
import { Calendar, MapPin, TrendingUp, Building, DollarSign, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { sampleProjects } from "@/data/infrastructureData";

const IntelligenceHub = () => {
  const upcomingEvents = [
    { date: "Jun 25-26", event: "Solar & Storage Live Valencia", location: "Valencia, Spain" },
    { date: "Jul 1-3", event: "AgriVoltaics World Conference", location: "Freiburg, Germany" },
    { date: "Jul 2-4", event: "ASEAN Sustainable Energy Week", location: "Bangkok, Thailand" },
    { date: "Sep 8-11", event: "RE+ (Solar, ESI & Smart Energy)", location: "Las Vegas, USA" },
    { date: "Sep 9-11", event: "Enlit Asia", location: "Bangkok, Thailand" },
    { date: "Sep 30-Oct 2", event: "Wetex & Dubai Solar Show", location: "Dubai, UAE" },
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

  const marketData = [
    { label: "Global Infra Index", value: "+2.4%", color: "text-green-400" },
    { label: "Green Bond Yield", value: "3.2%", color: "text-cyan-400" },
    { label: "Project Pipeline", value: "$1.2T", color: "text-white" },
    { label: "ESG Compliance", value: "87%", color: "text-purple-400" },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
          Intelligence Hub
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Real-time market data, company insights, and upcoming events shaping the infrastructure landscape
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured Projects */}
        <Card className="border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white font-semibold text-xl flex items-center">
              <Building className="h-5 w-5 mr-2 text-cyan-400" />
              Featured Projects
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[...sampleProjects.Energy, ...sampleProjects.Transport].slice(0, 4).map((project) => (
              <div key={project.id} className="p-4 hover:bg-slate-700/30 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
                <div className="space-y-3">
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
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: project.completion }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Company Spotlight */}
        <Card className="border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white font-semibold text-xl flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-cyan-400" />
              Company Spotlight
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCompanies.map((company, index) => (
              <div key={index} className="p-4 hover:bg-slate-700/30 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">{company.name}</h4>
                    <span className="text-sm text-green-400 font-semibold">{company.change}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">{company.sector}</span>
                    <span className="text-xs text-slate-500">{company.market}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Market Data Summary */}
            <div className="mt-6 p-4 bg-slate-900/50 rounded-lg border border-slate-700/30">
              <h5 className="text-sm font-semibold text-white mb-3 flex items-center">
                <DollarSign className="h-4 w-4 mr-2 text-cyan-400" />
                Live Market Data
              </h5>
              <div className="space-y-2">
                {marketData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">{item.label}</span>
                    <span className={`text-xs font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white font-semibold text-xl flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-cyan-400" />
              Upcoming Events
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-4 hover:bg-slate-700/30 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-cyan-500/30 group">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntelligenceHub;
