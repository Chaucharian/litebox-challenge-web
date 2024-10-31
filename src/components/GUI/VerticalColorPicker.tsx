// import React, { useEffect, useState, useRef } from "react";
// import { Box, HStack, StaggerBox } from "@marplacode/ui-kit";

// // Utility function to generate harmonic complementary colors
// const generateHarmonicColors = (baseColor: string, steps: number = 5): string[] => {
//   const hexToHsl = (hex: string) => {
//     let r = parseInt(hex.slice(1, 3), 16) / 255;
//     let g = parseInt(hex.slice(3, 5), 16) / 255;
//     let b = parseInt(hex.slice(5, 7), 16) / 255;
//     const max = Math.max(r, g, b),
//       min = Math.min(r, g, b);
//     let h = (max + min) / 2;
//     let s = h, l = h;

//     if (max === min) {
//       h = s = 0;
//     } else {
//       const d = max - min;
//       s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//       switch (max) {
//         case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//         case g: h = (b - r) / d + 2; break;
//         case b: h = (r - g) / d + 4; break;
//       }
//       h /= 6;
//     }
//     return [h * 360, s * 100, l * 100];
//   };

//   const hslToHex = (h: number, s: number, l: number) => {
//     s /= 100;
//     l /= 100;
//     const k = (n: number) => (n + h / 30) % 12;
//     const a = s * Math.min(l, 1 - l);
//     const f = (n: number) =>
//       l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
//     const toHex = (x: number) =>
//       Math.round(x * 255).toString(16).padStart(2, "0");
//     return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
//   };

//   const baseHSL = hexToHsl(baseColor);
//   const harmonicColors = [];

//   for (let i = 0; i < steps; i++) {
//     const hueShift = (baseHSL[0] + (360 / steps) * i) % 360;
//     harmonicColors.push(hslToHex(hueShift, baseHSL[1], baseHSL[2]));
//   }

//   return harmonicColors;
// };

// interface ColorPickerProps {
//   show: boolean;
//   initialColor: string;
//   suggestedPalettes?: string[];
//   steps?: number;
//   height?: number;
//   width?: number;
//   onChange?: (color: string) => void;
// }

// export const VerticalColorPicker: React.FC<ColorPickerProps> = ({
//   initialColor = "#ff5733",
//   suggestedPalettes = [],
//   steps = 5,
//   height = 300,
//   width = 30,
//   show = false,
//   onChange,
// }) => {
//   const [harmonicColors, setHarmonicColors] = useState<string[]>([]);
//   const [hoverPosition, setHoverPosition] = useState<number | null>(null);
//   const pickerRef = useRef<HTMLDivElement>(null);
//   const [hoverColor, setHoverColor] = useState<string | null>(null);
//   const [currentColor, setCurrentColor] = useState<string>(initialColor);

//   useEffect(() => {
//     // Generate harmonic complementary colors based on the current color
//     const colors = generateHarmonicColors(initialColor, steps);
//     setHarmonicColors(colors);
//   }, [initialColor, steps]);

//   const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (!pickerRef.current) return;

//     const { top } = pickerRef.current.getBoundingClientRect();
//     const hoverY = event.clientY - top;
//     const relativeHoverPosition = Math.min(Math.max(hoverY / height, 0), 1); // Ensuring value is between 0 and 1
//     const colorIndex = Math.floor(relativeHoverPosition * (harmonicColors.length));

//     const hoveredColor = harmonicColors[colorIndex] || currentColor;

//     setHoverPosition(hoverY); // Track hover position
//     setHoverColor(hoveredColor); // Set hover color
//     if (onChange) onChange(hoveredColor);
//   };

//   const handleClick = () => {
//     if (hoverColor) {
//       setCurrentColor(hoverColor); // Set current color on click
//     }
//   };

//   const handleSuggestedColorClick = (color: string) => {
//     setCurrentColor(color); // Set new initial color from suggested palette
//   };

//   const gradient = `linear-gradient(to bottom, ${harmonicColors.join(", ")})`;

//   return (
//     <HStack spacing="4" detectMobile={false}>
//       <Box
//         ref={pickerRef}
//         width={width ?? "30px"}
//         onMouseMove={handleMouseMove}
//         onClick={handleClick}
//         style={{
//           position: "relative",
//           height: `${height}px`,
//           background: gradient,
//           cursor: "pointer",
//           borderRadius: "8px",
//           boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
//         }}
//       >
//         {hoverPosition !== null && hoverColor && (
//           <div
//             style={{
//               position: "absolute",
//               top: `${hoverPosition - 12}px`,
//               left: "50%",
//               transform: "translateX(-50%)",
//               width: "24px",
//               height: "24px",
//               borderRadius: "50%",
//               background: hoverColor,
//               border: "2px solid white",
//               boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
//               pointerEvents: "none", // Ignore pointer events on the circle
//             }}
//           />
//         )}
//       </Box>
//       {/* Render the suggested palettes */}
//       <StaggerBox
//         show={show}
//         delay={0.4}
//         timingGap={6}
//         stackDirection="column"
//         direction="left"
//         spacing="2"
//       >
//         {suggestedPalettes.map((color) => (
//           <Box
//             key={color}
//             onClick={() => handleSuggestedColorClick(color)}
//             style={{
//               width: "30px",
//               height: "30px",
//               backgroundColor: color,
//               borderRadius: "50%",
//               margin: "0 5px",
//               cursor: "pointer",
//               border: "2px solid #fff",
//               boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
//             }}
//             title={color}
//           />
//         ))}
//       </StaggerBox>
//     </HStack>
//   );
// };

