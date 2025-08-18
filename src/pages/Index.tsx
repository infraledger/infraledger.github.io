
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Globe, Building, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const platformFeatures = [
    {
      title: "Market Analysis",
      description: "Deep insights into infrastructure market trends, sector performance, and investment flows",
      icon: TrendingUp,
      link: "/market-analysis",
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      stats: "2,847 Active Projects"
    },
    {
      title: "Key Deals",
      description: "Track the most significant infrastructure transactions, mergers, and investment deals",
      icon: DollarSign,
      link: "/key-deals", 
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      stats: "$32.9B Total Volume"
    },
    {
      title: "Market Snapshot",
      description: "Real-time overview of global infrastructure markets with advanced filtering",
      icon: Globe,
      link: "/market-snapshot",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      stats: "156 Global Markets"
    },
    {
      title: "Events",
      description: "Connect with industry leaders at premier conferences and networking events",
      icon: Building,
      link: "/events",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      stats: "60K+ Attendees"
    }
  ];

  const marketHighlights = [
    {
      title: "Green Infrastructure Surge",
      value: "+24.5%",
      description: "Renewable energy investments leading global infrastructure growth",
      trend: "up",
      color: "text-emerald-400"
    },
    {
      title: "Asia-Pacific Dominance", 
      value: "39.4%",
      description: "Market share of global infrastructure investment volume",
      trend: "up",
      color: "text-blue-400"
    },
    {
      title: "Digital Transformation",
      value: "+31.4%",
      description: "Smart infrastructure and IoT adoption acceleration",
      trend: "up", 
      color: "text-purple-400"
    }
  ];

  const liveStats = [
    { label: "Global Investment", value: "$2.8T", change: "+8.7%" },
    { label: "Active Projects", value: "15,647", change: "+12.3%" },
    { label: "Green Projects", value: "68%", change: "+15.2%" },
    { label: "Countries", value: "156", change: "+2.1%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <main className="flex-1">
        
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full blur-2xl animate-pulse delay-500" />

          <div className="relative max-w-7xl mx-auto text-center z-10">
            {/* Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
                <span className="text-slate-300 text-sm font-medium">Global Infrastructure Intelligence Platform</span>
                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse delay-300" />
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                InfraLedger
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              Navigate the <span className="text-cyan-400 font-semibold">$3 trillion</span> global infrastructure market with 
              <span className="text-emerald-400 font-semibold"> real-time intelligence</span>, comprehensive deal tracking, and strategic insights
            </p>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {liveStats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">{stat.value}</div>
                  <div className="text-slate-400 text-sm mb-2">{stat.label}</div>
                  <div className="text-green-400 text-xs font-semibold">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-10 py-5 text-lg shadow-2xl border border-cyan-500/30 transition-all duration-300 hover:scale-105 rounded-2xl"
              >
                Explore Markets
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white px-10 py-5 text-lg backdrop-blur-xl transition-all duration-300 rounded-2xl hover:border-white/40"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Market Highlights Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
                Market Pulse
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                Real-time insights driving tomorrow's infrastructure decisions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {marketHighlights.map((highlight, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
                  <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden group-hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`text-4xl font-black ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                          {highlight.value}
                        </div>
                        <TrendingUp className={`h-6 w-6 ${highlight.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Platform Features Section */}
        <section className="py-24 px-4 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-6">
                Navigate Global Markets
              </h2>
              <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
                Access comprehensive market intelligence, deal flow analysis, and industry insights in one unified platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {platformFeatures.map((feature, index) => (
                <Link key={index} to={feature.link} className="group block">
                  <div className="relative h-full">
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />
                    
                    <Card className="relative h-full bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 rounded-3xl overflow-hidden group-hover:scale-105 group-hover:border-white/20">
                      <CardContent className="p-8 h-full flex flex-col">
                        {/* Icon Section */}
                        <div className={`${feature.bgColor} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <feature.icon className="h-8 w-8 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                            {feature.description}
                          </p>
                        </div>
                        
                        {/* Stats & CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="text-cyan-400 text-sm font-semibold">{feature.stats}</div>
                          <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
