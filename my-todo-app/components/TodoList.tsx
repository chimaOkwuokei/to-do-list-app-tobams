"use client";
import { useTodos } from "../context/TodoContext";
import TodoColumn from "./TodoColumn"; // Import our new column
import { LayoutGrid, List, Plus, SlidersHorizontal, ArrowDownUp, MoreHorizontal } from "lucide-react";

export default function TodoList() {
  const { tasks } = useTodos();

  //filters the todo's from the todos context
  const todo = tasks.filter((t) => t.status === "todo");
  const inprogress = tasks.filter((t) => t.status === "inprogress");
  const done = tasks.filter((t) => t.status === "done");

  return (
    <div className="flex flex-col h-full">

      {/* 1. Board Header - UPDATED to flex-col to contain the underline */}
      <div className="mb-6 shrink-0 flex flex-col">
        {/* Top part of the header (buttons) */}
        <div className="flex justify-between items-center">

          {/* Left: View Toggles (no longer needs flex-col wrapper) */}
          <div className="flex items-center gap-2">
            {/* Active View - 2. UPDATED styles from your snippet */}
            <button className="flex items-center gap-2 px-3 py-2 text-black bg-white dark:text-white dark:bg-[#2A2B2F] rounded-lg">
              <LayoutGrid size={18} />
              <span className="text-sm font-semibold">Board view</span>
            </button>
            {/* Inactive View */}
            <button className="flex items-center gap-2 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white rounded-lg">
              <List size={18} />
              <span className="text-sm font-semibold">Add view</span>
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            {/* 2. UPDATED: Removed border class */}
            <button className="flex items-center gap-2 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
              <SlidersHorizontal size={16} />
              <span className="text-sm font-semibold">Filter</span>
            </button>
            {/* 2. UPDATED: Removed border class */}
            <button className="flex items-center gap-2 px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-neutral-800 rounded-lg">
              <ArrowDownUp size={16} />
              <span className="text-sm font-semibold">Sort</span>
            </button>
            {/* 1. Added missing '...' button */}
            <button className="flex items-center justify-center p-2 w-8 h-8 border border-[#222327] dark:border-gray-400 text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-neutral-800 rounded-full">
              <MoreHorizontal size={20} />
            </button>
            {/* 2. UPDATED: Styles from your snippet (removed Plus icon) */}
            <button className="flex items-center gap-2 px-5 py-2 bg-black dark:bg-[#4B69FF] text-white rounded-2xl">
              <span className="text-sm font-semibold">New template</span>
            </button>
          </div>
        </div>

        {/* Bottom part of the header (the underline) */}
        {/* 3. Moved the active border line here to span the full width */}
        <div className="relative h-0.5 w-full bg-gray-200 dark:bg-neutral-700 mt-4">
          {/* This width (w-28) should roughly match the "Board view" button width */}
          <div className="absolute bottom-0 left-0 h-0.5 w-30 bg-black dark:bg-white" />
        </div>
      </div>

      {/* 2. Board Columns */}
      <div className="flex-1 grid grid-cols-3 gap-6 pb-6">
        <TodoColumn title="To do" tasks={todo} />
        <TodoColumn title="In progress" tasks={inprogress} />
        <TodoColumn title="Done" tasks={done} />
      </div>
    </div>
  );
}