
import { TrendingUp, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const featuredStory = {
    title: "Global Infrastructure Investment Reaches $2.8 Trillion in 2024",
    summary: "New data reveals unprecedented capital flows into sustainable infrastructure projects across emerging markets, with renewable energy leading the charge.",
    author: "Sarah Chen",
    publishTime: "2 hours ago",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=600"
  };

  const trendingTopics = [
    "Green Bonds Rally",
    "Asian Infrastructure Bank Expansion", 
    "5G Network Investments",
    "Water Infrastructure Crisis"
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Story */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg bg-slate-800 shadow-2xl">
              <img 
                src={featuredStory.image}
                alt="Featured story"
                className="w-full h-64 object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="mb-3 bg-yellow-600 text-slate-900 hover:bg-yellow-700">
                  {featuredStory.category}
                </Badge>
                <h1 className="text-3xl font-bold mb-3 leading-tight">
                  {featuredStory.title}
                </h1>
                <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                  {featuredStory.summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredStory.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredStory.publishTime}</span>
                    </div>
                  </div>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold">
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Topics & Market Highlights */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <div className="bg-slate-800 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-5 w-5 text-yellow-400" />
                <h3 className="text-lg font-semibold">Trending Now</h3>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-700 last:border-0">
                    <span className="text-slate-300 hover:text-white cursor-pointer transition-colors">
                      {topic}
                    </span>
                    <span className="text-yellow-400 text-sm">#{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Market Stats */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Market Snapshot</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Global Infra Index</span>
                  <span className="text-green-400 font-semibold">+2.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Green Bond Yield</span>
                  <span className="text-blue-400 font-semibold">3.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Project Pipeline</span>
                  <span className="text-yellow-400 font-semibold">$1.2T</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
