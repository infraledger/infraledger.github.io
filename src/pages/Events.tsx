
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
    date: "Jun 25-26, 2025", 
    title: "Solar & Storage Live Valencia", 
    location: "Valencia, Spain",
    type: "Conference",
    category: "Conferences & Summits",
    img: "/photo-1461749280684-dccba630e2f6.jpg",
    attendees: 2500,
    description: "Leading European event for solar and energy storage professionals featuring the latest technological innovations and market insights.",
    sectors: ["Energy", "Solar", "Storage"],
    online: false,
    speakers: [
      { name: "Dr. Maria Santos", title: "Solar Innovation Director" },
      { name: "Erik Johansson", title: "Energy Storage Expert" }
    ]
  },
  { 
    id: 2,
    date: "Jul 1-3, 2025", 
    title: "AgriVoltaics World Conference", 
    location: "Freiburg, Germany",
    type: "Conference",
    category: "Conferences & Summits",
    img: "/photo-1500673922987-e212871fec22.jpg",
    attendees: 800,
    description: "Global summit on combining agriculture with solar energy production, featuring case studies and policy discussions.",
    sectors: ["Energy", "Agricultural", "Sustainability"],
    online: false,
    speakers: [
      { name: "Prof. Hans Mueller", title: "AgriSolar Research Lead" }
    ]
  },
  { 
    id: 3,
    date: "Jul 2-4, 2025", 
    title: "ASEAN Sustainable Energy Week", 
    location: "Bangkok, Thailand",
    type: "Trade Show",
    category: "Trade Shows",
    img: "/photo-1486312338219-ce68d2c6f44d.jpg",
    attendees: 5000,
    description: "Southeast Asia's premier platform for sustainable energy solutions and infrastructure development.",
    sectors: ["Energy", "Sustainability", "Policy"],
    online: false,
    speakers: [
      { name: "Sukanya Patel", title: "ASEAN Energy Director" },
      { name: "Li Wei", title: "Renewable Systems Engineer" }
    ]
  },
  { 
    id: 4,
    date: "Sep 8-11, 2025", 
    title: "RE+ (Solar, ESI & Smart Energy)", 
    location: "Las Vegas, USA",
    type: "Exhibition",
    category: "Trade Shows",
    img: "/photo-1605810230434-7631ac76ec81.jpg",
    attendees: 25000,
    description: "North America's largest renewable energy event bringing together the solar, energy storage, and smart energy sectors.",
    sectors: ["Energy", "Solar", "Storage", "Smart Grid"],
    online: false,
    speakers: [
      { name: "Jennifer Walsh", title: "Solar Industry Association" },
      { name: "David Rodriguez", title: "Grid Modernization Expert" }
    ]
  },
  { 
    id: 5,
    date: "Sep 9-11, 2025", 
    title: "Enlit Asia", 
    location: "Bangkok, Thailand",
    type: "Conference",
    category: "Conferences & Summits",
    img: "/photo-1501854140801-50d01698950b.jpg",
    attendees: 3500,
    description: "Asia's most important energy event covering the entire energy value chain and digital transformation.",
    sectors: ["Energy", "Digital", "Grid Modernization"],
    online: false,
    speakers: [
      { name: "Akiko Tanaka", title: "Energy Digital Solutions" },
      { name: "Raj Kumar", title: "Smart Grid Technologies" }
    ]
  },
  { 
    id: 6,
    date: "Sep 30-Oct 2, 2025", 
    title: "Wetex & Dubai Solar Show", 
    location: "Dubai, UAE",
    type: "Exhibition",
    category: "Trade Shows",
    img: "/photo-1488590528505-98d2b5aba04b.jpg",
    attendees: 15000,
    description: "Middle East's largest water, energy, technology and environment exhibition showcasing cutting-edge solutions.",
    sectors: ["Energy", "Water", "Environment", "Technology"],
    online: false,
    speakers: [
      { name: "Ahmed Al-Rashid", title: "MENA Energy Council" },
      { name: "Sarah Hassan", title: "Water Technology Innovations" }
    ]
  },
  {
    id: 7,
    date: "Oct 15-17, 2025",
    title: "Global Infrastructure Investment Summit",
    location: "London, UK",
    type: "Summit",
    category: "Conferences & Summits",
    img: "/photo-1518770660439-4636190af475.jpg",
    attendees: 1200,
    description: "Premier gathering of infrastructure investors, policymakers, and project developers from around the world.",
    sectors: ["Finance", "Investment", "Policy"],
    online: false,
    speakers: [
      { name: "Lord James Hamilton", title: "Infrastructure Investment Board" },
      { name: "Catherine Morrison", title: "Global Infrastructure Partners" }
    ]
  },
  {
    id: 8,
    date: "Nov 5-7, 2025",
    title: "Transport Infrastructure Expo",
    location: "Singapore",
    type: "Exhibition",
    category: "Trade Shows",
    img: "/photo-1485827404703-89b55fcc595e.jpg",
    attendees: 8000,
    description: "Asia-Pacific's leading exhibition for transport infrastructure, covering rail, road, ports, and aviation.",
    sectors: ["Transport", "Rail", "Aviation", "Ports"],
    online: false,
    speakers: [
      { name: "Michael Chen", title: "APAC Transport Authority" },
      { name: "Lisa Wang", title: "Smart Mobility Solutions" }
    ]
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
