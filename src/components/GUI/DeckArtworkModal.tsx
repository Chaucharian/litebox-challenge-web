import { HDStack } from "@marplacode/ui-kit";
import {
  Box,
  VStack,
  Image,
  InfoReveal,
  Text,
} from "@marplacode/ui-kit";
import { FC } from "react";
import { Modal } from "./Modal";

export const DeckArtworkModal: FC<any> = ({ show, onOptionSelected }) => {
  //   const { fieldController } = useFormController(fields, onChange);

  return (
    <Modal show={show}>
      <InfoReveal
        label="Upload your design"
        icon="images/upload_icon.svg"
        show={show}
        contentEnabled={false}
        onClick={() => onOptionSelected('upload')}
        arrowOrientation='right'
      />
        

      <HDStack
        w="100%"
        justifyContent="space-between"
        cursor="pointer"
        onClick={() => onOptionSelected('catalog')}
      >
        <VStack alignItems={"start"} spacing="0">
          <Text show={show} delay={0.2} color="#FFF" fontWeight="400">
            December designs
          </Text>
          <Text show={show} fontWeight="100" color="#FFF" delay={0.6}>
            Handmade
          </Text>
        </VStack>

        <Box w={{ base: "20%", lg: "10%" }}>
          <Image src="images/decemberdesigns.png" show fit="contain" />
        </Box>
      </HDStack>
    </Modal>
  );
};
