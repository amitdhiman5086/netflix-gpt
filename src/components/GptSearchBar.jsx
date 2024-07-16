import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector(store=>store.config.language)
  return (
    <div className="pt-[5%] flex justify-center">
      <form className="grid grid-cols-12 bg-black w-1/2">
        <input
          type="text"
          placeholder={lang[language].getSearchPlace}
          className="p-4 m-4 col-span-9"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 rounded-lg text-white">{lang[language].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
