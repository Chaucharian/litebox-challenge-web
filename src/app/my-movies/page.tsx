"use client";
import { Box, VStack,Text } from "@marplacode/ui-kit";
import { theme } from "@/config/theme";

export default function MyMovies() {
  return (
    <VStack justifyContent="space-between" w="100%" px="12">
      <Text
        color={theme.colors.green}
        fontSize={{ base: "20px", lg: "30px" }}
        fontWeight="700"
      >
        AGREGAR PELICULA
      </Text>
    </VStack>
  );
}
