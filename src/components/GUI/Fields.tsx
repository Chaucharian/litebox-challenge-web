"use client";
import { MotionBox } from "@marplacode/ui-kit";
import { HStack } from "@marplacode/ui-kit";
import {
  VStack,
  Image,
  StaggerBox,
  useToggle,
  Slider,
} from "@marplacode/ui-kit";
import { useEffect, useState } from "react";
import { ColorsField } from "./ColorsField";
import { IconButton } from "./IconButton";

export const Fields = ({
  fields = {},
  filter = [],
  delay = 0,
  show = true,
  onChange,
}: any) => {
  const fieldNames = filter.length > 0 ? filter : Object.keys(fields);

  return (
    <VStack pointerEvents={"all"} zIndex={2} w="100%" px="10">
      <StaggerBox
        timingGap={20}
        delay={delay}
        show={show}
        spacing="10"
        stackDirection="column"
        width="100%"
        alignItems='start'
      >
        {/* <HStack justifyContent="start" w="100%" bg='red'> */}
        {fieldNames
          .filter((fieldName:string) => fields[fieldName]) // Ensure field exists in fields object
          .map((fieldName:string) => {
            return (
              <Field
                name={fieldName}
                type={fields[fieldName].type}
                value={fields[fieldName].value}
                autoMove={fields[fieldName].moveTo && show ? true : false}
                onChange={onChange}
                {...fields[fieldName]}
              />
            );
          })}
          {/* </HStack> */}
      </StaggerBox>
      {/* <HStack alignItems="start" w="100%" px="10" spacing="8">
        {fieldNames
          .filter((fieldName: string) => fields[fieldName]) // Ensure field exists in fields object
          .map((fieldName: string) => {
            return (
              <Field
                name={fieldName}
                type={fields[fieldName].type}
                value={fields[fieldName].value}
                autoMove={fields[fieldName].moveTo && show ? true : false}
                show={show}
                onChange={onChange}
                {...fields[fieldName]}
              />
            );
          })}
      </HStack> */}
    </VStack>
  );
};

export const Field = ({ type, name, value, show = true, onChange, ...rest }: any) => {
  const onFieldChange = (value: any) => onChange(name, value);

  switch (type) {
    case "slider":
      return (
        <HStack alignContent="center" w="100%" bg="red" >
          {/* <MotionBox show={show}> */}
          <Slider
            step={1}
            max={100}
            value={value}
            onChange={(value: any) => onFieldChange(value)}
            {...rest}
          />
          {/* </MotionBox> */}
        </HStack>
      );
    case "colors":
      return <ColorsField show={show} value={value} {...rest} />;
    case "numbers":
      return null;
    case "upload":
      return null;
    case "iconButton":
      return <IconButton {...rest} />;
    default:
      return null;
  }
};
