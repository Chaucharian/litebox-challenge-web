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

export const Button = ({
  leftIcon = null,
  rightIcon = null,
  border= false,
  children,
  textProps,
  ...rest
}) => {
  return (
    <HDStack alignItems='center' w="248px" h="56px" justifyContent='center' borderWidth={border ? '1px' : 0} borderColor={theme.colors.white}  bg={theme.colors.grey}  {...rest} >
      {leftIcon}
      <Text fontWeight="400" fontSize={'18px'} gap={"10"} color={theme.colors.white} {...textProps}>{children}</Text>
      {rightIcon}
    </HDStack>
  );
};
