import { Clock, ArrowRight } from "lucide-react";
import { NewsItem } from "@/data/mockData";

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-foreground">📰 娱乐快讯</h2>
        <span className="text-sm text-muted-foreground">最新资讯</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((item, i) => (
          <article
            key={item.id}
            className="glass-card rounded-xl p-5 cursor-pointer group hover:border-primary/30 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-medium">
                {item.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {item.time}
              </span>
            </div>
            <h3 className="font-display font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
              {item.snippet}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{item.source}</span>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
