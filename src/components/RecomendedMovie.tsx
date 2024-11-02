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

export const RecomendedMovie = ({ movie = {} }) => {
  return (
    <VStack
      position={"relative"}
      w={{ lg: "100%" }}
      justify={{ lg: "space-between" }}
      flexDirection={{ base: "column", lg: "row" }}
      h="100%"
      align={{ lg: "start" }}
    >
      <VStack justifyContent={"end"} align={{ lg: "start" }} h="100%" px={{base:"12", lg:'20'}}>
        <VStack align={{ base: "center", lg: "start" }}>
          <HDStack>
            <Text
              fontSize={{ base: "20px", lg: "30px" }}
              color={theme.colors.white}
            >
              ORIGINAL DE
            </Text>
            <Text
              fontSize={{ base: "20px", lg: "30px" }}
              fontWeight="700"
              color={theme.colors.white}
            >
              LITFLIX
            </Text>
          </HDStack>

          <Text
            fontSize={{ base: "76px", lg: "96px" }}
            fontWeight="700"
            color={theme.colors.green}
          >
            {movie.title}
          </Text>
        </VStack>

        <HStack pb="40">
          <Button
            leftIcon={
              <Box w="14px" h="14px">
                <Image src="images/play_icon.svg" />
              </Box>
            }
          >
            REPRODUCIR
          </Button>
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
        </HStack>
      </VStack>

      {/* back image */}
      <Box width="100%" height="100vh" position={"absolute"} zIndex={-1}>
        <img
          src={movie.imageUrl}
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
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
