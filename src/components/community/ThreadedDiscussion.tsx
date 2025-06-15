
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Demo nested threads. Real data would be recursive tree structure.
const demoThread = [
  {
    id: 11,
    author: "Vanessa Lee",
    verified: false,
    content: "Great summary. What lessons are most critical for future green hydrogen projects?",
    upvotes: 8,
    replies: [
      {
        id: 12,
        author: "Dr. Sarah Chen",
        verified: true,
        content: "Integration planning and early stakeholder engagement. Policy support is crucial.",
        upvotes: 12,
        replies: [],
      },
    ],
  },
];

function Thread({ post }: { post: any }) {
  const [vote, setVote] = useState(0);

  return (
    <div className="border-l-2 border-cyan-800 pl-4 mb-3">
      <div className="flex items-center text-sm gap-2 mb-1">
        <span className="font-semibold text-white">{post.author}</span>
        {post.verified && (
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xxs">Verified</Badge>
        )}
        <Button
          size="icon"
          className="ml-auto h-6 w-6 bg-slate-900 text-green-400"
          onClick={() => setVote(vote + 1)}
        >
          ▲
        </Button>
        <span className="text-green-400 text-xs">{post.upvotes + vote}</span>
      </div>
      <div className="text-slate-300 mb-2">{post.content}</div>
      {post.replies && post.replies.length > 0 && (
        <div className="mt-2 space-y-2">
          {post.replies.map((r: any) => (
            <Thread key={r.id} post={r} />
          ))}
        </div>
      )}
    </div>
  );
}

const ThreadedDiscussion = () => {
  return (
    <div>
      <div className="text-xs text-cyan-400 font-medium mb-2">Threaded Replies Example</div>
      <div>
        {demoThread.map((t) => (
          <Thread key={t.id} post={t} />
        ))}
      </div>
    </div>
  );
};
export default ThreadedDiscussion;
