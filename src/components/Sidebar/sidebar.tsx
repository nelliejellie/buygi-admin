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
  FormInput,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({
    dashboard: false,
    socialApps: false,
    components: true,
    uiElements: false,
    tables: false,
  });

  const [activeItem, setActiveItem] = useState("");

  const navigate = useNavigate();

  const toggleSection = (section: any) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SidebarItem = ({
    icon: Icon,
    label,
    path = "",
    isExpanded,
    onToggle,
    hasChildren = false,
    isActive = false,
  }) => (
    <div
      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 ${
        isActive ? "bg-blue-50 text-blue-600" : "text-gray-700"
      }`}
      onClick={() => {
        setActiveItem(label); // Set active item on click
        if (path) navigate(path);
        else if (hasChildren) onToggle();
      }}
    >
      <div className="flex items-center space-x-3">
        <Icon size={22} />
        <span className="text-xl font-medium">{label}</span>
      </div>
      {hasChildren &&
        (isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
    </div>
  );

  const SubItem = ({ label, isActive = false, path = "" }) => (
    <div
      onClick={() => path && navigate(path)}
      className={`ml-9 px-3 space-y-2 py-1 text-lg cursor-pointer hover:bg-gray-100  rounded ${
        isActive ? "text-blue-600 bg-blue-50" : "text-gray-600"
      }`}
    >
      {label}
    </div>
  );

  return (
    <div className="w-80 hidden md:block  border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <span className="text-3xl font-bold text-gray-800">DashHub</span>
        </div>
        <hr className="border-t border-gray-300 mb-6" />
        <nav className="space-y-1">
          <SidebarItem
            icon={BarChart3}
            label="Dashboard"
            path="/"
            isExpanded={expandedSections.dashboard}
            onToggle={() => toggleSection("dashboard")}
            hasChildren={false}
            isActive={activeItem === "Dashboard"}
          />

          <div className="pt-4">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Apps
            </div>
            <SidebarItem
              icon={Users}
              label="Social Apps"
              isExpanded={expandedSections.socialApps}
              onToggle={() => toggleSection("socialApps")}
              hasChildren={true}
            />
            <SidebarItem icon={Users} label="Contacts" />
          </div>

          <div className="pt-4">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              More
            </div>
            <SidebarItem
              icon={PieChart}
              label="Components"
              isExpanded={expandedSections.components}
              onToggle={() => toggleSection("components")}
              hasChildren={true}
              isActive={false}
            />
            {expandedSections.components && (
              <div className="space-y-1">
                <SubItem label="Accordions" />
                <SubItem label="Tabs" isActive={true} />
                <SubItem label="Modal" />
                <SubItem label="Notification" />
                <SubItem label="Lightbox" />
                <SubItem label="Swiper" />
              </div>
            )}

            <SidebarItem
              icon={Settings}
              label="UI Elements"
              isExpanded={expandedSections.uiElements}
              onToggle={() => toggleSection("uiElements")}
              hasChildren={true}
            />
            <SidebarItem icon={PieChart} label="Chart" />
            <SidebarItem
              icon={FormInput}
              label="Form"
              isExpanded={null}
              path="/form"
              onToggle={() => toggleSection("form")}
              hasChildren={false}
              isActive={activeItem === "Form"}
            />
            <SidebarItem
              icon={Grip}
              label="Modal"
              isExpanded={null}
              path="/modal"
              onToggle={() => toggleSection("modal")}
              hasChildren={false}
              isActive={activeItem === "Modal"}
            />
            <SidebarItem
              icon={BarChart3}
              label="Tables"
              isExpanded={expandedSections.tables}
              path="/table"
              onToggle={() => toggleSection("tables")}
              hasChildren={false}
              isActive={activeItem === "Tables"}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
