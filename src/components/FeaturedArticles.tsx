
import { Clock, User, TrendingUp, MapPin, DollarSign, Calendar, ArrowRight, Star, Building, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FeaturedArticles = () => {
  const { toast } = useToast();

  const handleArticleClick = (article: any) => {
    toast({
      title: `Opening: ${article.title}`,
      description: `This is a placeholder. Article ID: ${article.id}`,
    });
  };

  const featuredNews = [
    {
      id: 1,
      title: "Global Infrastructure Investment Reaches $2.8 Trillion in 2024",
      summary: "New data reveals unprecedented capital flows into sustainable infrastructure projects across emerging markets, with renewable energy leading the charge at 35% of total investments.",
      author: "Sarah Chen",
      publishTime: "2 hours ago",
      category: "Market Analysis",
      sector: "Energy",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=300",
      featured: true
    },
    {
      id: 2,
      title: "Solar Manufacturing Faces Supply Chain Headwinds",
      summary: "Swiss solar manufacturer Meyer Burger ceased production at its Arizona facility, laying off 282 employees due to financial difficulties, highlighting ongoing challenges in the solar manufacturing sector.",
      author: "Michael Rodriguez",
      publishTime: "4 hours ago",
      category: "Industry News",
      sector: "Energy",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 3,
      title: "Grenergy Announces €3.5B BESS Investment Plan",
      summary: "Grenergy outlined a major investment plan for 2025-2027, targeting battery energy storage systems (BESS) and hybrid renewable projects, emphasizing the growing importance of storage solutions.",
      author: "Elena Vasquez",
      publishTime: "6 hours ago",
      category: "Investment",
      sector: "Energy",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 4,
      title: "Rail Baltica Signs $1.06B Construction Contracts",
      summary: "Estonia signed major construction contracts for the Rail Baltica project, marking a significant milestone in the high-speed rail connection between Baltic capitals and Poland.",
      author: "James Thompson",
      publishTime: "8 hours ago",
      category: "Project Update",
      sector: "Transport",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 5,
      title: "US Air Traffic Control System Needs $25B Overhaul",
      summary: "U.S. officials are calling for a complete multi-billion dollar rebuild of the aging national air traffic control system, citing recent disruptions and system vulnerabilities.",
      author: "David Park",
      publishTime: "10 hours ago",
      category: "Policy",
      sector: "Transport",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&h=300"
    },
    {
      id: 6,
      title: "Houston Ship Channel Expansion Reaches 70% Completion",
      summary: "The Houston Ship Channel Expansion (Project 11) milestone represents a major step toward accommodating larger vessels and supporting U.S. export capabilities.",
      author: "Lisa Chang",
      publishTime: "12 hours ago",
      category: "Project Update",
      sector: "Transport",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600&h=300"
    }
  ];

  const keyMetrics = [
    { label: "Active Projects", value: "2,847", change: "+12.3%", icon: Building },
    { label: "Total Investment", value: "$2.8T", change: "+8.7%", icon: DollarSign },
    { label: "Green Projects", value: "68%", change: "+15.2%", icon: Zap },
    { label: "Completion Rate", value: "94.2%", change: "+2.1%", icon: TrendingUp }
  ];

  const marketHighlights = [
    {
      title: "Accelerating Investment in Sustainable Energy Infrastructure",
      description: "A significant surge in capital commitments for renewable energy components crucial to grid modernization and decarbonization, including large-scale BESS and green hydrogen production.",
      trend: "+24.5%",
      color: "text-green-400"
    },
    {
      title: "Modernizing Aging Transport Networks",
      description: "Global infrastructure efforts balance urgent repairs of existing systems with strategic ambitions for transformational mega-projects and connectivity hubs.",
      trend: "+18.2%",
      color: "text-blue-400"
    },
    {
      title: "Policy Frameworks Create Investment Volatility",
      description: "Despite robust market interest, policy shifts and regulatory hurdles continue to influence investment decisions and project timelines across sectors.",
      trend: "-3.1%",
      color: "text-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-2">
                Latest Infrastructure Intelligence
              </h1>
              <p className="text-slate-400 text-lg">Real-time insights driving tomorrow's infrastructure decisions</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-cyan-400">May 30, 2025</div>
              <div className="text-sm text-slate-500">Daily Briefing</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm font-medium">{metric.label}</p>
                      <p className="text-2xl font-bold text-white">{metric.value}</p>
                      <p className="text-green-400 text-sm font-semibold">{metric.change}</p>
                    </div>
                    <metric.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">
                    {featuredNews[0].category}
                  </Badge>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {featuredNews[0].sector}
                  </Badge>
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
                <h2 className="text-3xl font-bold mb-4 leading-tight text-white">
                  {featuredNews[0].title}
                </h2>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {featuredNews[0].summary}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredNews[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredNews[0].publishTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>{featuredNews[0].readTime}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={() => handleArticleClick(featuredNews[0])}
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold shadow-lg border border-cyan-500/30 transition-all duration-300"
                >
                  Read Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={featuredNews[0].image}
                  alt="Featured story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/20 to-slate-900/40" />
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 text-cyan-400 mr-2" />
            Daily Market Analysis
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {marketHighlights.map((highlight, index) => (
              <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="font-semibold text-white leading-tight">{highlight.title}</h4>
                    <span className={`text-sm font-bold ${highlight.color}`}>{highlight.trend}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Key News Highlights</h3>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.slice(1).map((article) => (
              <Card 
                key={article.id} 
                onClick={() => handleArticleClick(article)}
                className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-900/80 text-white border-0 backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                      {article.sector}
                    </Badge>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                  <h4 className="font-semibold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                    {article.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.publishTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;
