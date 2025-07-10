import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-gray-400 border-2 rounded-lg px-6 py-4">
      <div className="max-w-7x flex items-center justify-between">
        {/* Left side - Copyright */}
        <div className="text-sm text-gray-600">© 2025 DashHub</div>

        {/* Right side - Navigation links */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className=" text-gray-600 font-bold text-lg hover:text-gray-900 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#"
            className="font-bold text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Support
          </a>
          <a
            href="#"
            className="font-bold text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
