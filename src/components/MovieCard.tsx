import { theme } from "@/config/theme";
import { Box, VStack, Text, MotionBox, Image } from "@marplacode/ui-kit";

// Exported Interfaces
export interface Movie {
  title: string;
  imageUrl: string;
  // Add any other movie properties needed
}

export interface MovieCardProps {
  movie: Movie;
  delay?: number;
  onPlay?: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  delay = 0,
  onPlay,
}) => {
  return (
    <VStack
      minH="146px"
      maxH="172px"
      w="100%"
      borderRadius="10px"
      position="relative"
      overflow="hidden"
    >
      <VStack h="100%" w="100%" justifyContent="center" spacing="5">
        {/* Play button */}
        <MotionBox show delay={delay}>
          <VStack
            w="48px"
            h="48px"
            justify="center"
            borderRadius="50px"
            borderWidth="2px"
            borderColor={theme.colors.white}
            onClick={onPlay}
          >
            <Box w="20px" h="20px">
              <Image src="images/play_icon.svg" />
            </Box>
          </VStack>
        </MotionBox>

        <Text
          fontSize={{ base: "20px", lg: "30px" }}
          fontWeight="700"
          color={theme.colors.white}
        >
          {movie.title}
        </Text>
      </VStack>

      {/* Back image */}
      <Box
        width="100%"
        height="100%"
        position="absolute"
        left="0"
        zIndex={-1}
      >
        <Image show src={movie.imageUrl} fit="cover" />
      </Box>
      
      <Box
        width="100%"
        height="80px"
        position="absolute"
        bottom={0}
        background={`linear-gradient(#24242400, ${theme.colors.grey})`}
      />
    </VStack>
  );
};
