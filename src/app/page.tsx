"use client";
import './globals.css'
import { Box, VStack } from "@marplacode/ui-kit";
import { RecomendedMovie } from "@/components/RecomendedMovie";
import { Dropdown } from "@/components/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { MovieList } from "@/components/MovieList";
import { theme } from '@/config/theme';

const fetchMovies = async (endpoint) => {
  const { data } = await axios.get(`api/movies/${endpoint}`);
  return data;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("POPULARES");

  const { data: movies, isLoading: moviesLoading } = useQuery({
    queryKey: ["movies", selectedCategory],
    queryFn: () =>
      fetchMovies(selectedCategory === "MIS PELICULAS" ? "my" : "popular"),
    keepPreviousData: true,
  });

  const { data: featuredMovie, isLoading: featuredLoading } = useQuery({
    queryKey: ["featuredMovie"],
    queryFn: () => fetchMovies("featured"),
  });

  const handleDropdownChange = (newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <VStack
      direction={{ base: "column", lg: "row" }}
      justifyContent="space-between"
      w="100%"
      px={theme.spacing.pxLarge}
      spacing="10"
    >
      <Box position={"absolute"} h="100vh" w="100%" top="0" zIndex={-1}>
        <RecomendedMovie
          movie={featuredMovie}
          delay={1.2}
        />
      </Box>
      <Box h="100vh" />

      <VStack
        w={{ base: "100%", lg: "220px" }}
        spacing="10"
        position={{base:'unset', lg: "absolute" }}
        h={{ lg: "100%" }}
        justify={{base:'center'}}
        right={theme.spacing.pxLarge}
        zIndex={1}
      >
        <Dropdown
        delay={1}
          value={selectedCategory}
          options={[
            { value: "POPULARES", label: "POPULARES" },
            { value: "MIS PELICULAS", label: "MIS PELICULAS" },
          ]}
          onChange={handleDropdownChange}
        />

        <MovieList movies={movies ?? []} isLoading={moviesLoading} delay={1.2}/>
      </VStack>
    </VStack>
  );
}
