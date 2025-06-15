
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FinancialMetricCard from "@/components/financial/FinancialMetricCard";
import FinancialTrendsChart from "@/components/financial/FinancialTrendsChart";
import SectorAllocationPie from "@/components/financial/SectorAllocationPie";
import InvestmentTable from "@/components/financial/InvestmentTable";
import RiskOpportunityDashboard from "@/components/financial/RiskOpportunityDashboard";
import { Banknote, Leaf, Users, BarChart3, Globe, Percent } from "lucide-react";

const metricData = [
  {
    icon: <Banknote className="text-cyan-400" size={26} />,
    label: "Total Investment (2024)",
    value: "$2.1T",
    growth: "+8.4%",
    positive: true
  },
  {
    icon: <Leaf className="text-green-400" size={26} />,
    label: "Green Finance Volume",
    value: "$410B",
    growth: "+23.7%",
    positive: true
  },
  {
    icon: <Users className="text-blue-400" size={26} />,
    label: "PPP Deal Volume",
    value: "$156B",
    growth: "+5.2%",
    positive: true
  },
  {
    icon: <BarChart3 className="text-purple-400" size={26} />,
    label: "Debt Market Issuance",
    value: "$298B",
    growth: "-2.1%",
    positive: false
  },
  {
    icon: <Globe className="text-teal-400" size={26} />,
    label: "Top Region Investment",
    value: "Asia-Pacific",
    growth: "42% share",
    positive: true
  },
  {
    icon: <Percent className="text-yellow-400" size={26} />,
    label: "Risk-Adjusted Returns",
    value: "7.8% IRR",
    growth: "Avg.",
    positive: true
  }
];

const FinancialData = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
    <Navigation />
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-10 flex flex-col gap-12">

      <div className="sticky top-0 z-10 bg-gradient-to-b from-slate-950 via-slate-950/60 to-transparent pb-4 mb-2">
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-3 text-center animate-fade-in">
          Financial Data & Intelligence
        </h1>
        <p className="text-slate-400 text-lg mb-2 text-center mx-auto max-w-3xl">
          Explore the global flows shaping infrastructure investment. Visualize financial trends, analyze funding opportunities, and benchmark regional performance.
        </p>
      </div>

      <section className="mb-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
          {metricData.map((m, i) => (
            <FinancialMetricCard key={i} {...m} delay={i * 90} />
          ))}
        </div>
      </section>

      {/* Section divider */}
      <div className="relative py-2 mb-2">
        <div className="absolute inset-x-0 top-1/2 border-t border-slate-800/70 z-0" aria-hidden="true" />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FinancialTrendsChart />
        <SectorAllocationPie />
      </section>

      <div className="relative py-2 mb-2">
        <div className="absolute inset-x-0 top-1/2 border-t border-slate-800/70 z-0" aria-hidden="true" />
      </div>

      <section className="grid md:grid-cols-2 gap-10">
        <RiskOpportunityDashboard />
        <InvestmentTable />
      </section>

      <div className="max-w-2xl mx-auto mt-10 rounded-xl bg-slate-900/70 p-7 text-slate-300 shadow-lg text-center">
        <h3 className="text-cyan-200 font-bold text-xl mb-2">Want custom market insights?</h3>
        <p className="mb-3 text-slate-400 text-sm">Sign up for our newsletter and get the latest dashboards as they launch.</p>
        <form className="flex flex-col sm:flex-row gap-2 items-center justify-center max-w-md mx-auto mb-1">
          <input
            type="email"
            required
            placeholder="Your email"
            className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="px-6 py-2 mt-2 sm:mt-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold hover:scale-105 transition"
          >
            Notify Me
          </button>
        </form>
        <span className="text-xs text-slate-500">No spam — just market insight updates.</span>
      </div>
    </main>
    <Footer />
  </div>
);

export default FinancialData;
