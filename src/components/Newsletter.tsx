
import { Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-3 rounded-full shadow-2xl">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
            Daily Infrastructure Intelligence
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto text-lg">
            Get the latest infrastructure investment insights delivered to your inbox. 
            Join 50,000+ professionals who trust InfraLedger.
          </p>
        </div>

        <Card className="bg-slate-800/30 border-slate-700/50 shadow-2xl backdrop-blur-lg hover:border-cyan-500/30 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-700/50 border-slate-600 focus:border-cyan-500 focus:ring-cyan-500/20 text-white placeholder-slate-400 h-12"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Zap className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold h-12 px-8 shadow-lg border border-cyan-500/30 transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-4">
              ✨ Premium insights • 📊 Market data • 🚀 Breaking news • 🔒 Unsubscribe anytime
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
