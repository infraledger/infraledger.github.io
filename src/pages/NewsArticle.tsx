import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, User, Share2, Bookmark, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Placeholder article data - in real app this would come from API/database
  const articles = {
    "1": {
      id: 1,
      title: "Global Infrastructure Investment Reaches $2.8 Trillion in 2024",
      summary: "New data reveals unprecedented capital flows into sustainable infrastructure projects across emerging markets, with renewable energy leading the charge at 35% of total investments.",
      content: `
        <p>The global infrastructure investment landscape has reached an unprecedented milestone in 2024, with total commitments surpassing $2.8 trillion according to newly released data from the International Infrastructure Investment Alliance (IIIA).</p>
        
        <p>This massive influx of capital represents a 15.3% increase from 2023 figures and marks the highest annual investment total on record. The surge is primarily driven by increased focus on sustainable and climate-resilient infrastructure projects across emerging markets.</p>
        
        <h3>Renewable Energy Dominates Investment Flow</h3>
        <p>Renewable energy infrastructure commands the largest share of investments, accounting for approximately 35% of the total $2.8 trillion. Solar and wind projects in Asia-Pacific and Latin America have attracted particularly strong investor interest, with mega-projects in India, Brazil, and Indonesia leading the charge.</p>
        
        <p>"We're witnessing a fundamental shift in how institutional investors view infrastructure assets," said Dr. Elena Rodriguez, Chief Investment Officer at Global Infrastructure Partners. "Climate resilience and long-term sustainability are no longer nice-to-have features – they're essential criteria for investment decisions."</p>
        
        <h3>Geographic Distribution and Market Dynamics</h3>
        <p>The geographic distribution of investments shows a marked shift toward emerging markets, which captured 58% of total flows compared to 45% in 2023. This trend reflects both the massive infrastructure needs in developing economies and the attractive risk-adjusted returns available in these markets.</p>
        
        <p>Key investment corridors include:</p>
        <ul>
          <li>Southeast Asia transportation networks: $340 billion</li>
          <li>African renewable energy projects: $280 billion</li>
          <li>Latin American digital infrastructure: $185 billion</li>
          <li>Middle Eastern water security initiatives: $220 billion</li>
        </ul>
        
        <h3>Policy Frameworks Drive Investment Confidence</h3>
        <p>The acceleration in infrastructure investment coincides with improved policy frameworks and regulatory certainty in key markets. Governments across emerging economies have implemented infrastructure-friendly policies, including streamlined permitting processes, enhanced property rights protections, and innovative public-private partnership structures.</p>
        
        <p>The IIIA report highlights that policy stability and transparent governance frameworks are increasingly critical factors in investment decisions, often outweighing traditional risk metrics in importance.</p>
        
        <h3>Looking Ahead: Sustainable Growth Trajectory</h3>
        <p>Industry analysts project continued growth in infrastructure investment through 2025, with estimates suggesting total flows could reach $3.2 trillion. However, this growth will depend heavily on continued policy support, technological advancement, and the availability of skilled project management capabilities.</p>
        
        <p>The infrastructure sector's evolution toward sustainability and resilience appears irreversible, setting the stage for continued robust investment flows in the coming years.</p>
      `,
      author: "Sarah Chen",
      publishTime: "2 hours ago",
      category: "Market Analysis",
      sector: "Energy",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=600",
      featured: true,
      type: "Analysis"
    }
  };

  // Get the article or use a default
  const article = articles[id as string] || {
    id: parseInt(id || "1"),
    title: "Sample Infrastructure News Article",
    summary: "This is a placeholder article demonstrating the news article page layout and content structure.",
    content: `
      <p>This is a sample infrastructure news article with placeholder content. In a production environment, this content would be dynamically loaded from a database or content management system.</p>
      
      <h3>Key Points</h3>
      <p>This article format includes:</p>
      <ul>
        <li>Professional news article layout</li>
        <li>Rich text content with headings and lists</li>
        <li>Author information and publication details</li>
        <li>Social sharing capabilities</li>
        <li>Related articles suggestions</li>
      </ul>
      
      <p>The content structure supports various types of infrastructure news including market analysis, project updates, policy changes, and breaking news.</p>
      
      <h3>Technical Implementation</h3>
      <p>This news article page demonstrates a complete content management workflow suitable for a professional infrastructure news platform. The design emphasizes readability, professional presentation, and user engagement.</p>
    `,
    author: "Editorial Team",
    publishTime: "1 hour ago",
    category: "Sample Article",
    sector: "General",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=600",
    type: "Analysis"
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Solar Manufacturing Faces Supply Chain Headwinds",
      summary: "Industry challenges continue as global supply chains adapt to new market demands.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=200",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Rail Baltica Signs Major Construction Contracts",
      summary: "European infrastructure project reaches new milestone with significant contract awards.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&h=200",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 border-slate-600 text-slate-300 hover:bg-slate-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to News
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-0">
              {article.category}
            </Badge>
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              {article.sector}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          
          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            {article.summary}
          </p>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.publishTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        {/* Article Content */}
        <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg mb-8">
          <CardContent className="p-8">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: 'rgb(203 213 225)', // text-slate-300
              }}
            />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((related) => (
              <Card 
                key={related.id}
                onClick={() => navigate(`/news/${related.id}`)}
                className="bg-slate-800/30 border-slate-700/50 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={related.image}
                    alt={related.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {related.title}
                  </h4>
                  <p className="text-slate-400 text-sm mb-2 line-clamp-2">
                    {related.summary}
                  </p>
                  <span className="text-xs text-slate-500">{related.readTime}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;