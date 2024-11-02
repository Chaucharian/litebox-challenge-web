import {
  VStack,
} from "@marplacode/ui-kit";
import { MovieCard } from "./MovieCard";

// Exported Interfaces
export interface Movie {
  createdAt: string; // ISO string format "2024-11-01T22:22:31.025Z"
  // Add other properties of the movie if needed
}

export interface MovieListProps {
  movies?: Movie[];
  max?: number;
  order?: 'asc' | 'desc';
  delay?: number;
  onPlay?: (movie: Movie) => void;
}

export const MovieList: React.FC<MovieListProps> = ({
  movies = [],
  max = 3,
  order = "desc",
  delay = 0,
  onPlay,
  ...rest
}) => {
  const sortedMovies = movies.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return order === "asc" ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime(); // Ascending or Descending order
  });

  return (
    <VStack spacing="5" w="100%" pb="10" {...rest}>
      {sortedMovies.slice(0, max).map((movie, index) => (
        <MovieCard key={index} movie={movie} delay={delay} onPlay={onPlay} />
      ))}
    </VStack>
  );
};
