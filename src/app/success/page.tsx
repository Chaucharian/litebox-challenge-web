"use client";
import { VStack, Text, useRouter } from "@marplacode/ui-kit";
import { Button } from "@/components";
import { theme } from "@/config/theme";

export default function MyMovies() {
  const router = useRouter();
  const goHome = () => router.push("/");
  
  return (
    <VStack w="100%" pt="12" px="12" spacing="12">
      <Text color={theme.colors.white} fontSize={"24px"} fontWeight="700">
        FELICITACIONES!
      </Text>
      <Text color={theme.colors.white} fontSize={"20px"} fontWeight="400">
        Liteflix The Movie fue correctamente subida.
      </Text>

      <Button
        bg={theme.colors.white}
        textProps={{ color: theme.colors.black }}
        onClick={goHome}
      >
        IR A HOME
      </Button>
    </VStack>
  );
}
