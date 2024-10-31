import {
  Box,
  Button,
  HDStack,
  HStack,
  Image,
  VStack,
} from "@marplacode/ui-kit";

export const BurgerButton = ({ isOpen = false, onClick = () => {} }) => {
  return (
    <Box w="27px" h="12px" position={"relative"} onClick={onClick}>
      <Box position={"absolute"} w="100%" h="100%" onClick={onClick}>
        <Image src="images/burger_icon.svg" show={!isOpen} />
      </Box>
      <Image src="images/close_icon.svg" show={isOpen} />
    </Box>
  );
};
