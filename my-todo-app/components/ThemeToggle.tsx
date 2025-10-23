"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Base styles for both buttons
  const baseStyle = "flex items-center justify-center gap-2 w-1/2 px-3 py-1.5 rounded-2xl text-sm font-medium transition-all";
  
  // Styles for the active button
  const activeStyle = "bg-white dark:bg-neutral-800 text-gray-900 dark:text-white shadow-sm";
  
  // Styles for the inactive button
  const inactiveStyle = "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white";

  return (
    // This is the container that looks like a segmented control
    <div className="flex w-full items-center p-1 rounded-2xl bg-gray-100 dark:bg-neutral-700">
      <button
        onClick={() => setTheme("light")}
        className={`${baseStyle} ${theme === 'light' ? activeStyle : inactiveStyle}`}
        aria-label="Switch to light mode"
      >
        <Sun size={16} />
        Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${baseStyle} ${theme === 'dark' ? activeStyle : inactiveStyle}`}
        aria-label="Switch to dark mode"
      >
        <Moon size={16} />
        Dark
      </button>
    </div>
  );
}