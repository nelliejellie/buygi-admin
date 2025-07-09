import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  User,
  BarChart3,
  Settings,
  Users,
  Bell,
  Lightbulb,
  Move,
  PieChart,
  Type,
  Grip,
} from "lucide-react";

const IconTabs = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabs = [
    { name: "Profile", icon: User },
    { name: "Dashboard", icon: BarChart3 },
    { name: "Settings", icon: Settings },
    { name: "Contacts", icon: Users },
  ];

  return (
    <div>
      <div className="flex space-x-1 border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              className={`flex items-center space-x-2 px-4 py-2 cursor-pointer transition-colors duration-200 ${
                activeTab === tab.name
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900 border-b-2 border-transparent"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <Icon size={16} />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-4 text-gray-600">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </div>
  );
};

export default IconTabs;
