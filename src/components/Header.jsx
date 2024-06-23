import React, { useState } from "react";

const Header = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <form className="w-3/12 p-12 bg-black rounded-md absolute text-white opacity-80 my-52 mx-auto right-0  left-0">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-500 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500 rounded-md"
        />
        <button
          className="p-4 my-4 w-full bg-red-600 rounded-md"
          
        >
          Sign In
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleIsSignInForm}>{isSignInForm?"New to Netflix? Sign Up":"Already Have Account? Sign In"}</p>
      </form>
    </div>
  );
};

export default Header;
