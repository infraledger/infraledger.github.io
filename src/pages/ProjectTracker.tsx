
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectTracker = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
    <Navigation />
    <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-4 text-center">
        Project Tracker
      </h1>
      <p className="text-slate-400 text-lg mb-6 text-center">
        Explore infrastructure project pipelines, track project statuses globally, and visualize key analytics.
      </p>
      <div className="rounded-xl bg-slate-900/80 p-8 text-slate-300 shadow-lg flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
          alt="Placeholder: team analyzing project screens"
          className="w-full max-w-md rounded-lg shadow-lg mb-6 object-cover h-56"
        />
        <span className="text-yellow-400 font-medium text-lg">
          Project tracker dashboard coming soon!
        </span>
        <p className="mt-2 text-slate-400 text-sm">
          You’ll soon be able to search and track major infrastructure projects.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);
export default ProjectTracker;
