import { useEffect } from "react";
import { API_OPTONS } from "../utils/Constant";
import { addMovies } from "../utils/Store/MovieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;