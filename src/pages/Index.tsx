import { useState, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import TrendingMovies from "@/components/TrendingMovies";
import TrendingTopics from "@/components/TrendingTopics";
import NewsSection from "@/components/NewsSection";
import CategoryFilter from "@/components/CategoryFilter";
import { trendingMovies, trendingTopics, entertainmentNews, categories } from "@/data/mockData";
import { Clapperboard } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const filteredMovies = useMemo(() => {
    return trendingMovies.filter((m) => {
      const matchSearch = !searchQuery || m.title.includes(searchQuery) || m.genre.includes(searchQuery);
      const matchCat = activeCategory === "全部" || activeCategory === "影视";
      return matchSearch && matchCat;
    });
  }, [searchQuery, activeCategory]);

  const filteredTopics = useMemo(() => {
    return trendingTopics.filter((t) => {
      const matchSearch = !searchQuery || t.title.includes(searchQuery) || t.category.includes(searchQuery);
      const matchCat = activeCategory === "全部" || t.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, activeCategory]);

  const filteredNews = useMemo(() => {
    return entertainmentNews.filter((n) => {
      const matchSearch = !searchQuery || n.title.includes(searchQuery) || n.snippet.includes(searchQuery);
      const matchCat = activeCategory === "全部" || n.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [searchQuery, activeCategory]);

  const hasResults = filteredMovies.length > 0 || filteredTopics.length > 0 || filteredNews.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clapperboard className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-lg text-foreground">InspirationHub</span>
          </div>
          <div className="text-xs text-muted-foreground">
            内容创作者的灵感引擎
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {hasResults ? (
          <>
            {filteredMovies.length > 0 && <TrendingMovies movies={filteredMovies} />}
            {filteredTopics.length > 0 && <TrendingTopics topics={filteredTopics} />}
            {filteredNews.length > 0 && <NewsSection news={filteredNews} />}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">没有找到匹配的内容</p>
            <p className="text-sm text-muted-foreground mt-2">试试其他关键词或分类</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-xs text-muted-foreground">
          © 2026 InspirationHub · 为内容创作者打造
        </div>
      </footer>
    </div>
  );
};

export default Index;
