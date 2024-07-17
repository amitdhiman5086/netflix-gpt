import React from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { genAI } from "../utils/openAI";
import { API_OPTONS } from "../utils/Constant";
import { addGptSearchMovies } from "../utils/Store/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchText = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text().split(",");
    // console.log(text);

    const promiseArray = text.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    // console.log(tmdbResults);

    dispatch(addGptSearchMovies({movies:text , moviesResults : tmdbResults}));
  };
  return (
    <div className="pt-[35%]  md:pt-[5%] flex justify-center">
      <form
        className="grid grid-cols-12 bg-black w-full md:w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[language].getSearchPlace}
          ref={searchText}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white"
          onClick={handleGptSearchText}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
