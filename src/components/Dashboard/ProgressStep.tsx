import React from "react";

const ProgressStep = ({ title, value, isLast }) => (
  <div className="flex items-center">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">{value}</span>
      </div>
      {!isLast && <div className="w-0.5 h-8 bg-gray-200 mt-2" />}
    </div>
    <span className="ml-3 text-sm text-gray-600">{title}</span>
  </div>
);

export default ProgressStep;
