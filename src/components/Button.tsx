import { theme } from "@/config/theme";
import { HDStack, Text } from "@marplacode/ui-kit";
import React from "react";

// Define the props interface for the Button component
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  border?: boolean;
  enabled?: boolean;
  textProps?: React.ComponentProps<typeof Text>;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  leftIcon,
  rightIcon,
  border = false,
  enabled = true,
  children,
  textProps,
  onClick = () => {},
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!enabled) return;
    onClick();
  };

  return (
    <HDStack
      as="button"
      alignItems="center"
      w="248px"
      h="56px"
      justifyContent="center"
      borderWidth={border ? "1px" : 0}
      borderColor={theme.colors.white}
      bg={theme.colors.grey}
      cursor={enabled ? "pointer" : "not-allowed"}
      onClick={handleClick}
      disabled={!enabled} // Disable button if not enabled
      {...rest}
    >
      {leftIcon}
      <Text
        fontWeight="400"
        fontSize="18px"
        color={theme.colors.white}
        {...textProps}
      >
        {children}
      </Text>
      {rightIcon}
    </HDStack>
  );
};
