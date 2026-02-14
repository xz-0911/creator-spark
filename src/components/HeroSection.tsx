import heroBg from "@/assets/hero-bg.png";
import { Search, RefreshCw } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  searchQuery: string;
  onSearch: (value: string) => void;
  onRefresh: () => void;
}

const HeroSection = ({ searchQuery, onSearch, onRefresh }: HeroSectionProps) => {
  const [input, setInput] = useState(searchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <section className="relative h-[340px] overflow-hidden rounded-2xl mb-8">
      <img
        src={heroBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      <div className="relative z-10 flex flex-col justify-end h-full p-8 pb-10">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 animate-fade-up">
          <span className="gradient-text">创作灵感</span>
          <span className="text-foreground"> 每日速递</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-6 max-w-xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
          YouTube · Reddit · GIPHY — 一站掌握创作灵感
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索视频、话题、GIF..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            搜索
          </button>
          <button
            type="button"
            onClick={onRefresh}
            className="p-3 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            title="刷新"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
