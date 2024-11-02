import { theme } from "@/config/theme";
import { Box, Text, HDStack, Image } from "@marplacode/ui-kit";
import { BurgerButton } from "./BurgerButton";

export const Header = ({
  isOpen = false,
  onBurgerClick,
  onLogoClick,
  onAddMovie,
}) => {
  return (
    <HDStack
      justifyContent="space-between"
      alignItems="center"
      bg={isOpen ? theme.colors.grey : "transparent"}
      w="100vw"
      px={{base:"12", lg:'20'}}
      h="80px"
    >
      {/* DESKTOP */}
      <HDStack display={{ base: "none", lg: "flex" }} spacing="20">
        <Box
          width="98px"
          height="28px"
          cursor={"pointer"}
          onClick={onLogoClick}
        >
          <Image src="images/litflix_logo.svg" show />
        </Box>

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
            onClick={() => onAddMovie()}
          >
            AGREGAR PELICULA
          </Text>
        </HDStack>
      </HDStack>

      {/* MOBILE */}
      <HDStack display={{ base: "flex", lg: "none" }} w='100%' justify="space-between">
        <BurgerButton isOpen={isOpen} onClick={onBurgerClick} />
        <Box
          width="98px"
          height="28px"
          cursor={"pointer"}
          onClick={onLogoClick}
        >
          <Image src="images/litflix_logo.svg" show />
        </Box>
        <Box />
      </HDStack>


      <HDStack spacing="6">
        <Box display={{ base: "none", lg: "block" }}>
          <BurgerButton isOpen={isOpen} onClick={onBurgerClick} />
        </Box>
        <Box display={{ base: "none", lg: "block" }} width="26px" height="26px">
          <Image src="images/notification_icon.svg" show />
        </Box>
        <Box width="36px" height="36px">
          <Image src="images/user_icon.svg" show />
        </Box>
      </HDStack>
    </HDStack>
  );
};
