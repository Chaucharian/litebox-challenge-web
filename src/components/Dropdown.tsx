import { theme } from "@/config/theme";
import {
  ArrowButton,
  Box,
  Button,
  HDStack,
  HStack,
  Image,
  useToggle,
  VStack,
  Text,
} from "@marplacode/ui-kit";

export const Dropdown = ({ options, value, onOptionSelect }) => {
  const { value: isOpen, toggle } = useToggle();

  return (
    <VStack w="100%" position={"relative"}>
      <HDStack onClick={() => toggle()} cursor="pointer">
        <Text
          fontSize={{ base: "18px", lg: "30px" }}
          fontWeight="400"
          color={theme.colors.white}
        >
          VER:
        </Text>
        <Text
          fontSize={{ base: "18px", lg: "30px" }}
          fontWeight="700"
          color={theme.colors.white}
        >
          {value ?? options[0].value}
        </Text>

        <ArrowButton show={isOpen} orientation="down" size="6" />
      </HDStack>

      {isOpen && (
        <VStack
          position={"absolute"}
          zIndex={10}
          top="10"
          w="100%"
          px="8"
          py="10"
          justify={"center"}
          alignItems="start"
          bg={theme.colors.grey}
          borderWidth="0.5px"
          borderColor={theme.colors.white}
        >
          {options.map((option) => (
            <HDStack onClick={onOptionSelect(option.value)}>
              <Text
                fontSize={{ base: "18px", lg: "30px" }}
                fontWeight={value === option.value ? "700" : "400"}
                color={theme.colors.white}
              >
                {option.label}
              </Text>
              <Box w="16px" h="16px">
                <Image src="check_icon.svg" />
              </Box>
            </HDStack>
          ))}
        </VStack>
      )}
    </VStack>
  );
};
