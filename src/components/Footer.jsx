import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 ">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <span>Made by :- </span>
        <span className="font-bold">AMIT DHIMAN</span>
      </div>
    </footer>
  );
};

export default Footer;
