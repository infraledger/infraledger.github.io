
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const Newsletter = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="flex justify-center mb-3">
            <div className="bg-slate-900 p-2 rounded-full">
              <Mail className="h-5 w-5 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Daily Infrastructure Intelligence
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto text-sm">
            Get the latest infrastructure investment insights delivered to your inbox. 
            Join 50,000+ professionals who trust InfraLedger.
          </p>
        </div>

        <Card className="bg-white border border-slate-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border-slate-300 focus:border-slate-500 text-sm"
              />
              <Button className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
