import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/Constant";

const GptSearch = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute -z-20">
        <img src={BG_URL} alt="ok" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
