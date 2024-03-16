import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import LeaveCard from "./LeaveCard";
import { leave } from "../Auth/db";
import { addToLeaves } from "../Utils/allLeavesSlice";

const Employee = () => {
  //   const [temp, setTemp] = useState(leave.leaves);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState(leave.leaves);
  const data = useSelector((store) => store.user);
  const userName = data?.name;
  const userId = data?.id;
  const formRef = useRef(null);

  const handelButtonClick = (e) => {
    e.preventDefault();

    const ndata = {
      id: userId,
      username: userName,
      fromDate: formRef.current.startDate.value,
      toDate: formRef.current.endDate.value,
      leaveType: formRef.current.leaveType.value,
      status: "Pending",
    };

    dispatch(addToLeaves());

    setTemp([...temp, ndata]);
    leave.leaves.push(ndata);

    console.log(leave.leaves);

    // Reset the form fields
    formRef.current.reset();
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col">
        <div className="flex pt-5 justify-center text-xl text-blue-700">
          Hey <p className="font-bold px-2 text-red-500 ">{userName}</p>Welcome
          to Employee Dashboard:
        </div>
        <div className="flex flex-row text-xl font-semibold pt-10">
          <div className="flex flex-1 flex-col justify-start px-20">
            <div className="flex justify-center">
              {" "}
              Want A Leave Fill The Form
            </div>
            <form
              ref={formRef}
              className="flex flex-col bg-blue-700  justify-center shadow shadow-gray-700 bg-opacity-20  px-5 py-6 my-5 placeholder-black  text-black rounded-lg "
              onSubmit={handelButtonClick}
            >
              <input
                name="leaveType"
                type="text"
                placeholder="Leave Type"
                className="p-3 my-2 w-full bg-transparent placeholder-black text-black appearance-none border-purple-900 border-solid border rounded-lg"
              ></input>
              <div className="flex flex-row gap-4">
                <input
                  name="startDate"
                  type="date"
                  placeholder="Start"
                  className="p-3 my-2 w-full bg-transparent placeholder-black text-black appearance-none border-purple-900 border-solid border rounded-lg"
                ></input>
                <input
                  name="endDate"
                  type="date"
                  placeholder="End"
                  className="p-3 my-2 w-full bg-transparent placeholder-black text-black appearance-none border-purple-900 border-solid border rounded-lg"
                ></input>
              </div>
              <textarea
                name="reason"
                placeholder="Reason for leave...."
                rows={7}
                className="p-3 my-2 bg-transparent placeholder-black border border-solid border-purple-900 rounded"
              ></textarea>
              <button
                type="submit"
                className="p-2 my-4 px-8  bg-blue-600 rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-1 items-center flex-col">
            Status of Leave Applications
            {temp.map(
              (leave, index) =>
                leave.id === userId && <LeaveCard key={index} data={leave} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
