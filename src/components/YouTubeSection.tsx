import { ExternalLink, Play } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { YOUTUBE_KEY } from "@/config/api";
import { useCachedFetch } from "@/hooks/useCachedFetch";

interface YouTubeSectionProps {
  keyword: string;
}

interface YTItem {
  id: { videoId: string };
  snippet: {
    title: string;
    channelTitle: string;
    publishedAt: string;
    thumbnails: { medium: { url: string } };
  };
}

interface YTResponse {
  items: YTItem[];
}

const DEFAULT_QUERY = "trending creative inspiration 2026";

const YouTubeSection = ({ keyword }: YouTubeSectionProps) => {
  const query = keyword || DEFAULT_QUERY;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=${encodeURIComponent(query)}&key=${YOUTUBE_KEY}`;

  const { data, loading, error } = useCachedFetch<YTResponse>(url);
  const isRecommended = !keyword;

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-foreground">
          🎬 {isRecommended ? "Recommended Videos" : "YouTube Videos"}
        </h2>
        <span className="text-sm text-muted-foreground">
          {isRecommended ? "Picked for you" : "From YouTube"}
        </span>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="glass-card rounded-xl overflow-hidden">
              <Skeleton className="aspect-video w-full" />
              <div className="p-3 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-destructive font-medium">Failed to load YouTube</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      )}

      {data?.items && !loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.items.map((item, i) => (
            <a
              key={item.id.videoId}
              href={`https://www.youtube.com/watch?v=${item.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30">
                  <Play className="h-10 w-10 text-primary fill-primary" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {item.snippet.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground truncate">{item.snippet.channelTitle}</span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(item.snippet.publishedAt).toLocaleDateString("en-US")}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default YouTubeSection;
