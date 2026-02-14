import { Skeleton } from "@/components/ui/skeleton";
import { GIPHY_KEY } from "@/config/api";
import { useCachedFetch } from "@/hooks/useCachedFetch";

interface GiphySectionProps {
  keyword: string;
}

interface GiphyGif {
  id: string;
  url: string;
  title: string;
  images: {
    fixed_width: { url: string };
  };
}

interface GiphyResponse {
  data: GiphyGif[];
}

const GiphySection = ({ keyword }: GiphySectionProps) => {
  const url = keyword
    ? `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${encodeURIComponent(keyword)}&limit=12&rating=g`
    : `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_KEY}&limit=12&rating=g`;

  const { data, loading, error } = useCachedFetch<GiphyResponse>(url);
  const isRecommended = !keyword;

  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-foreground">
          ✨ {isRecommended ? "热门 GIF" : "GIF Inspiration"}
        </h2>
        <span className="text-sm text-muted-foreground">
          {isRecommended ? "正在流行" : "来自 GIPHY"}
        </span>
      </div>

      {loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-xl" />
          ))}
        </div>
      )}

      {error && (
        <div className="glass-card rounded-xl p-6 text-center">
          <p className="text-destructive font-medium">GIPHY 加载失败</p>
          <p className="text-sm text-muted-foreground mt-1">{error}</p>
        </div>
      )}

      {data?.data && !loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {data.data.map((gif, i) => (
            <a
              key={gif.id}
              href={gif.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl overflow-hidden group hover:ring-2 hover:ring-primary/50 transition-all animate-fade-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <img
                src={gif.images.fixed_width.url}
                alt={gif.title}
                className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default GiphySection;
