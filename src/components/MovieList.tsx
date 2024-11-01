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

export const MovieList = ({ movies, onPlay, ...rest }) => {
  return (
    <VStack spacing="5" w="100%" {...rest}>
      {movies.map((movie) => (
        <MovieCard movie={movie} onPlay />
      ))}
    </VStack>
  );
};
