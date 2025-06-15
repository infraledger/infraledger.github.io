
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

// Demo users for avatar/uid placeholder badge
const DEMO_USER_AVATAR = [
  "🧑‍💼", "👩‍🔬", "🧔", "👩‍🏫", "👨‍💻", "🧕", "👩‍🌾"
];

type ThreadType = {
  id: number;
  author: string;
  verified: boolean;
  content: string;
  upvotes: number;
  replies: ThreadType[];
};

export default function Thread({ post, level = 0 }: { post: ThreadType; level?: number }) {
  const [vote, setVote] = useState(0);
  // Demo feedback: highlight reply flow
  const IS_AUTH = false;

  const handleVote = () => {
    if (!IS_AUTH) {
      toast("Sign in required", { description: "Sign in to upvote replies." });
      return;
    }
    setVote((v) => v + 1);
  };

  return (
    <div className={`border-l-2 border-cyan-800 pl-4 mb-3 ${level >= 2 ? "ml-4" : ""}`}>
      <div className="flex items-center text-sm gap-2 mb-1">
        <span className="rounded-full bg-cyan-950/50 mr-1 px-2 py-1 text-lg">
          {DEMO_USER_AVATAR[post.id % DEMO_USER_AVATAR.length]}
        </span>
        <span className="font-semibold text-white">{post.author}</span>
        {post.verified && (
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xxs">Verified</Badge>
        )}
        <Button
          size="icon"
          className="ml-auto h-6 w-6 bg-slate-900 text-green-400"
          onClick={handleVote}
          disabled={!IS_AUTH}
          title={IS_AUTH ? "Upvote post" : "Sign in to upvote"}
        >
          ▲
        </Button>
        <span className="text-green-400 text-xs">{post.upvotes + vote}</span>
      </div>
      <div className="text-slate-300 mb-2">{post.content}</div>
      <div>
        <Button
          size="sm"
          variant="outline"
          className="text-xs mr-2"
          disabled={!IS_AUTH}
          title={IS_AUTH ? "Reply" : "Sign in to reply"}
          onClick={() => toast("Reply", { description: IS_AUTH ? "Demo: Reply to thread" : "Sign in to reply." })}
        >
          Reply
        </Button>
        {level < 2 && post.replies && post.replies.length > 0 && (
          <span className="text-slate-500 text-xs ml-1">{post.replies.length} repl{post.replies.length === 1 ? "y" : "ies"}</span>
        )}
      </div>
      {post.replies && post.replies.length > 0 && (
        <div className="mt-2 space-y-2">
          {post.replies.map((r) => (
            <Thread key={r.id} post={r} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
