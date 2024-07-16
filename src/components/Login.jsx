import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/Constant";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div>
        <img
          src = {BG_URL}
          alt="ok"
        />
      </div>
    </div>
  );
};

export default Login;
