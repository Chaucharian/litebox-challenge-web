"use client";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Box, useToggle, VStack } from "@marplacode/ui-kit";
import { Menu } from "@/components/Menu";
import { RecomendedMovie } from "@/components/RecomendedMovie";
import { MovieCard } from "@/components/MovieCard";
import { theme } from "@/config/theme";
import { Dropdown } from "@/components/Dropdown";

export default function Home() {
  return (
    <VStack justifyContent="space-between" w="100%" px="12">
      <Box position={"absolute"} h="100vh" w="100%" top="0" zIndex={-1}>
        <RecomendedMovie
          movie={{
            image:
              "https://sm.ign.com/t/ign_es/screenshot/default/20609360-84ea-4f54-8bf7-72836245cf85_8mje.2560.jpg",
            title: "LA CASA DE PAPEL",
          }}
        />
      </Box>
      <Box h="100vh"/>

<Dropdown value={null} options={[{ value: 'POPULARES', label: 'POPULARES'}, { value: 'MIS PELICULAS', label: 'MIS PELICULAS'}]} />
      <MovieCard
        movie={{
          image:
            "https://sm.ign.com/t/ign_es/screenshot/default/20609360-84ea-4f54-8bf7-72836245cf85_8mje.2560.jpg",
          title: "LA CASA DE PAPEL",
        }}
      />
    </VStack>
  );
}
