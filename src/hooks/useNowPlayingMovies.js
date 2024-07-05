import { useEffect } from "react";
import { API_OPTONS } from "../utils/Constant";
import { addMovies, addMoviesPopular, addMoviesTopRated, addMoviesUpcoming } from "../utils/Store/MovieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMoviesPopular(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export const useUpcominMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMoviesUpcoming(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMoviesTopRated(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
