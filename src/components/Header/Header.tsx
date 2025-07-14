import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Bell,
  Users,
  Settings,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import { FaUser, FaCog, FaEnvelope, FaHeadphones, FaSignOutAlt } from 'react-icons/fa';

export default function ResponsiveHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className=" w-full">
        <div className="flex items-center justify-between border-b border-gray-200">
          {/* Desktop Left Section */}

          {/* Mobile Left Section - Hamburger */}
          <div className="md:hidden">
            <button
              className="p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center px-4 flex-row justify-between space-x-4 w-full h-[80px]">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-80 px-4 py-2 border border-gray-300 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-row space-x-4">
              <div className="flex flex-row space-x-2 items-center">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MessageSquare size={20} className="text-gray-600" />
                </button>
                <h1 className="text-lg font-bold text-gray-900">Inbox</h1>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell size={20} className="text-gray-600" />
                </button>
                <h1 className="text-lg font-bold text-gray-900">Chat</h1>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings size={20} className="text-gray-600" />
                </button>
                <h1 className="text-lg font-bold text-gray-900">Setting</h1>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2 justify-center">
              <div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Users size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="relative inline-block text-left" ref={menuRef}>
      {/* Avatar and Name */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-medium">WR</span>
        </div>
        <div className="hidden sm:block text-sm">
          <div className="font-medium text-gray-900">William Robbie</div>
          <div className="text-gray-500">CEO & Founder</div>
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <ul className="py-1 text-sm text-gray-700">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaUser className="mr-2 text-gray-500" />
              Profile
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaCog className="mr-2 text-gray-500" />
              Setting
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaEnvelope className="mr-2 text-gray-500" />
              Message
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <FaHeadphones className="mr-2 text-gray-500" />
              Support
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer">
              <FaSignOutAlt className="mr-2 text-red-500" />
              Sign Out
            </li>
          </ul>
        </div>
      )}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div
            ref={sidebarRef}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-4 space-y-6">
              {/* Search in sidebar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Navigation */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Navigation
                </h3>
                <div className="space-y-1">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
                    <ChevronRight size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Components</span>
                  </button>
                  <div className="ml-6 px-3 py-2">
                    <span className="text-sm font-medium text-gray-900">
                      Tabs
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  Quick Actions
                </h3>
                <div className="space-y-1">
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
                    <Bell size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Notifications</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
                    <Users size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Users</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-3 py-2 text-left hover:bg-gray-100 rounded-lg">
                    <Settings size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Settings</span>
                  </button>
                </div>
              </div>

              {/* User Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">WR</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">
                      William Roobie
                    </div>
                    <div className="text-gray-500">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
