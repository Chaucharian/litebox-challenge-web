import { theme } from "@/config/theme";
import {
  Box,
  Button,
  HDStack,
  HStack,
  Image,
  VStack,
} from "@marplacode/ui-kit";
import { BurgerButton } from "./BurgerButton";

export const Header = ({ isOpen = false, onOpenMenu }) => {
  return (
    <HDStack
      justifyContent="space-between"
      alignItems="center"
      bg={isOpen ? theme.colors.grey : 'transparent'}
      w="100vw"
      px="12"
      h="80px"
    >
      <BurgerButton isOpen={isOpen} onClick={onOpenMenu} />
      <Box width="98px" height="28px">
        <Image src="images/litflix_logo.svg" show />
      </Box>
      <Box width="36px" height="36px">
        <Image src="images/litflix_user.png" show />
      </Box>
    </HDStack>
  );
};
