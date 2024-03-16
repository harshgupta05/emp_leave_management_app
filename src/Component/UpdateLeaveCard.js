import React, { useState } from "react";

const UpdateLeaveCard = ({ data }) => {
  const [status, setStatus] = useState(data.status);
  const handleApprove = () => {
    data.status = "Approved";
    setStatus("Approved");
  };
  return (
    <div>
      <div className=" flex justify-center flex-col shadow shadow-gray-700 bg-opacity-20  px-5 py-6 mt-5 placeholder-black  text-black rounded-lg p-5 bg-gradient-to-l from-sky-100 max-w-96">
        <div className="flex flex-row justify-between py-2 gap-6 border-b border-solid border-gray-900">
          <span>Name: </span>
          <span className="font-medium">{data.username}</span>
        </div>
        <div className="flex flex-row justify-between py-2 gap-6 border-b border-solid border-gray-900">
          <span>Leave Type: </span>
          <span className="font-medium">{data.leaveType}</span>
        </div>
        <div className="flex flex-row gap-6 border-b border-solid border-gray-900">
          <div className="flex flex-row justify-between py-2 gap-2">
            <span>Start Date: </span>
            <span className="font-medium">{data.fromDate}</span>
          </div>
          <div className="flex flex-row justify-between py-2 gap-2">
            <span>End Date: </span>
            <span className="font-medium">{data.toDate}</span>
          </div>
        </div>

        <div className="flex flex-row justify-between py-2 gap-6 border-b border-solid border-gray-900">
          <span>Reason : </span>
          <span className="font-medium text-wrap">{data.reason}</span>
        </div>

        <div className="flex flex-row justify-between py-2 gap-6 border-b border-solid border-gray-900">
          <span>Current Status: </span>
          {status === "Approved" ? (
            <span className="font-medium text-green-600">Approved</span>
          ) : (
            <span className="text-red-800 font-medium">Pending</span>
          )}
        </div>

        <div className="flex flex-row justify-between pb-2 pt-4 gap-6 items-center ">
          <span className="text-lg">For Approve Click here</span>
          <span
            className="border rounded-md font-bold text-blue-600 hover:bg-blue-100 border-green-900 border-solid px-5 py-1 cursor-pointer"
            onClick={handleApprove}
          >
            Approve
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdateLeaveCard;
