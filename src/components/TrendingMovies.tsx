import { Star } from "lucide-react";
import { Movie } from "@/data/mockData";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const imageMap: Record<string, string> = {
  "movie-1": movie1,
  "movie-2": movie2,
  "movie-3": movie3,
  "movie-4": movie4,
  "movie-5": movie5,
  "movie-6": movie6,
};

interface TrendingMoviesProps {
  movies: Movie[];
}

const TrendingMovies = ({ movies }: TrendingMoviesProps) => {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-2xl font-bold text-foreground">🎬 热门影视</h2>
        <span className="text-sm text-muted-foreground">实时更新</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie, i) => (
          <div
            key={movie.id}
            className="group relative rounded-xl overflow-hidden cursor-pointer animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="aspect-[2/3] overflow-hidden">
              <img
                src={imageMap[movie.image]}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-display font-semibold text-sm text-foreground truncate">{movie.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">{movie.genre}</span>
                <span className="flex items-center gap-0.5 text-xs text-primary">
                  <Star className="h-3 w-3 fill-primary" />
                  {movie.rating}
                </span>
              </div>
            </div>
            {/* Always visible title bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              <p className="font-display font-medium text-sm text-foreground truncate">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingMovies;
