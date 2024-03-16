import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center">
        <div className="text-green-900 text-3xl mt-32 w-8/12">
          "Welcome to our Leave Management Portal, where employees, managers,
          and HR collaborate seamlessly to manage leave requests efficiently and
          ensure smooth operations."
        </div>
      </div>
    </>
  );
};

export default Home;
