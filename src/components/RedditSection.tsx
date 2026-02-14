import { ArrowUp, MessageSquare, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useCachedFetch } from "@/hooks/useCachedFetch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SUBREDDITS = ["Entrepreneur", "SideProject", "Marketing", "ContentCreation", "Filmmakers", "YouTubers"];

interface RedditPost {
  data: {
    id: string;
    title: string;
    ups: number;
    num_comments: number;
    permalink: string;
    subreddit_name_prefixed: string;
  };
}

interface RedditResponse {
  data: {
    children: RedditPost[];
  };
}

const RedditSection = () => {
  const [subreddit, setSubreddit] = useState("Entrepreneur");
  const url = `https://www.reddit.com/r/${subreddit}/hot.json?limit=10`;
  const { data, loading, error } = useCachedFetch<RedditResponse>(url);

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-foreground">🔥 Reddit Trending</h2>
        <Select value={subreddit} onValueChange={setSubreddit}>
          <SelectTrigger className="w-[160px] h-8 text-xs bg-secondary border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SUBREDDITS.map((s) => (
              <SelectItem key={s} value={s}>
                r/{s}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading && (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="glass-card rounded-xl p-4">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-3 w-1/3" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-destructive font-medium">Reddit 加载失败</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      )}

      {data?.data?.children && !loading && (
        <div className="space-y-3">
          {data.data.children.map((post, i) => (
            <a
              key={post.data.id}
              href={`https://reddit.com${post.data.permalink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-4 flex items-start gap-4 group hover:border-primary/40 transition-all duration-300 animate-fade-up cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex flex-col items-center gap-1 shrink-0 min-w-[50px]">
                <ArrowUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-bold text-primary">{post.data.ups.toLocaleString()}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.data.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" />
                    {post.data.num_comments}
                  </span>
                  <span>{post.data.subreddit_name_prefixed}</span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default RedditSection;
