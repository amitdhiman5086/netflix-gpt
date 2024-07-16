import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title1, movies }) => {
  if (movies === null) return;
  // console.log(movies)
  return (
    <div className="">
      <h1 className="py-4 px-2 font-bold text-3xl text-white">{title1}</h1>
      <div className="overflow-x-auto">
        <div className="inline-flex">
          {movies?.map((movie) => (
            <Link to={"/watch?id=" + movie.id} key={movie.id}>
              {" "}
              <MovieCard
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
