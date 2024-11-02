"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { theme } from "@/config/theme";
import { Box, useToggle, VStack } from "@marplacode/ui-kit";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import { useRouter as useMarplaRouter } from "@marplacode/ui-kit";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

const UiKitProvider: any = dynamic(
  () => import("@marplacode/ui-kit").then((module) => module.UiKitProvider),
  { ssr: false }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      ></meta>
      <body>
        <UiKitProvider
          theme={theme}
          router={router}
          pathname={pathname}
          loaderConfig={{
            primaryColor: theme.colors.green,
            secondaryColor: theme.colors.grey,
          }}
        >
          <QueryClientProvider client={queryClient}>
            <CommonLayout>{children}</CommonLayout>
          </QueryClientProvider>
        </UiKitProvider>
      </body>
    </html>
  );
}

export const CommonLayout = ({ children }) => {
  const { value: isMenuOpen, toggle: toggleMenu } = useToggle();
  const router = useMarplaRouter();

  const changePage = (url) => {
    router.push(url);
    // wait till loader finished
    setTimeout(() => isMenuOpen && toggleMenu(), 2000);
  };

  return (
    <VStack>
      <Box position={"fixed"} zIndex={2}>
        <Header
          isOpen={isMenuOpen}
          onLogoClick={() => changePage("/")}
          onAddMovie={() => changePage("/my-movies")}
          onBurgerClick={() => toggleMenu()}
        />
      </Box>

      {isMenuOpen ? (
        <VStack
          h="calc(100vh - 80px)"
          w="100%"
          px={theme.spacing.pxLarge}
          bg={theme.colors.grey}
        >
          <Menu
            options={[
              { label: "INICIO", url: "/" },
              { label: "SERIES", url: "my-movies" },
              { label: "PELICULAS", url: "my-movies" },
              { label: "AGREGADO RECIENTEMENTE", url: "my-movies" },
              { label: "POPULARES", url: "my-movies" },
              { label: "MIS PELICULAS", url: "my-movies" },
              { label: "MI LISTA", url: "my-movies" },
            ]}
            onSelect={({ url }) => changePage(url)}
          />
        </VStack>
      ) : (
        <VStack pt="80px" w="100%">{children}</VStack>
        
      )}
    </VStack>
  );
};
