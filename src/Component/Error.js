import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen text-3xl w-screen flex justify-center pt-32">
      Not Authorize To Access This Page Return To Home Page{" "}
      <Link to="/">
        <p className="text-blue-700 font-bold pl-5 hover:text-blue-900 font-serif">
          {" "}
          Click here
        </p>
      </Link>
    </div>
  );
};

export default Error;
