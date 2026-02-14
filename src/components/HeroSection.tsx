import heroBg from "@/assets/hero-bg.png";
import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
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
          热门影视 · 流行话题 · 娱乐快讯 — 一站掌握创作灵感
        </p>
        <div className="relative max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索电影、话题、新闻..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/80 backdrop-blur-sm border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
