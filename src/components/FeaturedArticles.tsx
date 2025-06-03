
import { Clock, User, ArrowRight, Zap, Building2, Globe2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedArticles = () => {
  const newsHighlights = [
    {
      id: 1,
      category: "Renewable Energy",
      subcategory: "Solar",
      title: "Solar Manufacturing Faces Headwinds",
      summary: "Swiss solar manufacturer Meyer Burger ceased production at its Arizona facility, laying off 282 employees due to financial difficulties, highlighting ongoing challenges in the solar manufacturing sector despite overall market growth.",
      author: "Energy Correspondent",
      publishTime: "2 hours ago",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=400",
      priority: "high"
    },
    {
      id: 2,
      category: "Renewable Energy",
      subcategory: "Investment",
      title: "Grenergy Announces Major BESS Investment",
      summary: "Grenergy outlined a €3.5 billion investment plan for 2025-2027, targeting battery energy storage systems (BESS) and hybrid renewable projects, emphasizing the growing importance of storage solutions.",
      author: "Investment Analyst",
      publishTime: "4 hours ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=400",
      priority: "high"
    },
    {
      id: 3,
      category: "Transportation",
      subcategory: "Aviation",
      title: "Urgent Call for US Air Traffic Control System Overhaul",
      summary: "U.S. officials are calling for a complete multi-billion dollar rebuild of the aging national air traffic control (ATC) system, citing recent disruptions and system vulnerabilities.",
      author: "Transport Editor",
      publishTime: "6 hours ago",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=400",
      priority: "breaking"
    },
    {
      id: 4,
      category: "Transportation",
      subcategory: "Rail",
      title: "High-Speed Rail Developments in Europe and Asia",
      summary: "Estonia signed $1.06 billion in construction contracts for the Rail Baltica project, and Czechia broke ground on its first high-speed rail line. Vietnam plans to commence development of its Hanoi-Ho Chi Minh City HSR in December 2025.",
      author: "Infrastructure Reporter",
      publishTime: "8 hours ago",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=400",
      priority: "normal"
    },
    {
      id: 5,
      category: "Renewable Energy",
      subcategory: "Hydrogen",
      title: "Green Hydrogen Project Challenges",
      summary: "Saudi Neom's major green hydrogen initiative is reportedly struggling to secure off-take agreements, while Statkraft advances plans for new green hydrogen projects, indicating both progress and market uncertainties in the sector.",
      author: "Energy Analyst",
      publishTime: "10 hours ago",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=400",
      priority: "normal"
    },
    {
      id: 6,
      category: "Transportation",
      subcategory: "Ports",
      title: "Major Port Expansion Projects Advance",
      summary: "The Houston Ship Channel Expansion (Project 11) is now approximately 70% dredged. Salt Lake City's Utah Inland Port has started site work, and the Port of Palm Beach completed Phase 1 of its infrastructure development program.",
      author: "Port Correspondent",
      publishTime: "12 hours ago",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&h=400",
      priority: "normal"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Renewable Energy":
        return <Zap className="h-4 w-4" />;
      case "Transportation":
        return <Globe2 className="h-4 w-4" />;
      default:
        return <Building2 className="h-4 w-4" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "breaking":
        return <Badge className="bg-red-600/20 text-red-400 border-red-600/30 animate-pulse">BREAKING</Badge>;
      case "high":
        return <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">HIGH PRIORITY</Badge>;
      default:
        return null;
    }
  };

  return (
    <section className="py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full"></div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Global Infrastructure Intelligence Hub
            </h2>
          </div>
          <p className="text-lg text-slate-400 mb-2">Daily Briefing: May 30, 2025</p>
          <div className="h-px bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent"></div>
        </div>

        {/* Featured Story */}
        <div className="mb-12">
          <Card className="bg-slate-800/50 border-slate-700/50 shadow-2xl backdrop-blur-lg overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
            <div className="relative">
              <img 
                src={newsHighlights[0].image}
                alt="Featured story"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                {getPriorityBadge(newsHighlights[0].priority)}
                <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-600/30">
                  {getCategoryIcon(newsHighlights[0].category)}
                  <span className="ml-1">{newsHighlights[0].subcategory}</span>
                </Badge>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
                  {newsHighlights[0].title}
                </h1>
                <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                  {newsHighlights[0].summary}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{newsHighlights[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{newsHighlights[0].publishTime}</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold border border-cyan-500/30">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-3"></div>
            Key News Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsHighlights.slice(1).map((article) => (
              <Card key={article.id} className="bg-slate-800/30 border-slate-700/50 shadow-xl backdrop-blur-lg hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    {getPriorityBadge(article.priority)}
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-slate-900/80 text-cyan-400 border-cyan-500/30 backdrop-blur-sm">
                      {getCategoryIcon(article.category)}
                      <span className="ml-1">{article.subcategory}</span>
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.publishTime}
                      </span>
                    </div>
                    <span className="text-cyan-400">{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
