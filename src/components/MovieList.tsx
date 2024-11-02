import { theme } from "@/config/theme";
import {
  Box,
  HDStack,
  HStack,
  Image,
  VStack,
  Text,
  MotionBox,
} from "@marplacode/ui-kit";
import { MovieCard } from "./MovieCard";

export const MovieList = ({
  movies = [],
  max = 4,
  order = "desc",
  delay = 0,
  onPlay,
  ...rest
}) => {
  const sortedMovies = movies.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    return order === "asc" ? dateA - dateB : dateB - dateA; // Ascending or Descending order
  });

  return (
    // <MotionBox show delay={delay} direction="right">
      <VStack spacing="5" w="100%" pb="10" {...rest}>
        {sortedMovies.slice(0, max).map((movie, index) => (
          <MovieCard movie={movie} delay={delay} />
        ))}
      </VStack>
    // </MotionBox>
  );
};