import React, { useEffect, useState, useRef } from "react";
import { Box, HStack, StaggerBox } from "@marplacode/ui-kit";

// Utility function to generate harmonic complementary colors
const generateHarmonicColors = (baseColor: string, steps: number = 5): string[] => {
  const hexToHsl = (hex: string) => {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h = (max + min) / 2;
    let s = h, l = h;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, l * 100];
  };

  const hslToHex = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = (x: number) =>
      Math.round(x * 255).toString(16).padStart(2, "0");
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
  };

  const baseHSL = hexToHsl(baseColor);
  const harmonicColors = [];

  for (let i = 0; i < steps; i++) {
    const hueShift = (baseHSL[0] + (360 / steps) * i) % 360;
    harmonicColors.push(hslToHex(hueShift, baseHSL[1], baseHSL[2]));
  }

  return harmonicColors;
};

interface ColorPickerProps {
  show: boolean;
  initialColor: string;
  suggestedPalettes?: string[];
  steps?: number;
  height?: number;
  width?: number;
  onChange?: (color: string) => void;
}

export const VerticalColorPicker: React.FC<ColorPickerProps> = ({
  initialColor = "#ff5733",
  suggestedPalettes = [],
  steps = 5,
  height = 300,
  width = 30,
  show = false,
  onChange,
}) => {
  const [harmonicColors, setHarmonicColors] = useState<string[]>([]);
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const pickerRef = useRef<HTMLDivElement>(null);
  const [hoverColor, setHoverColor] = useState<string | null>(null);
  const [currentColor, setCurrentColor] = useState<string>(initialColor);

  useEffect(() => {
    // Generate harmonic complementary colors based on the current color
    const colors = generateHarmonicColors(currentColor, steps);
    setHarmonicColors(colors);
  }, [currentColor, steps]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!pickerRef.current) return;

    const { top } = pickerRef.current.getBoundingClientRect();
    const hoverY = event.clientY - top;
    const relativeHoverPosition = Math.min(Math.max(hoverY / height, 0), 1); // Ensuring value is between 0 and 1
    const colorIndex = Math.floor(relativeHoverPosition * (harmonicColors.length));

    const hoveredColor = harmonicColors[colorIndex] || currentColor;

    setHoverPosition(hoverY); // Track hover position
    setHoverColor(hoveredColor); // Set hover color
    if (onChange) onChange(hoveredColor);
  };

  const handleClick = () => {
    if (hoverColor) {
      setCurrentColor(hoverColor); // Set current color on click
    }
  };

  const handleSuggestedColorClick = (color: string) => {
    setCurrentColor(color); // Set new initial color from suggested palette
    const colors = generateHarmonicColors(color, steps); // Regenerate the harmonic gradient based on selected color
    setHarmonicColors(colors); // Update harmonic colors
  };

  const gradient = `linear-gradient(to bottom, ${harmonicColors.join(", ")})`;

  return (
    <HStack spacing="4" detectMobile={false}>
      <Box
        ref={pickerRef}
        width={width ?? "30px"}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        style={{
          position: "relative",
          height: `${height}px`,
          background: gradient,
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        {hoverPosition !== null && hoverColor && (
          <div
            style={{
              position: "absolute",
              top: `${hoverPosition - 12}px`,
              left: "50%",
              transform: "translateX(-50%)",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: hoverColor,
              border: "2px solid white",
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
              pointerEvents: "none", // Ignore pointer events on the circle
            }}
          />
        )}
      </Box>
      {/* Render the suggested palettes */}
      <StaggerBox
        show={show}
        delay={0.4}
        timingGap={6}
        stackDirection="column"
        direction="left"
        spacing="2"
      >
        {suggestedPalettes.map((color) => (
          <Box
            key={color}
            onClick={() => handleSuggestedColorClick(color)}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: color,
              borderRadius: "50%",
              margin: "0 5px",
              cursor: "pointer",
              border: "2px solid #fff",
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            }}
            title={color}
          />
        ))}
      </StaggerBox>
    </HStack>
  );
};
