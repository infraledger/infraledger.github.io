
import { Clock, User, ArrowRight, Bookmark, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedArticles = () => {
  const featuredStory = {
    id: 0,
    title: "Global Infrastructure Investment Reaches $2.8 Trillion in 2024",
    summary: "New data reveals unprecedented capital flows into sustainable infrastructure projects across emerging markets, with renewable energy leading the charge at 45% of total investments.",
    author: "Sarah Chen",
    publishTime: "2 hours ago",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=600",
    readTime: "8 min read"
  };

  const articles = [
    {
      id: 1,
      title: "Singapore's $50B Smart City Initiative Breaks Ground",
      summary: "Southeast Asia's largest urban transformation project launches with focus on sustainable transport and digital infrastructure.",
      author: "Michael Rodriguez",
      publishTime: "4 hours ago",
      category: "Smart Cities",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=600&h=300",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "African Development Bank Commits $12B to Renewable Energy",
      summary: "Historic funding package targets solar and wind projects across 15 countries, supporting energy transition goals.",
      author: "Amara Okafor",
      publishTime: "6 hours ago",
      category: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=600&h=300",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "European Rail Corridor Investment Reaches €25B Milestone",
      summary: "Cross-border high-speed rail connections accelerate as EU infrastructure fund reaches major funding threshold.",
      author: "Elena Kovač",
      publishTime: "8 hours ago",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&h=300",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Digital Infrastructure Drives $200B Investment Wave",
      summary: "Data centers, fiber networks, and 5G deployments attract unprecedented private capital amid AI boom.",
      author: "James Park",
      publishTime: "10 hours ago",
      category: "Digital Infrastructure",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=300",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Water Infrastructure Crisis Sparks $180B Global Response",
      summary: "International coalition mobilizes massive funding to address water scarcity and aging infrastructure worldwide.",
      author: "Dr. Priya Sharma",
      publishTime: "12 hours ago",
      category: "Water Infrastructure",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=600&h=300",
      readTime: "9 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Market Analysis": "bg-red-600",
      "Smart Cities": "bg-purple-600",
      "Renewable Energy": "bg-green-600",
      "Transportation": "bg-blue-600",
      "Digital Infrastructure": "bg-indigo-600",
      "Water Infrastructure": "bg-cyan-600",
      "ESG & Policy": "bg-orange-600"
    };
    return colors[category as keyof typeof colors] || "bg-slate-600";
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Story */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-900">Breaking News</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="text-slate-600">
                <Bookmark className="h-4 w-4 mr-1" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="text-slate-600">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img 
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-80 object-cover"
              />
              <Badge className={`absolute top-6 left-6 text-white ${getCategoryColor(featuredStory.category)}`}>
                {featuredStory.category}
              </Badge>
            </div>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
                {featuredStory.title}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {featuredStory.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{featuredStory.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredStory.publishTime}</span>
                  </div>
                  <span className="text-slate-400">{featuredStory.readTime}</span>
                </div>
                <Button className="bg-slate-900 hover:bg-slate-800 text-white">
                  Read Full Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Latest News Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Latest Updates</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 border border-slate-200 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 text-white text-xs ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.publishTime}</span>
                      </div>
                    </div>
                    <span className="text-slate-400">{article.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="outline" className="text-slate-700 border-slate-300 hover:bg-slate-50">
            Load More Articles
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
