import React, { Suspense } from "react";
import { Box, UiKitProvider, VStack } from "@marplacode/ui-kit";
import { GUI } from "./components/GUI";
import { ObjectViewer } from "./components/ObjectViewer";

// const UiKitProvider = () =>
//   import("@marplacode/ui-kit").then((module) => module.UiKitProvider);
// const GUI = () => import("@/components/GUI").then((module) => module.GUI);

// const ObjectViewer = () =>
//   import("@/components/ObjectViewer").then((module) => module.ObjectViewer);
function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

export default function App({
  backgroundColor = "#FFF",
  size = "100%",
  width,
  height,
  isDev,
}) {
  const render = () => (
    <VStack
    w={size ?? width}
    h={size ?? height}
    maxW="100%"
    minH="500px"
    height={isMobileDevice() ? '90%' :  '680px' }
    >
      {/* APP */}
      <VStack
        w="100%"
        height={"100%"}
        bg={backgroundColor}
        position={"relative"}
      >
        <Suspense>
          <UiKitProvider>
            <GUI />
            <ObjectViewer />
          </UiKitProvider>
        </Suspense>
      </VStack>
    </VStack>
  );

  // This is for show it better while dev
  if (isDev)
    return (
      <VStack w="100vw" h="100vh" bg="black">
        {render()}
      </VStack>
    );

  return render();
}

async function cropImage(url, cropWidth, cropHeight) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous"; // Allows for cross-origin images if needed
    img.src = url;

    img.onload = () => {
      // Calculate center point for cropping
      const centerX = img.width / 2;
      const centerY = img.height / 2;

      // Determine the cropping area based on the center and custom size
      const startX = Math.max(0, centerX - cropWidth / 2);
      const startY = Math.max(0, centerY - cropHeight / 2);

      // Create an offscreen canvas to perform the crop
      const canvas = document.createElement("canvas");
      canvas.width = cropWidth;
      canvas.height = cropHeight;
      const ctx = canvas.getContext("2d");

      // Draw the cropped area onto the canvas
      ctx.drawImage(
        img,
        startX,
        startY,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      );

      // Convert the canvas to a data URL and return it
      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = (err) => reject(err);
  });
}

// Usage example
// cropImage("https://primitiveskate.com/cdn/shop/files/PS24W0111---SCENES-DECK_1024x1024.jpg?v=1729642403", 300, 1000)
cropImage("https://bakerskateboards.com/cdn/shop/files/JC-Black-Book-B19-8-8.25-shopify.jpg", 500, 1800)

  .then((croppedImage) => {
    const imgElement = document.createElement("img");
    imgElement.src = croppedImage;
    document.body.appendChild(imgElement); // Append to the body or wherever needed
  })
  .catch((error) => console.error("Error cropping image:", error));
