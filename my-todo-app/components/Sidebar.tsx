import {
    Box,
    LayoutGrid,
    User,
    Calendar,
    ClipboardList,
    Cloud,
    Book,
    SlidersHorizontal,
    LogOut,
    ChevronDown,
    ChevronRight,
    Plus
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle"; // Import our new toggle

export function Sidebar() {
    return (
        // Main container for the *entire* sidebar (icon bar + content bar)
        <aside className="hidden md:flex h-screen">

            {/* Part 1: Dark Icon Bar */}
            <div className="w-18 flex flex-col items-center p-4 bg-[#1C1D22] text-gray-400">

                {/* Decorative top dots */}
                <div className="flex gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                </div>

                {/* Logo */}
                <div className="my-6">
                    <Box size={20} className="text-white" />
                </div>

                {/* Navigation Icons */}
                <nav className="flex flex-col items-center gap-1">
                    {/* Active Item */}
                    <button className="p-3 bg-neutral-700 rounded-full text-white" aria-label="Dashboard">
                        <LayoutGrid size={16} />
                    </button>
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Profile">
                        <User size={16} />
                    </button>
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Calendar">
                        <Calendar size={16} />
                    </button>
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Tasks">
                        <ClipboardList size={16} />
                    </button>
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Cloud">
                        <Cloud size={16} />
                    </button>
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Docs">
                        <Book size={16} />
                    </button>
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Settings">
                        <SlidersHorizontal size={16} />
                    </button>
                </nav>

                {/* Bottom Logout Icon */}
                <div className="mt-auto">
                    <button className="p-3 rounded-lg hover:rounded-full hover:bg-neutral-700 hover:text-white" aria-label="Log out">
                        <LogOut size={16} />
                    </button>
                </div>
            </div>

            {/* Part 2: Content Bar (w-64 = 16rem/256px) */}
            <div className="w-64 flex flex-col p-5 bg-white dark:bg-[#222327] drop-shadow-xl">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                        Projects
                    </h1>
                    <button className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 text-gray-500 dark:text-gray-300" aria-label="New Project">
                        <Plus size={20} />
                    </button>
                </div>

                {/* Navigation Sections */}
                <nav className="flex-1 space-y-6">

                    {/* Generic Link Item */}
                    <a href="#" className="flex justify-between items-center text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        Team
                        <ChevronRight size={16} />
                    </a>

                    {/* Collapsible Section (Projects) */}
                    <div>
                        <button className="flex justify-between items-center w-full text-xs font-semibold text-gray-900 dark:text-white mb-2">
                            Projects
                            <ChevronDown size={16} />
                        </button>

                        {/* UPDATED: Indented list items with stepped line */}
                        <div className="relative space-y-4 pl-4">
                            <div
                                className="absolute left-0 top-2 bottom-[-6] w-px bg-gray-200 dark:bg-neutral-700"
                            ></div>

                            <a
                                href="#"
                                className="relative block text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                All projects (3)
                            </a>

                            <a
                                href="#"
                                className="relative block rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-900 dark:bg-neutral-700 dark:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                Design system
                            </a>

                            <a
                                href="#"
                                className="relative block text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                User flow
                            </a>

                            <a
                                href="#"
                                className="relative block text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                Ux research
                            </a>
                        </div>
                    </div>

                    {/* Collapsible Section (Tasks) */}
                    <div>
                        <button className="flex justify-between items-center w-full text-xs font-semibold text-gray-900 dark:text-white mb-2">
                            Tasks
                            <ChevronDown size={16} />
                        </button>
                        {/* UPDATED: Indented list items with stepped line */}
                        <div className="relative space-y-4 pl-4">
                            <div
                                className="absolute left-0 top-2 bottom-[-6] w-px bg-gray-200 dark:bg-neutral-700"
                            ></div>

                            <a
                                href="#"
                                className="relative block text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                All tasks (11)
                            </a>

                            <a
                                href="#"
                                className="relative block rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-900 dark:bg-neutral-700 dark:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                To do (4)
                            </a>

                            <a
                                href="#"
                                className="relative block text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                In progress (4)
                            </a>

                            <a
                                href="#"
                                className="relative block text-sm text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                            >
                                <span
                                    className="absolute left-[-16px] top-1/2 -translate-y-1/2 h-px w-3 bg-gray-200 dark:bg-neutral-700"
                                ></span>
                                Done (3)
                            </a>
                        </div>
                    </div>

                    {/* More Links */}
                    <a href="#" className="flex justify-between items-center text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        Reminders
                        <ChevronRight size={16} />
                    </a>
                    <a href="#" className="flex justify-between items-center text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                        Messengers
                        <ChevronRight size={16} />
                    </a>
                </nav>

                {/* Bottom Theme Toggle */}
                <div className="mt-auto">
                    <ThemeToggle />
                </div>

            </div>
        </aside>
    );
}
