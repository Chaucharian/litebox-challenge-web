"use client";
import { useGUIStore } from "@store/GUIStore";
import { useSceneStore } from "@store/sceneStore";
import { HDStack } from "@marplacode/ui-kit";
import {
  HStack,
  VStack,
  Image,
  LoaderBox,
  HLine,
  Text,
  useToggle,
  Box,
  StaggerBox,
  useCameraControls,
  Switch,
  Toast,
} from "@marplacode/ui-kit";
import { useRef, useState } from "react";
import { FormBuilder } from "../forms";
import { Fields } from "./Fields";
import { MainButtons } from "./MainButtons";

export const GUI = () => {
  const { toggle: toggleShowGalery, isToggled: isGaleryOpen } = useToggle();
  // const { toggle: togglePliesControls, isToggled: showPliesControls } = useToggle();
  const { setDeckImageUrl, fields, changeField } = useGUIStore();
  const changeStage = useSceneStore((state) => state.changeStage);
  const stage = useSceneStore((state) => state.stage);
  const { cameraRef } = useSceneStore();
  const { move } = useCameraControls({ ref: cameraRef, runOnMount: false });
  // Controls visibility
  const showArtworkControls = stage === "artwork";
  const showControlsForm = stage !== "idle";

  const changeScene = async (scene: string) => {
    changeStage(scene);

    if (scene == "plies") {
      // hide trucks
      changeField("showAccesories", false);
      return move({
        rotation: [360, 150],
        // dollyDistance: 1.9,
        dollyDistance: 2.4,
      });
    }
    if (scene == "artwork") {
      // createForm(pliesForm);
      return move({ rotation: [180, 80], dollyDistance: 3.9 });
    }
    if (scene == "size") {
      return move({
        rotation: [360, 150],
        dollyDistance: 1.9,
      });
    }
    if (scene == "back") {
      changeStage("idle");
      return move({
        rotation: [66, 62],
        dollyDistance: 3.3,
      });
    }
    if (scene == "reset") {
      changeStage("idle");
      return move({
        rotation: [66, 62],
        dollyDistance: 3.3,
      });
    }
  };

  return (
    <VStack color="black" width="100%" h="100%" pt={{ base: "10" }}>
      <HDStack px="10" w="100%">
        <HDStack
          spacing="4"
          zIndex={2}
          justifyItems="start"
          w="100%"
          // pointerEvents='all'
        >
          <Switch
            size={30}
            value={fields.showAccesories?.value}
            onChange={() =>
              changeField("showAccesories", !fields.showAccesories?.value)
            }
          />
          <Text color="#FFF">Accesories</Text>
        </HDStack>

        <Box position="absolute" w="100%" top="32">
          <Toast
            title="Accesories"
            description="Not for sale"
            icon={"images/truck_icon.svg"}
            show={fields.showAccesories?.value}
          />
        </Box>
      </HDStack>

      {/* <VStack width="100%" alignItems="center">
        <Box h="34px" w="120px">
          <Image src="images/december_logo.png" show delay={2} />
        </Box>
      </VStack> */}

      <VStack
        h="100%"
        justifyContent={"flex-end"}
        pb={{ base: "10", lg: "20" }}
        width="100%"
      >
        <VStack justify="end" w="100%">
          <VStack
            display={showControlsForm ? "flex" : "none"}
            position="absolute"
            w="100%"
            h="100%"
            justifyContent="end"
            pb="20"
          >
            <FormBuilder
              show={showControlsForm}
              fields={fields}
              type={stage}
              onChange={changeField}
            />
          </VStack>

          <MainButtons onClick={changeScene} />
        </VStack>
      </VStack>
    </VStack>
  );
};
