import { Box, Image } from "@marplacode/ui-kit";

interface BurgerButtonProps {
  isOpen?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  isOpen = false,
  delay,
  onClick = () => {},
}) => {
  return (
    <Box 
      w="27px" 
      h="12px" 
      position="relative" 
      cursor="pointer" 
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"} // Accessibility improvement
      role="button" // Adding role for clarity
    >
      <Image 
        src="images/burger_icon.svg" 
        show={!isOpen} 
        delay={delay} 
        alt="Menu" // Accessibility improvement
      />
      <Image 
        src="images/close_icon.svg" 
        show={isOpen} 
        alt="Close menu" // Accessibility improvement
      />
    </Box>
  );
};
