import { theme } from "@/config/theme";
import {
  ArrowButton,
  Box,
  HDStack,
  Image,
  useToggle,
  VStack,
  Text,
  useClickOutside,
  MotionBox,
} from "@marplacode/ui-kit";
import { useRef } from "react";

// Exported Interfaces
export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  delay?: number;
  onChange?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  delay = 0,
  onChange = () => {},
}) => {
  const { value: isOpen, toggle, off } = useToggle();
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside({ refs: [ref], onClickOutside: () => off() });

  const changeValue = (newValue: string) => {
    onChange(newValue);
    off();
  };

  return (
    <VStack w="100%" position="relative" ref={ref}>
      <MotionBox show delay={delay}>
        <HDStack onClick={toggle} cursor="pointer" position="relative">
          <Text
            fontSize={{ base: "18px", lg: "30px" }}
            fontWeight="400"
            color={theme.colors.white}
          >
            VER:
          </Text>
          <Box minW={{ base: "80px", lg: "150px" }}>
            <Text
              fontSize={{ base: "18px", lg: "30px" }}
              fontWeight="700"
              color={theme.colors.white}
            >
              {value ?? options[0].value}
            </Text>
          </Box>
        </HDStack>
      </MotionBox>

      <Box position="absolute" right="0" top={isOpen ? "2" : "-2"}>
        <ArrowButton show={isOpen} orientation="up" size="6" />
      </Box>

      {isOpen && (
        <VStack
          position="absolute"
          zIndex={10}
          top="10"
          w="100%"
          px="8"
          py="10"
          justify="center"
          alignItems="start"
          bg={theme.colors.grey}
          borderWidth="0.5px"
          borderColor={theme.colors.white}
        >
          {options.map((option) => (
            <HDStack
              key={option.value}
              justify="space-between"
              w="100%"
              onClick={() => changeValue(option.value)}
              cursor="pointer"
            >
              <Text
                fontSize={{ base: "18px", lg: "30px" }}
                fontWeight={value === option.value ? "700" : "400"}
                color={theme.colors.white}
              >
                {option.label}
              </Text>
              <Box w="16px" h="16px">
                {value === option.value && (
                  <Image src="images/check_icon.svg" />
                )}
              </Box>
            </HDStack>
          ))}
        </VStack>
      )}
    </VStack>
  );
};
