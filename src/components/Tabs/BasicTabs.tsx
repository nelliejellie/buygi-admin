import React, { useState } from "react";

const BasicTabs = ({ variant = "default" }) => {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabs = ["Profile", "Dashboard", "Settings", "Contacts", "Disabled"];

  const getTabClass = (tab: any, isActive: any) => {
    if (tab === "Disabled") return "px-4 py-2 text-gray-400 cursor-not-allowed";

    const baseClass = "px-4 py-2 cursor-pointer transition-colors duration-200";

    if (variant === "underline") {
      return `${baseClass} ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
      }`;
    } else if (variant === "pills") {
      return `${baseClass} rounded-lg ${
        isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
      }`;
    } else if (variant === "justified") {
      return `${baseClass} flex-1 text-center ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
      }`;
    }

    return `${baseClass} ${
      isActive
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
    }`;
  };

  return (
    <div>
      <div
        className={`flex ${
          variant === "justified" ? "w-full" : "space-x-1"
        } border-b border-gray-200`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            className={getTabClass(tab, activeTab === tab)}
            onClick={() => tab !== "Disabled" && setActiveTab(tab)}
            disabled={tab === "Disabled"}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 text-gray-600 text-3xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>
  );
};

export default BasicTabs;
