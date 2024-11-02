import { theme } from "@/config/theme";
import {
  Box,
  Button,
  HDStack,
  HStack,
  Image,
  VStack,
  Text,
} from "@marplacode/ui-kit";

export const Menu = ({ options, onSelect = () => {} }) => {
  return (
    <VStack alignItems="start" w="100%" h="100%" py="20" spacing="8">
      {/* Options */}
      <VStack justifyContent="space-between" alignItems="start" spacing="8">
        {options.map((option, index) => (
          <Text
            delay={index * 0.2}
            color={theme.colors.white}
            cursor="pointer"
            fontWeight="400"
            fontSize={{ base: "16px", lg: "22px" }}
            onClick={() => onSelect(option)}
          >
            {option.label}
          </Text>
        ))}
      </VStack>
      {/* Buttons */}
      <VStack spacing="8" alignItems="start">
        <HDStack alignItems="center" justifyItems="center">
          <Box w="14px" h="14px">
            <Image src="images/plus_icon.svg" />
          </Box>
          <Text
            delay={0.8}
            color={theme.colors.white}
            cursor="pointer"
            fontWeight="700"
            fontSize={{ base: "16px", lg: "22px" }}
            onClick={() => onSelect({ label: "AGREGAR PELICULA", url: "my-movies" })}
          >
            AGREGAR PELICULA
          </Text>
        </HDStack>
        <Text
          delay={0.8}
          color={theme.colors.white}
          cursor="pointer"
          fontWeight="400"
          fontSize={{ base: "16px", lg: "22px" }}
          onClick={() => onSelect({ label: "AGREGAR PELICULA", url: "my-movies" })}
        >
          CERRAR SESSION
        </Text>
      </VStack>
    </VStack>
  );
};
