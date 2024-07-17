import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router";
import { auth } from "../utils/fireBase";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsShow } from "../utils/Store/GptSlice";
import { LANGUAGE_SUPPORT } from "../utils/Constant";
import { changeLanguage } from "../utils/Store/ConfigSlice";

const HeaderForBrowse = () => {
  const isShow = useSelector((store) => store.gpt.isShow);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptComponent = () => {
    dispatch(toggleIsShow());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="w-full">
      <div className="w-full absolute z-20">
        <div className=" flex  flex-col md:flex-row w-full  items-center justify-between px-8 py-2 bg-gradient-to-b from-black">
          <img
            className="w-44 mx-auto md:mx-0"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
          <div className="flex  flex-row  w-full md:w-auto justify-between items-center px-2 ">
            {isShow && (
              <select
                className="px-4 py-3 rounded-md bg-gray-900 text-white "
                onChange={handleLanguageChange}
              >
                {LANGUAGE_SUPPORT.map((language, index) => (
                  <option value={language.identifer} key={index}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={handleGptComponent}
              className="px-4 py-3 mx-12 rounded-md bg-violet-500 text-white"
            >
              {isShow ? "Close GPT" : "Show GPT"}
            </button>
            <span className="px-3 text-white font-bold ">
              {user?.displayName}
            </span>
            <img
              className="w-12 h-12 rounded-full  "
              src={user?.photoURL}
              alt="userIcon"
            />
            <button
              className="px-3 bg-red-500 rounded-md p-3 text-white mx-2 font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForBrowse;
