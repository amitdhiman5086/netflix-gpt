import React from "react";

import { Link, useSearchParams } from "react-router-dom";

import { useGetAnyVideo } from "../hooks/useGetAnyVideo";
import { useSelector } from "react-redux";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const trailerVideo = useSelector((store) => store.movies?.currentWatching);
  const id = searchParams.get("id");
  useGetAnyVideo(id);
  console.log(trailerVideo);
  return (
    <div className="flex w-screen flex-col">
      <Link
        to="/"
        className="p-2 m-4 bg-red-600 font-bold text-2xl px-4 rounded-md w-min"
      >
        Back
      </Link>
      <div>
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
      </div>


    </div>
  );
};

export default WatchPage;
