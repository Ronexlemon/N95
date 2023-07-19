import React from "react";

const Name = () => {
  return (
    <div className="h-1/2 w-full ">
      <div className="h-full w-full flex flex-col justify-evenly items-center text-green-600">
        <div className="bg-blue-500 rounded-lg shadow-md p-4 w-64">
          <h1 className="text-4xl text-white">Human Computer Integration</h1>
        </div>
        <div className="bg-pink-500 rounded-lg shadow-md p-4 w-64 mt-4">
          <h1 className="text-4xl text-white">Group Portfolio</h1>
        </div>
      </div>
    </div>
  );
}

export default Name;
