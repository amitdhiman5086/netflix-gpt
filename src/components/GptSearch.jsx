import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/Constant";

const GptSearch = () => {
  return (
    <div className="min-h-screen ">
      <div className="fixed -z-20 ">
        <img className="object-fill" src={BG_URL} alt="ok" />
      </div>
      <div className="bg-black opacity-80">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
