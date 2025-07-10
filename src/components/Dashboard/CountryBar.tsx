import React from "react";

const CountryBar = ({ country, percentage, color }) => (
  <div className="flex items-center justify-between mb-3">
    <span className="text-sm font-medium text-gray-700 w-16">{country}</span>
    <div className="flex-1 mx-4">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  </div>
);

export default CountryBar;
