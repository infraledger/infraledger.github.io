
import { Mail, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  const benefits = [
    "Daily market intelligence & analysis",
    "Exclusive project tracker updates", 
    "Early access to investment opportunities",
    "Expert interviews & insights"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl shadow-2xl">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-2xl animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-6">
            Daily Infrastructure Intelligence
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto text-xl">
            Join 50,000+ infrastructure professionals who rely on InfraLedger for market-moving insights, 
            project updates, and investment intelligence delivered every morning.
          </p>
        </div>

        <Card className="bg-slate-800/30 border-slate-700/50 shadow-2xl backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-500 mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-left mb-4">What You'll Get:</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 text-left">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your professional email"
                      className="bg-slate-700/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-slate-400 h-14 text-lg rounded-xl pr-12"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <Zap className="h-5 w-5 text-cyan-400" />
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold h-14 text-lg shadow-xl border border-cyan-500/30 transition-all duration-300 rounded-xl">
                    Get Daily Intelligence
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center justify-center space-x-6 text-sm text-slate-500">
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                    Free access
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                    No spam
                  </span>
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1 text-green-400" />
                    Unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-slate-800/20 rounded-xl border border-slate-700/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">$2.8T</div>
            <div className="text-slate-400">Infrastructure pipeline tracked</div>
          </div>
          <div className="p-6 bg-slate-800/20 rounded-xl border border-slate-700/30">
            <div className="text-3xl font-bold text-green-400 mb-2">50K+</div>
            <div className="text-slate-400">Professional subscribers</div>
          </div>
          <div className="p-6 bg-slate-800/20 rounded-xl border border-slate-700/30">
            <div className="text-3xl font-bold text-blue-400 mb-2">2,847</div>
            <div className="text-slate-400">Active projects monitored</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
