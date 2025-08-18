
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
      color: "text-green-400"
    },
    {
      title: "Key Deals",
      description: "Track the most significant infrastructure transactions, mergers, and investment deals",
      icon: DollarSign,
      link: "/key-deals", 
      color: "text-blue-400"
    },
    {
      title: "Market Snapshot",
      description: "Real-time overview of global infrastructure markets with advanced filtering",
      icon: Globe,
      link: "/market-snapshot",
      color: "text-purple-400"
    },
    {
      title: "Events",
      description: "Connect with industry leaders at premier conferences and networking events",
      icon: Building,
      link: "/events",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <main className="flex-1">
        <Hero />
        
        {/* Platform Features */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              Navigate Global Infrastructure Markets
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Access comprehensive market intelligence, deal flow analysis, and industry insights in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <Link key={index} to={feature.link}>
                <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group cursor-pointer h-full">
                  <CardHeader>
                    <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                    <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-white transition-colors">
                      Explore <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
