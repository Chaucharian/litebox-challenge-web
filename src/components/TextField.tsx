// TextField.tsx

import { theme } from "@/config/theme";
import { HLine, VStack } from "@marplacode/ui-kit";
import { InputHTMLAttributes, forwardRef } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ placeholder, ...props }, ref) => {
    return (
      <VStack spacing="0" w="100%">
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          {...props}
          style={{
            // Remove base styles
            border: "none",
            outline: "none",
            padding: 0,
            margin: 0,
            background: "none",
            font: "inherit",
            appearance: "none",
            boxShadow: "none",
            textAlign: 'center',
            color: theme.colors.white,
          }}
        />
        <HLine />
      </VStack>
    );
  }
);

TextField.displayName = "TextField";
