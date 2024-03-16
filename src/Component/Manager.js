import React, { useState } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { leave } from "../Auth/db";
import UpdateLeaveCard from "./UpdateLeaveCard";

const Manager = () => {
  const manager = useSelector((store) => store.user);
  const [temp, setTemp] = useState(leave.leaves);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center flex-col">
        <div className="flex pt-5 justify-center text-xl text-blue-700">
          Hey <p className="font-bold px-2 text-red-500 ">{manager.name}</p>
          Welcome to Manager Dashboard:
        </div>
        <div className=" flex justify-center py-5 text-2xl">
          All employee leaves Details{" "}
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          {temp.map((leave) => (
            <UpdateLeaveCard data={leave}></UpdateLeaveCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manager;
