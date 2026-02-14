import { TrendingUp, Flame } from "lucide-react";
import { Topic } from "@/data/mockData";

interface TrendingTopicsProps {
  topics: Topic[];
}

const TrendingTopics = ({ topics }: TrendingTopicsProps) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-foreground">🔥 热门话题</h2>
        <span className="text-sm text-muted-foreground">
          <TrendingUp className="inline h-4 w-4 mr-1" />
          趋势追踪
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {topics.map((topic, i) => (
          <div
            key={topic.id}
            className="glass-card rounded-xl p-4 cursor-pointer hover:border-primary/40 transition-all duration-300 group animate-fade-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                {topic.category}
              </span>
              <div className="flex items-center gap-1">
                <Flame className="h-3.5 w-3.5 text-accent" />
                <span className="text-xs font-medium text-accent">{topic.heat}</span>
              </div>
            </div>
            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
              {topic.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">{topic.mentions} 讨论</p>
            {/* Heat bar */}
            <div className="mt-3 h-1 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${topic.heat}%`,
                  background: "var(--gradient-accent)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingTopics;
