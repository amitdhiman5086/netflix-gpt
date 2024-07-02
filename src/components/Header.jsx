import React, { useRef, useState } from "react";
import { validation } from "../utils/Validation";

const Header = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleValidation = () => {
    //Validation Function
    const message = validation(
      name.current.value,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
  };

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 p-12 bg-black rounded-md absolute text-white opacity-80 my-52 mx-auto right-0  left-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-500 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-500 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-500 rounded-md"
        />
        <p className="text-red-700 font-bold  text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleValidation}
          className="p-4 my-4 w-full bg-red-600 rounded-md"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleIsSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already Have Account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Header;
