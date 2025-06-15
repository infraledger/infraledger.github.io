
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FinancialData = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
    <Navigation />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4 text-center">
        Financial Data
      </h1>
      <p className="text-slate-400 text-lg mb-4 text-center">
        Analyze financial flows, investments, and funding in global infrastructure.
      </p>
      <div className="rounded-xl bg-slate-900/80 p-6 text-slate-300 text-center shadow-lg">
        <span className="text-yellow-400 font-medium">Financial data dashboard coming soon!</span>
      </div>
    </main>
    <Footer />
  </div>
);
export default FinancialData;
