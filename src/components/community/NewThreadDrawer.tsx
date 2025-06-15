
import { useState } from "react";
import { Drawer, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

// Category options for forum posting
const CATEGORIES = [
  "Energy", "Transport", "Water", "Telecom", "Social Infra", "Waste", "Other"
];

type NewThreadDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function NewThreadDrawer({ open, onOpenChange }: NewThreadDrawerProps) {
  // Placeholder for signed-in state
  const IS_AUTH = false;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [expertOnly, setExpertOnly] = useState(false);
  const [allowAnon, setAllowAnon] = useState(false);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setExpertOnly(false);
    setAllowAnon(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!IS_AUTH) {
      toast("Sign in required", { description: "Please sign in to create a discussion." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast("Thread posted!", { description: "Your discussion went live (placeholder)." });
      onOpenChange(false);
      reset();
    }, 1200);
  };

  return (
    <Drawer open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) reset(); }}>
      <DrawerContent>
        <form onSubmit={handleSubmit} className="px-4 pt-4 pb-2 space-y-5">
          <DrawerHeader>
            <DrawerTitle className="text-cyan-600">Start a New Discussion</DrawerTitle>
            <DrawerDescription>
              Create a discussion on infrastructure—share insights, ask questions, or seek expert guidance.
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-semibold text-slate-300">
              Title <span className="text-red-500">*</span>
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={120}
              required
              placeholder="e.g. Scaling Green Hydrogen Infrastructure"
              disabled={loading}
              className="bg-slate-800/60 border-slate-700 text-slate-200"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="category" className="block text-sm font-semibold text-slate-300">
              Sector <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              disabled={loading}
              className="w-full rounded-md border border-slate-700 px-3 py-2 bg-slate-800/60 text-base text-slate-200"
            >
              <option value="">Select sector…</option>
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="block text-sm font-semibold text-slate-300">
              Content <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={5}
              maxLength={2000}
              required
              disabled={loading}
              className="bg-slate-800/60 border-slate-700 text-slate-200"
              placeholder="Write your question, insight, or resource here…"
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-3">
            <label className="inline-flex items-center gap-2 text-xs text-cyan-300">
              <input
                type="checkbox"
                checked={expertOnly}
                disabled={loading}
                onChange={() => setExpertOnly((v) => !v)}
                className="accent-cyan-500 mr-1"
              />
              Ask for expert reply
            </label>
            <label className="inline-flex items-center gap-2 text-xs text-slate-400">
              <input
                type="checkbox"
                checked={allowAnon}
                disabled={loading}
                onChange={() => setAllowAnon((v) => !v)}
                className="accent-slate-500 mr-1"
              />
              Allow anonymous replies
            </label>
          </div>
          <DrawerFooter className="pt-3">
            <Button
              type="submit"
              className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold"
              disabled={loading || !IS_AUTH}
            >
              Post Discussion
            </Button>
            {!IS_AUTH && (
              <div className="text-xs text-slate-400 py-2">
                <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 mr-2">Demo Only</Badge>
                Sign in to post new threads.
              </div>
            )}
            <DrawerClose asChild>
              <Button variant="ghost" type="button">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  );
}
