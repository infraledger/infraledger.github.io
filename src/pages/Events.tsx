
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/events/EventCard";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dummy data for placeholder events
const EVENTS = [
  {
    id: 1,
    title: "Global Infrastructure Leaders Summit",
    date: "2025-07-10",
    location: "London, UK",
    type: "Conference",
    category: "Conferences & Summits",
    img: "/photo-1605810230434-7631ac76ec81.jpg",
    speakers: [
      { name: "Dr. Emma Wang", title: "CEO, InfraGlobal" },
      { name: "Liam Morgan", title: "Head of Projects, EU" },
    ],
    attendees: 400,
    online: false,
    description: "Explore the future of global infrastructure investment, technology, and policy with top leaders worldwide.",
  },
  {
    id: 2,
    title: "Sustainable Transport Webinar",
    date: "2025-08-01",
    location: "Online",
    type: "Webinar",
    category: "Webinars & Online Events",
    img: "/photo-1461749280684-dccba630e2f6.jpg",
    speakers: [
      { name: "Prof. Ana Reyes", title: "Transport Policy Expert" },
    ],
    attendees: 180,
    online: true,
    description: "Panel of experts on climate change mitigation through public transport infrastructure investment.",
  },
  {
    id: 3,
    title: "Asia-Pacific Smart Cities Expo",
    date: "2025-08-24",
    location: "Singapore",
    type: "Expo",
    category: "Trade Shows",
    img: "/photo-1500673922987-e212871fec22.jpg",
    speakers: [
      { name: "Satoshi Tanaka", title: "Smart Cities Leader, APAC" },
      { name: "Lina Becker", title: "CTO, NextInfra" },
    ],
    attendees: 900,
    online: false,
    description: "Innovations in urban infrastructure for rapidly growing cities across Asia-Pacific.",
  },
  {
    id: 4,
    title: "Hydrogen Tech Insights Workshop",
    date: "2025-09-14",
    location: "Munich, Germany",
    type: "Workshop",
    category: "Workshops & Training",
    img: "/photo-1486312338219-ce68d2c6f44d.jpg",
    speakers: [
      { name: "Oliver Brandt", title: "HydrogenTech AG" },
    ],
    attendees: 64,
    online: false,
    description: "Hands-on workshop exploring the practical deployment of hydrogen technology.",
  },
  {
    id: 5,
    title: "Circular Waste Summit",
    date: "2025-07-24",
    location: "Los Angeles, USA",
    type: "Summit",
    category: "Conferences & Summits",
    img: "/photo-1501854140801-50d01698950b.jpg",
    speakers: [
      { name: "Julia Becker", title: "VP Circular Economy, CleanLoop" },
      { name: "Rahul Singh", title: "Founder, BruClean" },
    ],
    attendees: 245,
    online: false,
    description: "Leaders in waste management, policy, and technology tackle zero waste strategies.",
  }
];

const CATEGORIES = [
  "Conferences & Summits",
  "Webinars & Online Events",
  "Networking Events",
  "Trade Shows",
  "Workshops & Training",
  "Company Events"
];

const VIEW_OPTIONS = [
  { key: "list", label: "List View" },
  { key: "calendar", label: "Calendar View" },
];

function formatDate(dateStr: string) {
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

export default function EventsPage() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredEvents = selectedCategory
    ? EVENTS.filter(e => e.category === selectedCategory)
    : EVENTS;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Navigation />
      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-200 bg-clip-text text-transparent mb-2">
              Infrastructure Events
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-xl">
              Discover conferences, expos, webinars and meetups across the global infrastructure sector. Stay current, network, and build your professional presence.
            </p>
          </div>
          <div className="flex gap-2 ml-auto">
            {VIEW_OPTIONS.map(v => (
              <Button
                key={v.key}
                variant={view === v.key ? "default" : "outline"}
                className="flex items-center space-x-2"
                onClick={() => setView(v.key as "list" | "calendar")}
              >
                {v.key === "calendar" && <Calendar className="h-4 w-4 mr-1" />}
                {v.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
          >
            All Categories
          </Button>
          {CATEGORIES.map(c => (
            <Button
              key={c}
              variant={selectedCategory === c ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(c)}
            >
              {c}
            </Button>
          ))}
        </div>

        {view === "list" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.length === 0 ? (
              <div className="text-slate-400 col-span-full text-center py-12">
                No events found for this category.
              </div>
            ) : (
              filteredEvents.map((ev) => (
                <EventCard key={ev.id} event={ev} />
              ))
            )}
          </div>
        ) : (
          <div className="bg-slate-900/80 rounded-lg p-10 text-center text-cyan-300">
            <Calendar className="mx-auto mb-3 h-8 w-8" />
            <div className="font-bold text-xl mb-2">Calendar view coming soon</div>
            <div className="text-slate-400 max-w-md mx-auto">Interactive event calendar integration is in progress. For now, explore all events in the list view above!</div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
