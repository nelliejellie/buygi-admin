import React from "react";

const WorldMap = () => (
  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 h-64">
    <div className="absolute inset-0 rounded-lg overflow-hidden">
      <div className="w-full h-full relative">
        {/* Simplified world map representation */}
        <div className="absolute top-8 left-16 w-32 h-20 bg-blue-400 rounded-lg opacity-80" />{" "}
        {/* North America */}
        <div className="absolute top-12 right-20 w-28 h-16 bg-purple-500 rounded-lg opacity-80" />{" "}
        {/* Asia */}
        <div className="absolute bottom-16 left-24 w-20 h-20 bg-orange-400 rounded-lg opacity-80" />{" "}
        {/* South America */}
        <div className="absolute top-16 left-40 w-24 h-18 bg-blue-300 rounded-lg opacity-80" />{" "}
        {/* Europe */}
        <div className="absolute bottom-12 right-32 w-20 h-16 bg-yellow-400 rounded-lg opacity-80" />{" "}
        {/* Australia */}
      </div>
    </div>
  </div>
);

export default WorldMap;
