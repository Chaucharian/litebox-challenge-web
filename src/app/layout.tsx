"use client";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { theme } from "@/config/theme";
import { useToggle, VStack } from "@marplacode/ui-kit";
import dynamic from "next/dynamic";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import { useRouter as useRouterM } from "@marplacode/ui-kit";

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
            // primaryColor: theme.colors.white,
            secondaryColor: theme.colors.grey,
          }}
        >
          <CommonLayout>{children}</CommonLayout>
        </UiKitProvider>
      </body>
    </html>
  );
}

export const CommonLayout = ({  children }) => {
  const { value: isMenuOpen, toggle: toggleMenu } = useToggle();
  const router = useRouterM();

  const changePage = (url) => {
    router.push(url)
    // wait till loader finished
    setTimeout(()=>toggleMenu(),2000)
  }

  return (
    <>
      <Header isOpen={isMenuOpen} onOpenMenu={() => toggleMenu()} />
      {isMenuOpen ? (
        <VStack h="calc(100vh - 80px)" w="100%" bg={theme.colors.grey}>
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
        children
      )}
    </>
  );
};