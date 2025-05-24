
import { useState } from "react";
import { Search, Menu, TrendingUp, Globe, Building, DollarSign, BarChart3, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import MarketDashboard from "@/components/MarketDashboard";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <MarketDashboard />
      <FeaturedArticles />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
