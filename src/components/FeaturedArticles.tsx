
import { Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Singapore's $50B Smart City Initiative Breaks Ground",
      summary: "Southeast Asia's largest urban transformation project launches with focus on sustainable transport and digital infrastructure.",
      author: "Michael Rodriguez",
      publishTime: "4 hours ago",
      category: "Smart Cities",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&w=800&h=400",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "African Development Bank Commits $12B to Renewable Energy",
      summary: "Historic funding package targets solar and wind projects across 15 countries, supporting energy transition goals.",
      author: "Amara Okafor",
      publishTime: "6 hours ago",
      category: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=400",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "European Rail Corridor Investment Reaches €25B Milestone",
      summary: "Cross-border high-speed rail connections accelerate as EU infrastructure fund reaches major funding threshold.",
      author: "Elena Kovač",
      publishTime: "8 hours ago",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=400",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Digital Infrastructure Drives $200B Investment Wave",
      summary: "Data centers, fiber networks, and 5G deployments attract unprecedented private capital amid AI boom.",
      author: "James Park",
      publishTime: "10 hours ago",
      category: "Digital Infrastructure",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&h=400",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Water Infrastructure Crisis Sparks $180B Global Response",
      summary: "International coalition mobilizes massive funding to address water scarcity and aging infrastructure worldwide.",
      author: "Dr. Priya Sharma",
      publishTime: "12 hours ago",
      category: "Water Infrastructure",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&h=400",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Infrastructure ESG Standards Transform Investment Landscape",
      summary: "New environmental and governance criteria reshape how institutional investors evaluate infrastructure opportunities.",
      author: "Robert Sterling",
      publishTime: "14 hours ago",
      category: "ESG & Policy",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&h=400",
      readTime: "4 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
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
    <section className="py-16 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Latest Infrastructure Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay informed with comprehensive coverage of global infrastructure investments, 
            market trends, and project developments shaping tomorrow's world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 text-white ${getCategoryColor(article.category)}`}>
                  {article.category}
                </Badge>
              </div>
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-yellow-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
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
                <Button variant="ghost" className="w-full group/btn text-slate-700 hover:text-yellow-600 hover:bg-yellow-50">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-lg">
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
