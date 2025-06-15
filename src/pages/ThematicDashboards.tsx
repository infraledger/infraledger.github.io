
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ThematicDashboards = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
    <Navigation />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4 text-center">
        Thematic Dashboards
      </h1>
      <p className="text-slate-400 text-lg mb-6 text-center">
        Explore dashboards focusing on sectors, regions, and infrastructure themes.
      </p>
      <div className="rounded-xl bg-slate-900/80 p-8 text-slate-300 shadow-lg flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80"
          alt="Placeholder: charts and analytics on modern screens"
          className="w-full max-w-md rounded-lg shadow-lg mb-6 object-cover h-56"
        />
        <span className="text-yellow-400 font-medium text-lg">
          Thematic dashboards coming soon!
        </span>
        <p className="mt-2 text-slate-400 text-sm">
          Soon you’ll access custom dashboards around renewable energy, transport, and more.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);
export default ThematicDashboards;
