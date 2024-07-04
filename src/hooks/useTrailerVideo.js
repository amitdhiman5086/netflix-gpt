import { API_OPTONS } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/Store/MovieSlice";
import { useEffect } from "react";
export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getTrailerFromId = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailerFromId();
  }, []);
};
