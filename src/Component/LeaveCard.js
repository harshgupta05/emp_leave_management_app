import React from "react";

const LeaveCard = ({ data }) => {
  //   console.log(data.id);
  return (
    <div className="text-black">
      <div className="flex flex-col py-4 px-5 shadow shadow-gray-700 bg-blue-200 rounded-md mt-4">
        <span className="border-b border-solid border-blue-900 py-1 px-5">
          Leave Type: {data.leaveType}
        </span>
        <span className="border-b border-solid border-blue-900 py-1 px-5">
          Number Of Days: {data.numberOfDays}
        </span>
        <div className="border-b border-solid border-blue-900 py-1 px-5">
          <span>From: {data.fromDate} </span>
          <span>To: {data.toDate} </span>
        </div>
        <span className="px-5">
          Status:
          {data.status === "Approved" ? (
            <span className="text-green-600"> Approved</span>
          ) : (
            <span className="text-red-900"> Pending</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default LeaveCard;
