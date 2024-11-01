import { theme } from "@/config/theme";
import {
  Box,
  Image,
  VStack,
} from "@marplacode/ui-kit";
import { Button } from "./Button";
import { useState, useRef } from "react";

type FileFieldProps = {
  single?: boolean
  onChange?: (file: File | FileList | null) => void;
};

export const FileField = ({ single = true, onChange }: FileFieldProps) => {
  const [file, setFile] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile =  single ? e.target.files?.[0] || null : e.target.files;
    setFile(selectedFile !== null ? true : false);
    if (onChange) onChange(selectedFile);
  };

  // Open file dialog
  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <VStack
      w="100%"
      border={`1px dashed ${theme.colors.white}`}
      justify="center"
      align="center"
      bg={theme.colors.grey}
    >
      <Button
        leftIcon={
          <Box w="16px" h="16px">
            <Image src="images/clip_icon.svg" />
          </Box>
        }
        type="button" 
        onClick={openFileDialog}
      >
        {file ? "Change File" : "Agregá un archivo"}
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </VStack>
  );
};






