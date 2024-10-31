import { useFormController } from "@hooks/useFormController";
import { StaggerBox } from "@marplacode/ui-kit";
import { HDStack } from "@marplacode/ui-kit";
import {
  Box,
  HStack,
  MotionBox,
  Slider,
  VStack,
  Image,
  InfoReveal,
  Text,
} from "@marplacode/ui-kit";
import { FC } from "react";
import { ColorsField } from "./ColorsField";
import { IconButton } from "./IconButton";
// import { InfoReveal } from "../GUI/InfoReveal";
import { VerticalColorPicker } from "./VerticalColorPicker";
import { Modal } from "./Modal";

export const PhotoAdjustmentControls: FC<any> = ({
  show,
  fields,
  onFormChange,
  children,
}) => {
  const { fieldController } = useFormController(fields, onFormChange);

  return (
    <VStack
      position="absolute"
      h="100%"
      w="100%"
      justifyContent={"flex-end"}
      pointerEvents={show ? 'all' : "none"}
      // TODO also thisss paddding move to parent
      px={{ base: "10" }}
    >
      <Modal show={show} delay={0.8}>
        <InfoReveal
          label="Photo adjustments"
          icon="images/align_icon.png"
          show={true}
          // show={show}
          // contentEnabled={false}
          // onClick={() => console.log("ASDDAS")}
        >
          <VStack
            w="100%"
            maxH="300px"
            minH="200px"
            overflowY="scroll"
            pointerEvents={show ? "all" : "none"}
            style={{scrollbarWidth:"none"}}
            alignItems='center'
            justifyItems='center'
            justifyContent='center'
          >
            {/* FIELD */}
            <VStack>
              <Slider step={1} max={100} {...fieldController.leftRight} />
              <HDStack w="100%" justifyContent="space-between">
                <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
                  Left
                </Text>
                <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
                  Right
                </Text>
              </HDStack>
            </VStack>

            {/* FIELD */}
            <VStack>
              <Slider step={1} max={100} {...fieldController.upDown} />
              <HDStack w="100%" justifyContent="space-between">
                <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
                  Up
                </Text>
                <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
                  Down
                </Text>
              </HDStack>
            </VStack>

            {/* FIELD */}
            <VStack>
              <HDStack w="100%" justifyContent="space-between">
                <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
                  Rotate
                </Text>
                <Slider step={1} max={100} {...fieldController.rotation} />
              </HDStack>
            </VStack>

            {/* FIELD */}
            <VStack>
              <HDStack w="100%" justifyContent="space-between">
                <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
                  Scale
                </Text>
                <Slider step={1} max={100} {...fieldController.scale} />
              </HDStack>
            </VStack>
          </VStack>
        </InfoReveal>
      </Modal>
    </VStack>
  );
};
