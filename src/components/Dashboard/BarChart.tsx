import React from "react";

const BarChart = ({ data, labels }) => (
  <div className="flex items-end gap-1 h-24">
    {data.map((value, index) => (
      <div key={index} className="flex-1 flex flex-col items-center">
        <div
          className="w-full bg-blue-500 rounded-t-sm transition-all duration-300 hover:bg-blue-600"
          style={{ height: `${(value / Math.max(...data)) * 80}px` }}
        />
        <span className="text-xs text-gray-500 mt-1">{labels[index]}</span>
      </div>
    ))}
  </div>
);

export default BarChart;
