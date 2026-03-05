"use client";

import { Search, Mail, Bell, User } from "lucide-react";

export default function PortalHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      {/* Top Utility Bar */}
      <div className="bg-gray-50 text-xs text-gray-500 py-1 px-4 border-b border-gray-100 mb-4">
        <div className="portal-container flex justify-between items-center bg-transparent">
           <div className="flex gap-4">
             <span>Brisbane, AU</span>
             <span>Current Time: {new Date().toLocaleTimeString()}</span>
           </div>
           <div className="flex gap-4">
             <span className="cursor-pointer hover:underline">Help</span>
             <span className="cursor-pointer hover:underline">Feedback</span>
           </div>
        </div>
      </div>

      <div className="portal-container px-4 pb-4 bg-white flex flex-col md:flex-row items-center gap-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="text-4xl font-extrabold tracking-tighter text-[#ff0033]">
            PAUL! <span className="text-gray-400 text-xs font-normal tracking-normal ml-1">PORTFOLIO</span>
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-grow w-full max-w-2xl">
            <div className="flex">
                <input 
                    type="text" 
                    placeholder="Search site content..." 
                    className="flex-grow border-2 border-[#ff0033] px-4 py-2 outline-none rounded-l-md focus:bg-yellow-50"
                />
                <button className="bg-[#ff0033] text-white px-8 py-2 font-bold rounded-r-md flex items-center gap-2 hover:bg-red-600 transition-colors">
                    <Search className="w-5 h-5" />
                    Search
                </button>
            </div>
             <div className="flex gap-4 mt-1 text-sm text-[#0033cc]">
                <span className="cursor-pointer hover:underline">Cybersecurity</span>
                <span className="cursor-pointer hover:underline">Android Dev</span>
                <span className="cursor-pointer hover:underline">Projects</span>
                <span className="cursor-pointer hover:underline">Contact</span>
            </div>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex gap-4 items-center">
             <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#ff0033] group">
                <Mail className="w-6 h-6 group-hover:fill-current" />
                <span className="text-xs font-bold">Inquiries</span>
             </button>
             <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-[#ff0033] group">
                <Bell className="w-6 h-6" />
                <span className="text-xs font-bold">Updates</span>
             </button>
             <button className="bg-[#ff0033] text-white px-4 py-2 rounded text-sm font-bold shadow-md hover:bg-red-600">
                Login
             </button>
        </div>
      </div>
    </header>
  );
}
