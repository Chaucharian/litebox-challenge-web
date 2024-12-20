import { theme } from "@/config/theme";
import { Box, Text, HDStack, Image, MotionBox } from "@marplacode/ui-kit";
import { BurgerButton } from "./BurgerButton";

// Define the props interface for the Header component
interface HeaderProps {
  isOpen?: boolean;
  delay?: number;
  onBurgerClick: () => void;
  onLogoClick: () => void;
  onAddMovie: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isOpen = false,
  delay = 0,
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
      px={{ base: "12", lg: "20" }}
      h="80px"
    >
      {/* DESKTOP */}
      <HDStack display={{ base: "none", lg: "flex" }} spacing="20">
        <MotionBox delay={delay} direction="top" show>
          <Box
            width="98px"
            height="28px"
            cursor="pointer"
            onClick={onLogoClick}
          >
            <Image src="images/litflix_logo.svg" alt="Litflix Logo" />
          </Box>
        </MotionBox>

        <HDStack alignItems="center" justifyItems="center">
          <Box w="14px" h="14px">
            <Image src="images/plus_icon.svg" alt="Add Movie Icon" />
          </Box>
          <Text
            color={theme.colors.white}
            cursor="pointer"
            fontWeight="700"
            fontSize={{ base: "16px", lg: "22px" }}
            onClick={onAddMovie}
            delay={delay + 0.4}
            direction="top"
            show
          >
            AGREGAR PELICULA
          </Text>
        </HDStack>
      </HDStack>

      {/* MOBILE */}
      <HDStack
        display={{ base: "flex", lg: "none" }}
        w="100%"
        justify="space-between"
      >
        <BurgerButton isOpen={isOpen} onClick={onBurgerClick} delay={delay} />

        <Box
          width="98px"
          height="28px"
          cursor="pointer"
          onClick={onLogoClick}
        >
          <Image src="images/litflix_logo.svg" alt="Litflix Logo" delay={delay * 0.4} />
        </Box>

        <Box />
      </HDStack>

      <MotionBox delay={delay * 0.6} direction="top" show>
        <HDStack spacing="6">
          <Box display={{ base: "none", lg: "block" }}>
            <BurgerButton isOpen={isOpen} onClick={onBurgerClick} />
          </Box>
          <Box display={{ base: "none", lg: "block" }} width="26px" height="26px">
            <Image src="images/notification_icon.svg" alt="Notification Icon" />
          </Box>
          <Box width="36px" height="36px">
            <Image src="images/user_icon.svg" alt="User Icon" />
          </Box>
        </HDStack>
      </MotionBox>
    </HDStack>
  );
};
