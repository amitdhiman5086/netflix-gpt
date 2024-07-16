import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-56 relative z-20">
      <MovieList title1={"Now Playing"} movies={movies?.nowPlayingMovies} />
      <MovieList title1={"Upcoming"} movies={movies?.upcoming} />
      <MovieList title1={"Top Rated"} movies={movies?.top_rated} />
      <MovieList title1={"Popular"} movies={movies?.popular} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
