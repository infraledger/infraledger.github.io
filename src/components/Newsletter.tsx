
import { Mail, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-yellow-600 p-3 rounded-full">
              <Mail className="h-8 w-8 text-slate-900" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead of Infrastructure Markets
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Get exclusive insights, market analysis, and project updates delivered to your inbox. 
            Join 50,000+ infrastructure professionals who trust InfraLedger.
          </p>
        </div>

        <Card className="bg-slate-800 border-slate-700 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-yellow-400"
              />
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-slate-900 font-semibold whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="h-4 w-4 text-yellow-400" />
            <span>Weekly Market Reports</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="h-4 w-4 text-yellow-400" />
            <span>Exclusive Project Insights</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <TrendingUp className="h-4 w-4 text-yellow-400" />
            <span>Early Access to Reports</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
