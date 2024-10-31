import { MotionBox } from "@marplacode/ui-kit";
import { VStack, Image } from "@marplacode/ui-kit";

export const IconButton = ({ show, delay, name, icon, iconDelay=3, iconProps, onClick, ...props }: any) => (
  <MotionBox show={show} delay={delay}>
 <VStack
    borderRadius={"50px"}
    bg="#71717161"
    w="60px"
    h="60px"
    justifyContent="center"
    justifyItems="center"
    alignContent={"center"}
    alignItems="center"
    onClick={() => onClick(name)}
    cursor="pointer"
    {...props}
  >
    <Image src={icon} show delay={iconDelay} width="20px" height="20px" {...iconProps} />
  </VStack>
  </MotionBox>
);