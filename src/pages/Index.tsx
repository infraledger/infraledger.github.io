
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Navigation from "@/components/Navigation";
import FeaturedArticles from "@/components/FeaturedArticles";
import AppSidebar from "@/components/AppSidebar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full min-h-screen">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <Navigation />
            <main className="flex-1">
              <FeaturedArticles />
              <Newsletter />
              <Footer />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Index;
