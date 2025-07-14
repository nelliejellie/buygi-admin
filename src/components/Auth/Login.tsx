import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, Flame, Moon } from 'lucide-react';

export default function DashHubLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 py-12 lg:px-16 bg-white">
        <div className="max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center mb-12">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-gray-900">DashHub</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back!</h1>
            <p className="text-gray-600">Sign in to your account and join us</p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
            </div>

            {/* Keep me signed in & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={keepSignedIn}
                  onChange={(e) => setKeepSignedIn(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">Keep me signed in</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              SIGN IN
            </button>

            {/* OR Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Google</span>
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
                <span className="text-sm font-medium text-gray-700">Facebook</span>
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-blue-500 to-green-500 to-yellow-500 rounded-sm mr-2"></div>
                <span className="text-sm font-medium text-gray-700">Microsoft</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Blue branded section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        {/* Top right sign up link */}
        <div className="absolute top-6 right-6 flex items-center text-white">
          <Moon className="w-5 h-5 mr-3" />
          <span className="text-sm">Don't have an account?</span>
          <a href="#" className="ml-1 text-sm underline hover:no-underline">Sign Up for Free</a>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Firebase icon */}
            <div className="absolute top-12 left-12 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Flame className="w-6 h-6 text-white" />
            </div>
            
            {/* JavaScript icon */}
            <div className="absolute top-4 right-20 w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">JS</span>
              </div>
            </div>
            
            {/* React icon */}
            <div className="absolute left-4 top-32 w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 text-cyan-400">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89-1.87-.84-1.87-1.89.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96M9.1 5.12c.53-.8 1.18-1.24 1.71-.44.21.33.19.84-.06 1.22-.22.32-.58.44-.91.44-.44 0-.84-.22-1.18-.57-.34-.36-.52-.8-.52-1.23 0-.43.16-.85.47-1.15.27-.26.62-.39.97-.39.44 0 .84.22 1.18.57.34.36.52.8.52 1.23 0 .43-.16.85-.47 1.15-.27.26-.62.39-.97.39-.35 0-.7-.13-.97-.39-.31-.3-.47-.72-.47-1.15s.16-.85.47-1.15c.27-.26.62-.39.97-.39Z"/>
                </svg>
              </div>
            </div>
            
            {/* Wave icon */}
            <div className="absolute right-4 top-44 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            
            {/* 3D Cube icon */}
            <div className="absolute bottom-20 left-16 w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 1.26L12 5.25 8.91 3.26 12 2zm0 2.25l3.09 1.26v5.33L12 9.58V4.25zM8.91 4.51v5.33L12 11.1V5.77L8.91 4.51zm0 7.33v5.33L12 15.9v-5.33L8.91 11.84zm6.18 0L12 13.1v5.33l3.09-1.27v-5.33zM12 16.17l3.09 1.26L12 19.42 8.91 17.43 12 16.17z"/>
                </svg>
              </div>
            </div>
            
            {/* Vercel icon */}
            <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-8 h-8 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 19.7h20L12 2z"/>
                </svg>
              </div>
            </div>
            
            {/* Sketch icon */}
            <div className="absolute left-1/2 bottom-12 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm transform -translate-x-1/2">
              <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
            </div>
            
            {/* Settings icon */}
            <div className="absolute right-20 bottom-32 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-75">CONTRARY TO POPULAR BELIEF</p>
          <p className="text-lg max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Decorative background circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>
    </div>
  );
}