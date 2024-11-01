"use client";

import { useState } from "react";
import { Box, VStack, Text, useRouter } from "@marplacode/ui-kit";
import { theme } from "@/config/theme";
import { FileField, TextField, Button, LineLoader } from "@/components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function UploadMovieForm() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const router = useRouter()
  const queryClient = useQueryClient()
  // Define the mutation for uploading the movie
  const uploadMovieMutation = useMutation({
    mutationFn: (formData: FormData) =>
      axios.post("/api/movies/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      }),
    onSuccess: () => {
      setTitle("");
      setImage(null);
      setUploadProgress(0);
      queryClient.invalidateQueries()
      router.push('success')
    },
    onError: (error) => {
      console.error("Upload failed:", error);
    },
  });

  const submitEnabled = image && title;

  const handleFileChange = (file: File) => {
    if (file) setImage(file);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!image || !title) {
      alert("Please provide both an image and a title.");
      return;
    }

    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("title", title);

    uploadMovieMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack justifyContent="space-between" w="100%" px="12" spacing="10">
        <VStack mb="10" spacing="10">
          {/* File Field */}
          <FileField
            placeholder="AGREGÁ UN ARCHIVO"
            onChange={handleFileChange}
          />

          {/* Progress Bar */}
          <LineLoader percentage={uploadProgress} height="6px" />

          {/* Text Field */}
          <TextField
            placeholder="TITULO"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </VStack>

        {/* Buttons */}
        <VStack spacing={"5"}>
          <Button
            bg={theme.colors.white}
            opacity={submitEnabled ? 1 : 0.5}
            textProps={{ color: theme.colors.black }}
            enabled={submitEnabled}
            type="submit"
          >
            SUBIR PELICULA
          </Button>
          <Button border onClick={() => uploadMovieMutation.reset()}>
            SALIR
          </Button>
        </VStack>
      </VStack>
    </form>
  );
}
