import React, { useState } from "react";

const TabComponent = ({ title, children, className = "" }) => (
  <div
    className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}
  >
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

export default TabComponent;
