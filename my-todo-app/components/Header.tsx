"use client"; // Keep this as a Client Component if you add interactive elements later

import { Search, Bell, CalendarDays } from "lucide-react";
import Image from "next/image"; // For optimized image handling

export default function Header() {
  // You might want to get the current date dynamically
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }); // e.g., "19 May 2022" as in your design

  return (
    <header className="flex items-center justify-between h-16 px-6 
                       bg-white dark:bg-[#2A2B2F]">
      
      {/* Left section: Welcome message */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Welcome back, Vincent 👋
      </h2>

      {/* Right section: Icons, Date, Profile Pic */}
      <div className="flex items-center gap-4">
        
        {/* Search Icon */}
        <button className="rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800" aria-label="Search">
          <Search size={16} />
        </button>

        {/* Notification Bell Icon */}
        <button className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800" aria-label="Notifications">
          <Bell size={16} />
        </button>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm font-medium">
          <CalendarDays size={16} />
          <span>{currentDate}</span>
        </div>

        {/* Profile Picture */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-transparent hover:border-[#222327] transition-colors cursor-pointer">
          {/* You'll need an actual image file in your public directory. */}
          {/* For example: /public/avatar.jpg */}
          <Image 
            src="/profile.jpg" // Path to your avatar image
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>

      </div>
    </header>
  );
}