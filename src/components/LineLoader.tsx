import { theme } from "@/config/theme";
import { Box, Image, VStack, HDStack, Text } from "@marplacode/ui-kit";

interface LineLoaderProps {
  percentage: number; // Expect a value between 0 and 100
  color?: string;
  height?: string;
}

export const LineLoader = ({
  percentage,
  color = theme.colors.green,
  height = "4px",
}: LineLoaderProps) => {
  return (
    <VStack align="stretch" spacing={1} w="100%">
      <HDStack spacing="2">
        <Text fontSize="14px" color={theme.colors.white}>
          CARGANDO
        </Text>
        <Text fontSize="14px" fontWeight="700" color={theme.colors.white}>
          {`${percentage}%`}
        </Text>
      </HDStack>

      {/* Line loader */}
      <Box w="100%" h="2" position={"relative"} overflow="visible">
        <VStack
          position={"absolute"}
          h="100%"
          w="100%"
          justify="center"
          align={"center"}
        >
          <Box
            bg="#838282"
            h="1"
            w="100%"
            position={"absolute"}
            transition="width 0.3s ease"
            borderRadius="4px"
          />
        </VStack>

        <VStack
          position={"absolute"}
          h="2"
          w="100%"
          justify="center"
          align={"start"}
        >
          <Box
            bg={color}
            h="2"
            width={`${percentage}%`}
            transition="width 0.3s ease"
            borderRadius="4px"
          />
        </VStack>
      </Box>

      <HDStack w="100%" justify="end">
        <Text fontSize="14px" color={theme.colors.white}>
          CANCELAR
        </Text>
      </HDStack>
    </VStack>
  );
};
