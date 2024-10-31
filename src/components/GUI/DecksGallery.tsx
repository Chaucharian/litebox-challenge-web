import { useFormController } from "@hooks/useFormController";
import { ArrowButton, StaggerBox } from "@marplacode/ui-kit";
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
import { FC, useEffect } from "react";
import { ColorsField } from "./ColorsField";
import { IconButton } from "./IconButton";
// import { InfoReveal } from "../GUI/InfoReveal";
import { VerticalColorPicker } from "./VerticalColorPicker";
import { Modal } from "./Modal";
import { useToggle } from "@marplacode/ui-kit";

const initialDecks = [
  { imageUrl: "images/deck2.png", name: "December Model 1", price: 50 },
  { imageUrl: "images/deck3.png", name: "December Model 2", price: 50 },
  { imageUrl: "images/deck4.png", name: "December Model 3", price: 50 },
  { imageUrl: "images/deck5.png", name: "December Model 4", price: 50 },
  { imageUrl: "images/deck6.png", name: "December Model 5", price: 50 },
  { imageUrl: "images/deck4.png", name: "December Model 3", price: 50 },
  { imageUrl: "images/deck5.png", name: "December Model 4", price: 50 },
  { imageUrl: "images/deck6.png", name: "December Model 5", price: 50 },
];

const SideArrowButton = ({ show, orientation = "left", onClick }: any) => (
  <MotionBox show={show}>
    <VStack
      p="4"
      h="64px"
      w="64px"
      borderRadius="50px"
      bg="#ffffff47"
      borderWidth="0.5"
      borderColor="#FFF"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      <ArrowButton show orientation={orientation} />
    </VStack>
  </MotionBox>
);

export const DecksGallery: FC<any> = ({
  decks = initialDecks,
  indexSelected,
  index = 0,
  show,
  fields,
  onFormChange,
}) => {
  const { fieldController } = useFormController(fields, onFormChange);
  const { toggle: toggleDecksGallery, value: showDecksGallery } = useToggle(
    !show
  );
  const currentDeckValue = fieldController?.deckImage?.value;
  const currentItemIndex = decks.findIndex(
    (deck) => deck.imageUrl === currentDeckValue
  );
  const currentDeck = decks[currentItemIndex];

  const selectDeck = (deck) => onFormChange("deckImage", deck);

  const getNextIndex = (currentIndex: number, totalItems: number) =>
    (currentIndex + 1) % totalItems; // Loop back to the first item

  const getPrevIndex = (currentIndex: number, totalItems: number) =>
    (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last item

  const nextDeck = () => {
    if (!decks.length) return; // Safeguard: handle empty decks

    const newDeckIndex = getNextIndex(currentItemIndex, decks.length);

    selectDeck(decks[newDeckIndex].imageUrl);
  };

  const prevDeck = () => {
    if (!decks.length) return; // Safeguard: handle empty decks

    const currentItemIndex = decks.findIndex(
      (deck) => deck.imageUrl === currentDeckValue
    );
    const newDeckIndex = getPrevIndex(currentItemIndex, decks.length);

    selectDeck(decks[newDeckIndex].imageUrl);
  };

  useEffect(() => {
    if (show) {
      selectDeck(decks[0].imageUrl);
    }
  }, [show]);

  return (
    <VStack
      position="absolute"
      // TODO change this to allow move the 3D
      pointerEvents={show ? "all" : "none"}
      h="100%"
      w="100%"
      justifyContent={"flex-end"}
      // TODO also thisss paddding move to parent
      px={{ base: "10" }}
      zIndex={100}
    >
      {/* CHANGE DECK ARROW BUTTONS */}
      {!showDecksGallery && (
        <HDStack justify="space-between" w="100%">
          <SideArrowButton show={!showDecksGallery} onClick={nextDeck} />
          <HDStack color="white">
            <Text show={show} fontWeight="600" fontSize="24">
              {currentDeck.name.split(" ")[0]}
            </Text>
            <Text show={show} fontWeight="100" fontSize="24">
              -
            </Text>
            <Text show={show} fontWeight="200" fontSize="24">
              {currentDeck.name.split(" ")[1] + currentDeck.name.split(" ")[2]}
            </Text>
          </HDStack>

          <SideArrowButton
            show={!showDecksGallery}
            orientation="right"
            onClick={prevDeck}
          />
        </HDStack>
      )}

      <Modal show={show}
      //  w={{ lg:"500px" }}
       >
        <InfoReveal
          label="Boards"
          icon="images/icon.svg"
          show={showDecksGallery}
          // contentEnabled={false}
          onClick={() => toggleDecksGallery()}
        >
          {/* <HDStack w="500px" > */}
          <HDStack
            w="100%"
            minH="200px"
            // overflowX={"scroll"}
            spacing="4"
            // style={{ scrollbarWidth: "none" }}
          >
            {decks.map((deck, index) => (
              <MotionBox show showInView showOnce>
                <Box
                  borderRadius={"90px"}
                  overflow="hidden"
                  p={indexSelected == index ? "0.5" : 0}
                  bg="#FFF"
                >
                  <Box
                    borderRadius={"90px"}
                    overflow="hidden"
                    cursor="pointer"
                    onClick={() => selectDeck(deck.imageUrl)}
                  >
                    <img
                      style={{ maxWidth: "none" }}
                      width="100px"
                      height="200px"
                      src={deck.imageUrl}
                    />
                  </Box>
                </Box>
              </MotionBox>
            ))}

          </HDStack>
          {/* </HDStack> */}
          
        </InfoReveal>
      </Modal>
    </VStack>
  );
};
