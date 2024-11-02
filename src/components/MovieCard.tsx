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
import { Button } from "./Button";

export const MovieCard = ({ movie, onPlay }) => {
  return (
    <VStack
    minH="146px"
    maxH="172px"
      // h="172px"
      w="100%"
      borderRadius={"10px"}
      position="relative"
      overflow={"hidden"}
    >
      <VStack h="100%" w="100%" justifyContent={"center"} spacing="5">
        {/* Play button */}
        <VStack
          w="48px"
          h="48px"
          justify="center"
          borderRadius={"50px"}
          borderWidth="2px"
          borderColor={theme.colors.white}
          onClick={onPlay}
        >
          <Box w="20px" h="20px">
            <Image src="images/play_icon.svg" />
          </Box>
        </VStack>

        <Text
          fontSize={{ base: "20px", lg: "30px" }}
          fontWeight="700"
          color={theme.colors.white}
        >
          {movie.title}
        </Text>
      </VStack>

      {/* back image */}
      <Box
        width="100%"
        height="100%"
        position={"absolute"}
        left="0"
        zIndex={-1}
      >
        <img
          src={movie.imageUrl}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
        />
      </Box>
      <Box
        width="100%"
        height="80px"
        position={"absolute"}
        bottom={0}
        background={`linear-gradient(#24242400, ${theme.colors.grey})`}
      />
    </VStack>
  );
};
