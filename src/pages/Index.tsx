
import { SidebarProvider } from "@/components/ui/sidebar";
import Navigation from "@/components/Navigation";
import FeaturedArticles from "@/components/FeaturedArticles";
import AppSidebar from "@/components/AppSidebar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 bg-white">
            <FeaturedArticles />
            <Newsletter />
            <Footer />
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
