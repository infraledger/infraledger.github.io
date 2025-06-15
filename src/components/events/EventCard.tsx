
import { Calendar, MapPin, Users2, User2, Video } from "lucide-react";

type EventCardProps = {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    type: string;
    category: string;
    img: string;
    speakers: { name: string; title: string }[];
    attendees: number;
    online: boolean;
    description: string;
  };
};

function formatCardDate(dateStr: string) {
  const dt = new Date(dateStr);
  return dt.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-lg shadow-xl flex flex-col h-full overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-cyan-400/10 duration-300">
      <div className="relative">
        <img
          src={event.img}
          alt={event.title}
          className="h-40 w-full object-cover object-center rounded-t-lg"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 inline-flex items-center bg-cyan-700/90 text-white text-xs font-bold px-3 py-1 rounded shadow">
          {event.category}
        </span>
        {event.online && (
          <span className="absolute top-3 right-3 bg-blue-600/80 text-white flex items-center px-2 py-0.5 text-xs rounded gap-1 shadow">
            <Video className="w-3 h-3" /> Online
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
          <Calendar className="w-4 h-4" />
          <span>{formatCardDate(event.date)}</span>
          <MapPin className="w-4 h-4 ml-2" />
          <span>{event.location}</span>
        </div>
        <h2 className="text-lg font-bold text-white mb-2">{event.title}</h2>
        <p className="text-slate-300 text-sm flex-1 line-clamp-3 mb-2">{event.description}</p>
        <div className="flex flex-wrap gap-2 items-end mb-2">
          {event.speakers.map((s, i) => (
            <span
              key={i}
              className="flex items-center bg-slate-800/70 text-xs text-cyan-300 px-2 py-1 rounded-full border border-cyan-900"
              title={s.title}
            >
              <User2 className="w-3 h-3 mr-1" />
              {s.name}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-center text-slate-400 text-xs gap-1">
            <Users2 className="w-4 h-4" /> {event.attendees} attending
          </div>
          <span className="bg-slate-800/60 text-xs px-2 py-0.5 rounded">
            {event.type}
          </span>
        </div>
      </div>
    </div>
  );
}
