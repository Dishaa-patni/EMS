import React from "react";

const CompleteTask = () => {
  return (
    <div className="h-full shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded ">high</h3>
        <h4 className="text-sm">17 November 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold ">Make a Youtube video</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vitae velit ex.
      </p>
      <div className="mt-6">
        <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
