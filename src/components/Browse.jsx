import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { addUser, removeUser } from "../utils/Store/UserSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import HeaderForBrowse from "./HeaderForBrowse";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nevigate = useNavigate();
  
  const dispatch = useDispatch();

  useNowPlayingMovies();

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
    <>
      <HeaderForBrowse />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
