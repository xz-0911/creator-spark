import { useState, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import YouTubeSection from "@/components/YouTubeSection";
import RedditSection from "@/components/RedditSection";
import GiphySection from "@/components/GiphySection";
import { Clapperboard } from "lucide-react";

const Index = () => {
  const [keyword, setKeyword] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = useCallback(() => {
    setRefreshKey((k) => k + 1);
  }, []);

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
        <HeroSection
          searchQuery={keyword}
          onSearch={setKeyword}
          onRefresh={handleRefresh}
        />

        <YouTubeSection key={`yt-${refreshKey}`} keyword={keyword} />
        <RedditSection key={`rd-${refreshKey}`} />
        <GiphySection key={`gi-${refreshKey}`} keyword={keyword} />
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
