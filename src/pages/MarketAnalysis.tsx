import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Activity, DollarSign, Clock, User, Building2, FileText, Target } from "lucide-react";

const MarketAnalysis = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const newsArticles = [
    // Market Articles
    {
      id: 1,
      title: "Global Infrastructure Investment Reaches Record $2.8 Trillion in 2024",
      category: "Market",
      excerpt: "Unprecedented capital flows into infrastructure projects worldwide, driven by green energy transition and digital transformation initiatives.",
      author: "Sarah Chen",
      date: "2024-12-15",
      readTime: "5 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Asian Infrastructure Markets Outperform Global Averages by 18%",
      category: "Market",
      excerpt: "Strong government backing and private sector participation fuel exceptional growth across Asia-Pacific infrastructure sectors.",
      author: "David Kim",
      date: "2024-12-14",
      readTime: "4 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "ESG Infrastructure Funds Attract $440B in New Capital This Year",
      category: "Market",
      excerpt: "Environmental, social, and governance focused infrastructure investments continue to dominate institutional allocations.",
      author: "Maria Rodriguez",
      date: "2024-12-13",
      readTime: "6 min read",
      image: "/api/placeholder/400/200"
    },

    // Transaction Articles
    {
      id: 4,
      title: "BlackRock Closes $12.4B European Renewable Energy Portfolio Acquisition",
      category: "Transaction",
      excerpt: "Largest renewable energy transaction in European history includes 50+ wind and solar projects across eight countries.",
      author: "James Wilson",
      date: "2024-12-12",
      readTime: "3 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "KKR Infrastructure Partners with CPP Investments on $5.2B Data Center Deal",
      category: "Transaction",
      excerpt: "Strategic acquisition of 25 hyperscale data centers across North America to support growing cloud infrastructure demand.",
      author: "Emily Johnson",
      date: "2024-12-11",
      readTime: "4 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Brookfield and Ørsted Form $8.7B Asia-Pacific Rail Partnership",
      category: "Transaction",
      excerpt: "Joint venture to develop high-speed rail network connecting Thailand, Malaysia, and Singapore with government backing.",
      author: "Michael Zhang",
      date: "2024-12-10",
      readTime: "5 min read",
      image: "/api/placeholder/400/200"
    },

    // Profile Articles
    {
      id: 7,
      title: "Profile: How Macquarie Infrastructure Built a $200B Global Portfolio",
      category: "Profile",
      excerpt: "Deep dive into the strategies and partnerships that made Macquarie one of the world's largest infrastructure investors.",
      author: "Anna Thompson",
      date: "2024-12-09",
      readTime: "8 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 8,
      title: "Rising Star: Digital Realty Trust's Rapid Expansion Strategy",
      category: "Profile",
      excerpt: "How this REIT became a dominant force in global data center infrastructure through strategic acquisitions and partnerships.",
      author: "Robert Lee",
      date: "2024-12-08",
      readTime: "6 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 9,
      title: "Executive Spotlight: ACWA Power CEO on Middle East Infrastructure Vision",
      category: "Profile",
      excerpt: "Exclusive interview on the company's $50B pipeline and strategy for regional water and energy infrastructure development.",
      author: "Hassan Al-Rashid",
      date: "2024-12-07",
      readTime: "7 min read",
      image: "/api/placeholder/400/200"
    },

    // News Articles
    {
      id: 10,
      title: "EU Approves €300B Green Deal Infrastructure Package",
      category: "News",
      excerpt: "Historic funding commitment aims to accelerate renewable energy, sustainable transport, and digital infrastructure across member states.",
      author: "Sophie Martin",
      date: "2024-12-06",
      readTime: "4 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 11,
      title: "US Infrastructure Bill Allocates Additional $180B for 2025 Projects",
      category: "News",
      excerpt: "Congress approves supplemental funding focusing on rural broadband, electric vehicle charging networks, and climate resilience.",
      author: "John Davis",
      date: "2024-12-05",
      readTime: "5 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 12,
      title: "Asian Development Bank Launches $25B Climate Infrastructure Initiative",
      category: "News",
      excerpt: "New program targets climate adaptation and mitigation projects across developing Asian economies through 2030.",
      author: "Lisa Wang",
      date: "2024-12-04",
      readTime: "3 min read",
      image: "/api/placeholder/400/200"
    },

    // Strategy Articles
    {
      id: 13,
      title: "The Future of Infrastructure Investment: AI and Automation Trends",
      category: "Strategy",
      excerpt: "How artificial intelligence and automation technologies are reshaping infrastructure development and investment strategies.",
      author: "Dr. Alex Foster",
      date: "2024-12-03",
      readTime: "9 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 14,
      title: "Risk Management in Post-Pandemic Infrastructure Development",
      category: "Strategy",
      excerpt: "Strategic frameworks for navigating supply chain disruptions, labor shortages, and evolving regulatory landscapes.",
      author: "Catherine Brown",
      date: "2024-12-02",
      readTime: "7 min read",
      image: "/api/placeholder/400/200"
    },
    {
      id: 15,
      title: "Public-Private Partnerships: Evolving Models for Infrastructure Finance",
      category: "Strategy",
      excerpt: "Analysis of innovative PPP structures and their effectiveness in delivering large-scale infrastructure projects globally.",
      author: "Thomas Mitchell",
      date: "2024-12-01",
      readTime: "8 min read",
      image: "/api/placeholder/400/200"
    }
  ];

  const categories = ["all", "Market", "Transaction", "Profile", "News", "Strategy"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Market": return <TrendingUp className="h-4 w-4" />;
      case "Transaction": return <DollarSign className="h-4 w-4" />;
      case "Profile": return <User className="h-4 w-4" />;
      case "News": return <FileText className="h-4 w-4" />;
      case "Strategy": return <Target className="h-4 w-4" />;
      default: return <Building2 className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Market": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Transaction": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Profile": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "News": return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
      case "Strategy": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      default: return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const filteredArticles = selectedCategory === "all" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

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

        {/* Market Analysis News */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Latest Market Intelligence</h2>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-cyan-600 hover:bg-cyan-500 text-white" 
                    : "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                  }
                >
                  {category === "all" ? "All" : category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="bg-slate-900/70 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                <Link to={`/news/${article.id}`}>
                  <div className="aspect-video bg-slate-800 rounded-t-lg mb-4 flex items-center justify-center">
                    <Building2 className="h-12 w-12 text-slate-600" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        {getCategoryIcon(article.category)}
                        <span className="ml-1">{article.category}</span>
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{article.date}</div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default MarketAnalysis;