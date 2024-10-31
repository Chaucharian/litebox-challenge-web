"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { theme } from "@/config/theme";
import { Box, useToggle, VStack } from "@marplacode/ui-kit";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Litflix",v
//   description: "movies;",
// };

const UiKitProvider: any = dynamic(
  () => import("@marplacode/ui-kit").then((module) => module.UiKitProvider),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { value: isMenuOpen, toggle: toggleMenu } = useToggle();

  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      ></meta>
      <body> 
        <UiKitProvider theme={theme}>
          <Header isOpen={isMenuOpen} onOpenMenu={() => toggleMenu()} />
          {isMenuOpen ? (
            <VStack h="calc(100vh - 80px)" w="100%" bg={theme.colors.grey}>
              <Menu
                options={[
                  { label: "INICIO", url: "my-movies" },
                  { label: "SERIES", url: "my-movies" },
                  { label: "PELICULAS", url: "my-movies" },
                  { label: "AGREGADO RECIENTEMENTE", url: "my-movies" },
                  { label: "POPULARES", url: "my-movies" },
                  { label: "MIS PELICULAS", url: "my-movies" },
                  { label: "MI LISTA", url: "my-movies" },
                ]}
              />
            </VStack>
          ) : (
            children
          )}
        </UiKitProvider>
      </body>
    </html>
  );
}
