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

function splitTextInMiddle(text) {
  // Trim the input text to remove any leading/trailing whitespace
  const trimmedText = text.trim();
  
  // Calculate the midpoint
  const midIndex = Math.floor(trimmedText.length / 2);
  
  // Split into two parts
  const firstPart = trimmedText.slice(0, midIndex);
  const secondPart = trimmedText.slice(midIndex);
  
  return { firstPart, secondPart };
}

export const RecomendedMovie = ({
  movie = { title: "", imageUrl: "" },
  delay = 0,
}) => {
  const { firstPart, secondPart } = splitTextInMiddle(movie.title ?? '')
  return (
    <VStack
      position={"relative"}
      w={{ lg: "100%" }}
      justify={{ lg: "space-between" }}
      flexDirection={{ base: "column", lg: "row" }}
      h="100%"
      align={{ lg: "start" }}
    >
      <VStack
        justifyContent={"end"}
        align={{ lg: "start" }}
        h="100%"
        px={{ base: "12", lg: "20" }}
      >
        <VStack align={{ base: "center", lg: "start" }}>
          <HDStack>
            <Text
              fontSize={{ base: "20px", lg: "30px" }}
              color={theme.colors.white}
              delay={delay + 0.3}
            >
              ORIGINAL DE
            </Text>
            <Text
              fontSize={{ base: "20px", lg: "30px" }}
              fontWeight="700"
              color={theme.colors.white}
              delay={delay + 0.3}
            >
              LITFLIX
            </Text>
          </HDStack>

          <HStack>
            <Text
              fontSize={{ base: "76px", lg: "96px" }}
              fontWeight="700"
              color={theme.colors.green}
              flexWrap="wrap"
              delay={delay + 0.5}
              direction="top"
            >
             {firstPart}
            </Text>
            <Text
              fontSize={{ base: "76px", lg: "96px" }}
              fontWeight="400"
              color={theme.colors.green}
              flexWrap="wrap"
              delay={delay + 0.5}
              direction="bottom"
            >
              {secondPart}
            </Text>
          </HStack>
        </VStack>

        <HStack pb="40">
          <MotionBox show direction="left" delay={delay + 0.6}>
            <Button
              leftIcon={
                <Box w="14px" h="14px">
                  <Image src="images/play_icon.svg" />
                </Box>
              }
            >
              REPRODUCIR
            </Button>
          </MotionBox>
          <MotionBox show direction="left" delay={delay + 0.8}>
            <Button
              leftIcon={
                <Box w="14px" h="14px">
                  <Image src="images/plus_icon.svg" />
                </Box>
              }
              border
            >
              MI LISTA
            </Button>
          </MotionBox>
        </HStack>
      </VStack>

      {/* back image */}
      <Box width="100%" height="100vh" position={"absolute"} zIndex={-1}>
        <img
          src={movie.imageUrl}
          style={{ objectFit: "cover", height: "100%", width: "100%",
          animation: "zoomOut 5s ease"
        }}
        />
      </Box>
      <Box
        width="100%"
        height="400px"
        position={"absolute"}
        bottom={0}
        background={`linear-gradient(#24242400, ${theme.colors.grey})`}
      />
    </VStack>
  );
};
