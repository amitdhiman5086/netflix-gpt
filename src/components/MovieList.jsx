import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title1, movies }) => {
  if (movies === null) return;
  return (
    <div className="">
      <h1 className="py-4 px-2 font-bold text-3xl text-white">{title1}</h1>
      <div className="overflow-x-auto">
        <div className="inline-flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
