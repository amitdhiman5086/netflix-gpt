import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();
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
  return (
    <div>
      <div className=" flex   items-center justify-between px-8 py-2 bg-gradient-to-b from-black w-full">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        <div className="flex justify-between items-center px-2 ">
          <span className="px-3  font-bold ">{user?.displayName}</span>
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
  );
};

export default Browse;
