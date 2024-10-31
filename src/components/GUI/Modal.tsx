import { useCalculateNodeSize } from "@marplacode/ui-kit";
import { MotionBox, VStack, Box } from "@marplacode/ui-kit";
import { FC } from "react";

export const Modal: FC<any> = ({ show, children, ...rest }) => {
  const { ref, size } = useCalculateNodeSize({ formatToPixels: true });
  return (
    <>
      {/* DUMB component to calculate 100% */}
      <Box ref={ref} w="100%" />
      <MotionBox show={show} direction="bottom" delay={0.8}>
        <VStack
          px={{ base: "6", lg: "8" }}
          py={{ base: "6" }}
          // w="calc(100vw / 1.2)"
          w={size.width}
          maxW="600px"
          bg="#ffffff47"
          borderRadius="20px"
          spacing="4"
          {...rest}
        >
          {children}
        </VStack>
      </MotionBox>
    </>
  );
};
