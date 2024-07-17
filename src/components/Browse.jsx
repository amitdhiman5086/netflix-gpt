import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { addUser, removeUser } from "../utils/Store/UserSlice";
import useNowPlayingMovies, {
  usePopularMovies,
  useTopRatedMovies,
  useUpcominMovies,
} from "../hooks/useNowPlayingMovies";
import HeaderForBrowse from "./HeaderForBrowse";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {
  const nevigate = useNavigate();

  const isShow = useSelector((store) => store.gpt.isShow);

  const dispatch = useDispatch();

  useNowPlayingMovies();
  useUpcominMovies();
  useTopRatedMovies();
  usePopularMovies();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        nevigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        nevigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full">
      <HeaderForBrowse />
      {isShow ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
