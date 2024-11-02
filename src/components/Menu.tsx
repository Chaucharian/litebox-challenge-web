import { theme } from "@/config/theme";
import {
  Box,
  HDStack,
  HStack,
  Image,
  VStack,
  Text,
} from "@marplacode/ui-kit";

// Define the structure for menu options
interface MenuOption {
  label: string;
  url?: string;
}

interface MenuProps {
  options: MenuOption[];
  onSelect?: (option: MenuOption) => void;
}

export const Menu: React.FC<MenuProps> = ({ options, onSelect = () => {} }) => {
  return (
    <VStack alignItems="start" w="100%" h="100%" py="20" spacing="8">
      {/* Options */}
      <VStack justifyContent="space-between" alignItems="start" spacing="8">
        {options.map((option, index) => (
          <Text
            key={index} // Added unique key for each child in the list
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
        <HDStack alignItems="center">
          <Box w="14px" h="14px">
            <Image src="images/plus_icon.svg" alt="Add movie icon" />
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
          onClick={() => onSelect({ label: "CERRAR SESSION", url: "logout" })} // Example URL
        >
          CERRAR SESSION
        </Text>
      </VStack>
    </VStack>
  );
};
