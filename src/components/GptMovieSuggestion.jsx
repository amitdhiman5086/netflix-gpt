import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { moviesName, moviesResults } = useSelector((store) => store.gpt);
  // if (gpt.movies == null) return null;
  // console.log(moviesResults[0]);
  if (!moviesName) return null;

  return (
    <div className=" text-white p-4 ">
      {moviesName.map((movie, index) => (
        <MovieList key={movie} title1={movie} movies={moviesResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
