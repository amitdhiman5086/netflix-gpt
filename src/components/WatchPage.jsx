import React, { useEffect, useState } from "react";

import { json, Link, useSearchParams } from "react-router-dom";

import { useGetAnyVideo } from "../hooks/useGetAnyVideo";
import { useSelector } from "react-redux";
import { API_OPTONS } from "../utils/Constant";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const trailerVideo = useSelector((store) => store.movies?.currentWatching);
  const id = searchParams.get("id");

  useGetAnyVideo(id);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTONS
    );
    const json = await data.json();
    setMovieDetails(json);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  if (movieDetails.length == 0) return null;
  return (
    <div className="flex w-screen flex-col">
      <Link
        to="/"
        className="p-2 m-4 bg-red-600 font-bold text-2xl px-4 rounded-md w-min"
      >
        Back
      </Link>
      <div className=" flex ">
        <div className="w-[70%] h-[50%] m-4 p-2 bg-black rounded-md">
          <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
            //  for Auto Play  ?&autoplay=1&mute=1
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="m-4 p-2 border-2  w-[25%] h-full">
          <h1 className="text-2xl font-semibold my-3">
            ⭐ Rating :- {movieDetails.vote_average}
          </h1>
          <h1 className="text-2xl font-semibold my-3">
            👁️ View Count :- {movieDetails.vote_count}
          </h1>
          <h1 className="text-2xl font-semibold my-3">
            📅 Release Date :- {movieDetails.release_date}
          </h1>
          <h1 className="text-2xl font-semibold my-3">
            💸 Budget :- {movieDetails.budget/1000000}M
          </h1>
          <div className="">
            <h1 className="text-2xl font-semibold my-3">Genres</h1>
            {movieDetails?.genres?.map((item) => (
              <h1 className="ml-8 text-xl font-semibold my-3">👉🏻{item.name}</h1>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[70%] h-[50%] m-4 p-2 border-2 border-black rounded-md ">
        <h1 className="text-3xl font-bold text-red-500">
          {movieDetails.original_title}
        </h1>
        <p className="font-semibold'">{movieDetails.overview}</p>
      </div>
    </div>
  );
};

export default WatchPage;
