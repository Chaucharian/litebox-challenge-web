import {
  StaggerBox,
  VStack,
  Box,
  useToggle,
  useClickOutside,
} from "@marplacode/ui-kit";
import { useRef } from "react";
import { VerticalColorPicker } from "./VerticalColorPicker";
import { MotionBox } from "@marplacode/ui-kit";

export const ColorsField = ({
  show,
  delay = 0,
  value = [],
  timingGap = 5,
  onChange,
}: any) => {
  const currentColorIndex = useRef(0);
  const colorPickerRef = useRef();
  const {
    toggle: toggleColorPicker,
    value: showColorPicker,
    off: hideColorPicker,
  } = useToggle();
  useClickOutside({
    refs: colorPickerRef,
    onClickOutside: () => hideColorPicker(),
  });

  const isCurrentColor = (index: number) => index === currentColorIndex.current;

  const openColorPicker = (color: any, index: number) => {
    currentColorIndex.current = index;
    toggleColorPicker();
  };

  const selectColor = (color: any) => {
    const newValue = [...value];
    newValue[currentColorIndex.current] = color;
    onChange(newValue);
  };

  return (
    <VStack position="relative">
      <VStack
        pointerEvents={showColorPicker ? "all" : "none"}
        position={"absolute"}
        ref={colorPickerRef}
        justifyContent="center"
        pl="40"
        h="100%"
      >
        <MotionBox show={showColorPicker} direction="left">
          <VerticalColorPicker
            show={showColorPicker}
            suggestedPalettes={["#7e6f58", "#7e2132", "#3498db", "#18614f"]}
            initialColor="#7e6f58"
            steps={50}
            height={300}
            onChange={selectColor}
          />
        </MotionBox>
      </VStack>

      <VStack>
        <StaggerBox
          timingGap={timingGap}
          delay={delay}
          show={show}
          spacing="5"
          stackDirection="column"
        >
          {value.map((color: any, index: number) => (
            <VStack
              borderColor="#ffffff78"
              borderWidth={0.5}
              borderRadius={"50px"}
              p="2"
              justifyContent="center"
              justifyItems="center"
              alignContent={"center"}
              alignItems="center"
              cursor="pointer"
              opacity={showColorPicker ? (isCurrentColor(index) ? 1 : 0.3) : 1}
              onClick={() => openColorPicker(color, index)}
              _hover={{ borderColor: "#FFF" }}
              transition={"all 1s"}
            >
              <Box bg={color} w="8" h="8" borderRadius={"50px"} />
            </VStack>
          ))}
        </StaggerBox>
      </VStack>
    </VStack>
  );
};
