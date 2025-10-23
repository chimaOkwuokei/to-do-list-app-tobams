import { Task } from "../types/todo";
import TodoItem from "./TodoItem";
import { Plus } from "lucide-react";

interface TodoColumnProps {
  title: string;
  tasks: Task[];
}

export default function TodoColumn({ title, tasks }: TodoColumnProps) {
  return (
    // Column container
    // UPDATED: Removed flex-1, h-[900px]. Added h-full, flex, flex-col, and fixed w-80
   <div className="h-full flex flex-col p-4 rounded-2xl bg-gray-50 border border-dashed border-gray-400 dark:border-none dark:bg-[#24262C]">
      {/* Column Header */}
      <div className="flex justify-between items-center mb-4 shrink-0">
        <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300">
          {title} ({tasks.length})
        </h4>
        <button className="flex items-center gap-1 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
          aria-label={`Add new ${title} task`}
        >
          <Plus size={16} />
          Add new task
        </button>
      </div>

      {/* Task List */}
      {/* UPDATED: Removed h-full. Added flex-1 and overflow-y-auto */}
      {/* This div will now scroll if tasks overflow */}
      <div className="flex flex-col gap-4 flex-1 overflow-y-auto pr-2">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}

        {/* Placeholder for empty or D&D */}
        {tasks.length === 0 && (
          <div className="h-24 flex items-center justify-center text-xs text-gray-400 border-2 border-dashed border-gray-300 dark:border-neutral-700 rounded-xl">
            Drag your task here...
          </div>
        )}
      </div>
    </div>
  );
}