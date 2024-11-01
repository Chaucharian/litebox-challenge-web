"use client";
import { Box, VStack } from "@marplacode/ui-kit";
import { RecomendedMovie } from "@/components/RecomendedMovie";
import { Dropdown } from "@/components/Dropdown";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieList } from "@/components/MovieList";

const fetchMovies = async (endpoint) => {
  const { data } = await axios.get(`api/movies/${endpoint}`);
  return data;
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("POPULARES");

  // Fetch movies based on the selected category
  const { data: movies, isLoading: moviesLoading } = useQuery({
    queryKey: ["movies", selectedCategory],
    queryFn: () =>
      fetchMovies(selectedCategory === "MIS PELICULAS" ? "my" : "popular"),
    keepPreviousData: true,
  });

  // Fetch featured movie separately
  const { data: featuredMovie, isLoading: featuredLoading } = useQuery({
    queryKey: ["featuredMovie"],
    queryFn: () => fetchMovies("featured"),
  });

  // Handle dropdown change
  const handleDropdownChange = (newValue) => {
    console.log('adsad',newValue)
    setSelectedCategory(newValue);
  };

  return (
    <VStack direction={{ base: 'column', lg:'row'}} justifyContent="space-between" w="100%" px="12" spacing="10">
      <Box position={"absolute"} h="100vh" w="100%" top="0" zIndex={-1}>
        {featuredLoading ? (
          <p>Loading featured movie...</p>
        ) : (
          <RecomendedMovie movie={featuredMovie} />
        )}
      </Box>
      <Box 
      h="90vh"
      // h={{base:"90vh", lg: '0'}} 
      />

      <Dropdown
        value={selectedCategory}
        options={[
          { value: "POPULARES", label: "POPULARES" },
          { value: "MIS PELICULAS", label: "MIS PELICULAS" },
        ]}
        onChange={handleDropdownChange}
      />

      <MovieList movies={movies ?? []} isLoading={moviesLoading} />
    </VStack>
  );
}