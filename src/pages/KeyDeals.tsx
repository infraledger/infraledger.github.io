import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, DollarSign, Building } from "lucide-react";

const KeyDeals = () => {
  const deals = [
    {
      id: 1,
      title: "European Green Energy Consortium",
      sector: "Energy",
      value: "$12.4B",
      location: "Multiple EU Countries",
      date: "Dec 2024",
      status: "Closed",
      description: "Largest renewable energy portfolio acquisition in European history, including 50+ wind and solar projects across 8 countries.",
      participants: ["BlackRock Infrastructure", "Brookfield Renewable", "Ørsted"],
      type: "Acquisition"
    },
    {
      id: 2,
      title: "Asia-Pacific Rail Network Expansion",
      sector: "Transport",
      value: "$8.7B",
      location: "Southeast Asia",
      date: "Nov 2024",
      status: "Announced",
      description: "High-speed rail development connecting major cities across Thailand, Malaysia, and Singapore.",
      participants: ["Asian Development Bank", "China Railway Group", "Local Governments"],
      type: "PPP"
    },
    {
      id: 3,
      title: "North American Data Center Portfolio",
      sector: "Digital",
      value: "$5.2B",
      location: "USA & Canada",
      date: "Oct 2024",
      status: "Closed",
      description: "Strategic acquisition of 25 hyperscale data centers to support growing cloud infrastructure demand.",
      participants: ["Digital Realty Trust", "KKR Infrastructure", "CPP Investments"],
      type: "Sale-Leaseback"
    },
    {
      id: 4,
      title: "Middle East Water Infrastructure Fund",
      sector: "Water",
      value: "$3.8B",
      location: "GCC Countries",
      date: "Sep 2024",
      status: "In Progress",
      description: "Comprehensive water treatment and desalination projects addressing regional water security challenges.",
      participants: ["Masdar", "ACWA Power", "Suez", "Regional Sovereign Funds"],
      type: "Fund Formation"
    },
    {
      id: 5,
      title: "UK Social Housing Development",
      sector: "Housing",
      value: "$2.9B",
      location: "United Kingdom",
      date: "Aug 2024",
      status: "Closed",
      description: "Large-scale affordable housing development across 12 UK cities, targeting 15,000 new units.",
      participants: ["L&G Capital", "Places for People", "UK Government"],
      type: "Development Partnership"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Closed": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Announced": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "In Progress": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case "Energy": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Transport": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Digital": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "Water": return "bg-blue-600/20 text-blue-300 border-blue-600/30";
      case "Housing": return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Navigation />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10">
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4 text-center">
            Key Deals
          </h1>
          <p className="text-slate-400 text-lg text-center mx-auto max-w-3xl">
            Track the most significant infrastructure transactions, mergers, and investment deals shaping the global market
          </p>
        </div>

        {/* Deal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">$32.9B</div>
              <div className="text-slate-400 text-sm">Total Deal Volume (Q4)</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardContent className="p-6 text-center">
              <Building className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">247</div>
              <div className="text-slate-400 text-sm">Active Deals</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">89</div>
              <div className="text-slate-400 text-sm">Closed This Quarter</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/70 border-slate-700/50">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">45</div>
              <div className="text-slate-400 text-sm">Countries</div>
            </CardContent>
          </Card>
        </div>

        {/* Deals List */}
        <div className="space-y-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="bg-slate-900/70 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-white text-xl mb-2">{deal.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getSectorColor(deal.sector)}>{deal.sector}</Badge>
                      <Badge className={getStatusColor(deal.status)}>{deal.status}</Badge>
                      <Badge variant="outline" className="border-slate-600 text-slate-300">{deal.type}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{deal.value}</div>
                    <div className="text-slate-400 text-sm">{deal.date}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {deal.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">{deal.description}</p>
                <div>
                  <h4 className="text-white font-medium mb-2">Key Participants:</h4>
                  <div className="flex flex-wrap gap-2">
                    {deal.participants.map((participant, index) => (
                      <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300 border-slate-600">
                        {participant}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default KeyDeals;