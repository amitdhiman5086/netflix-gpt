import { useEffect } from "react";
import { API_OPTONS } from "../utils/Constant";
import {
  addMovies,
  addMoviesPopular,
  addMoviesTopRated,
  addMoviesUpcoming,
} from "../utils/Store/MovieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};
export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.popular);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMoviesPopular(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};
export const useUpcominMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.upcoming);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMoviesUpcoming(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};
export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((store) => store.movies.top_rated);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTONS
    );
    const json = await data.json();

    dispatch(addMoviesTopRated(json.results));
  };

  useEffect(() => {
    !nowPlaying && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
