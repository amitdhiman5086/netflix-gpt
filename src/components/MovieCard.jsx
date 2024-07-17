import React from "react";
import { IMG_URL } from "../utils/Constant";

const MovieCard = ({ title, poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-40 md:w-56 mx-2  ">
      <h1 className="overflow-hidden whitespace-nowrap text-ellipsis font-bold text-white">
        {title}
      </h1>
      <img
        className="bg-red-500 p-1 rounded-md"
        alt={title}
        src={IMG_URL + poster_path}
      />
    </div>
  );
};

export default MovieCard;
