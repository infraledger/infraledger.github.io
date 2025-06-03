
import Navigation from "@/components/Navigation";
import FeaturedArticles from "@/components/FeaturedArticles";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import IntelligenceHub from "@/components/IntelligenceHub";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      <main className="flex-1">
        <FeaturedArticles />
        <IntelligenceHub />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
