"use client";
import { Box, VStack,Text } from "@marplacode/ui-kit";
import { theme } from "@/config/theme";
import { FileField } from "@/components/FileField";
import { UploadMovieForm } from "./form/UploadMovieForm";

export default function MyMovies() {
  return (
    <VStack w="100%" pt="12"  px="12" spacing="12">
      <Text
        color={theme.colors.green}
        fontSize={{ base: "24px", lg: "30px" }}
        fontWeight="700"
      >
        AGREGAR PELICULA
      </Text>
      <UploadMovieForm />
    </VStack>
  );
}
