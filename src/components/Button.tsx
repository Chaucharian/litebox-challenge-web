import { theme } from "@/config/theme";
import {
  Box,
  Button as MButton,
  HDStack,
  HStack,
  Image,
  VStack,
  Text,
} from "@marplacode/ui-kit";
import { useRef } from "react";

export const Button = ({
  leftIcon = null,
  rightIcon = null,
  border = false,
  enabled = true,
  children,
  textProps,
  onClick = () => {}, 
  ...rest
}) => {
  // const buttonRef = useRef<HTMLInputElement | null>(null);

  const click = (e) => {
    if (!enabled) return;
    onClick()
  };

  return (
    <HDStack
      alignItems="center"
      w="248px"
      h="56px"
      justifyContent="center"
      borderWidth={border ? "1px" : 0}
      borderColor={theme.colors.white}
      bg={theme.colors.grey}
      cursor={enabled ? "pointer" : "auto"}
      onClick={click}
      as="button"
      {...rest}
    >
      {leftIcon}
      <Text
        fontWeight="400"
        fontSize={"18px"}
        gap={"10"}
        color={theme.colors.white}
        {...textProps}
      >
        {children}
      </Text>
      {rightIcon}
    </HDStack>
  );
};
