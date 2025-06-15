
import { TrendingUp } from "lucide-react";

interface TrendingBarProps {
  trendingTopics: string[];
}

const TrendingBar = ({ trendingTopics }: TrendingBarProps) => (
  <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-cyan-400 py-2 overflow-hidden border-b border-cyan-500/20 shadow-lg">
    <div className="max-w-7xl mx-auto">
      <div className="flex animate-scroll">
        <div className="flex items-center space-x-8 whitespace-nowrap">
          <div className="flex items-center space-x-2 font-semibold">
            <TrendingUp className="h-4 w-4 text-cyan-400" />
            <span className="text-sm bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
              TRENDING:
            </span>
          </div>
          {trendingTopics.map((topic, index) => (
            <span
              key={index}
              className="text-sm text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors duration-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TrendingBar;
