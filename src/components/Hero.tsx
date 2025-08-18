import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]" />
      
      {/* Animated Background Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-500" />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Main Hero Content */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 backdrop-blur-sm">
              <Building2 className="h-4 w-4 text-cyan-400" />
              <span className="text-slate-300 text-sm font-medium">Global Infrastructure Intelligence</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              InfraLedger
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Navigate the $3 trillion global infrastructure market with real-time intelligence, 
            comprehensive deal tracking, and strategic market insights
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-8 py-4 text-lg shadow-xl border border-cyan-500/30 transition-all duration-300 hover:scale-105"
          >
            Explore Markets
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300"
          >
            View Live Demo
          </Button>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-slate-800/20 rounded-xl border border-slate-700/30 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Globe className="h-8 w-8 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">$2.8T</div>
            <div className="text-slate-400">Global Investment Volume</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/20 rounded-xl border border-slate-700/30 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Building2 className="h-8 w-8 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">15,647</div>
            <div className="text-slate-400">Active Projects</div>
          </div>
          
          <div className="text-center p-6 bg-slate-800/20 rounded-xl border border-slate-700/30 backdrop-blur-sm">
            <div className="flex justify-center mb-3">
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-1">68%</div>
            <div className="text-slate-400">Green Infrastructure</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;