"use client";
import { VStack, Image, StaggerBox, useToggle } from "@marplacode/ui-kit";
import { useEffect, useState } from "react";
import { IconButton } from "./IconButton";

const buttons = [
  { name: "plies", icon: "images/icon.svg" },
  { name: "artwork", icon: "images/icon2.svg" },
  { name: "size", icon: "images/icon3.svg" },
];

const confirmButtons = [
  { name: "back", icon: "images/cancel_icon.svg" },
  { name: "reset", icon: "images/check_icon.svg" }
];

export const MainButtons = ({ onClick, ...rest }: any) => {
  const [isFirstTime, setFirstTime] = useState(true)
  const {isToggled: showConfirmButtons, toggle: toggleShowConfirmButtons} = useToggle(false)

  const onOptionClick = (optionName:string) => {
    setFirstTime(false)
    toggleShowConfirmButtons()
    onClick(optionName)
  }

  return (
    <VStack pointerEvents={"all"} zIndex={2} >
      <StaggerBox timingGap={20} delay={isFirstTime ? 3.9 : 0} show={!showConfirmButtons} spacing="10" onAnimationFinished={()=>console.log('EENDDD')}>
        {buttons.map(({ name, icon }) => (
          <IconButton name={name} icon={icon} onClick={() => onOptionClick(name)} />
        ))}
      </StaggerBox>
      <StaggerBox timingGap={20} show={showConfirmButtons} spacing="10">
        {confirmButtons.map(({ name, icon }) => (
          <IconButton name={name} icon={icon} onClick={() => onOptionClick(name)} />
        ))}
      </StaggerBox>
    </VStack>
  );
};
