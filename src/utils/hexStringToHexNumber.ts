export const hexStringToHexNumber = (hex: string): number => {
  // Remove the "#" character if it exists
  const sanitizedHex = hex.replace("#", "");

  // Convert the hex string to a number and prepend "0x" to make it a hex number
  return parseInt(sanitizedHex, 16);
};
