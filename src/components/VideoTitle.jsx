import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video px-24 pt-[20%] absolute bg-gradient-to-r from-black text-white">
      <div className="h-1/2 overflow-hidden ">
        <h1 className="text-6xl font-bold w-1/4">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
      </div>
      <div>
        <button className="bg-white text-black p-4 px-12 hover:bg-opacity-80 rounded-lg">
          ▶️Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-4 hover:bg-slate-700 px-12 bg-opacity-80 rounded-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
