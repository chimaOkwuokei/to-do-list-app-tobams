import { Task } from "../types/todo";
import ProgressBar3D from "./ProgressBar3D"; // Import our new 3D component
import { MoreHorizontal, MessageSquare, Paperclip } from "lucide-react";
import Image from "next/image";


// the cards per todo column
// Helper to get color based on status
function getStatusColor(status: Task['status']): { bar: string; date: string } {
  switch (status) {
    case "done":
      return { bar: "#22c55e", date: "bg-green-100 text-green-700" }; // green-500
    case "inprogress":
      return { bar: "#f97316", date: "bg-orange-100 text-orange-700" }; // orange-500
    default:
      return { bar: "#ef4444", date: "bg-red-100 text-red-700" }; // red-500
  }
}

export default function TodoItem({ task }: { task: Task }) {
  const { bar: barColor, date: dateColor } = getStatusColor(task.status);


  return (
    <div className="p-4 rounded-xl bg-white dark:bg-[#292B31] shadow-sm">
      
      {/* Top: Title and Options */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xs font-semibold text-gray-900 dark:text-white">{task.title}</h3>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{task.subtitle}</p>

      {/* Progress Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-300">Progress</span>
          <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{task.progress}/10</span>
        </div>
        {/* Replace 2D bar with 3D bar */}
        <ProgressBar3D progress={task.progress} color={barColor} />
      </div>

      {/* Bottom: Date, Socials, Avatars */}
      <div className="flex justify-between items-center">
        {/* Date Tag */}
        <span className={`text-xs font-semibold px-3 py-1 rounded-2xl ${dateColor}`}>
          {task.date}
        </span>
        
        {/* Socials & Avatars */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <MessageSquare size={14} />
            <span className="text-xs font-medium">{task.comments}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <Paperclip size={14} />
            <span className="text-xs font-medium">{task.attachments}</span>
          </div>
          
          {/* Avatars */}
          <div className="flex -space-x-2">
            {task.assignees.map((src, i) => (
              <Image
                key={i}
                src={src} // Make sure you have images in /public
                alt="Assignee"
                width={24}
                height={24}
                className="rounded-full border-2 border-white dark:border-neutral-800"
              />
            ))}
            {/* +2 etc. */}
            {parseInt(task.id, 10) % 2 === 0 && ( // Just an example condition
              <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-neutral-700 flex items-center justify-center border-2 border-white dark:border-neutral-800">
                <span className="text-xs font-bold text-gray-600 dark:text-gray-300">+2</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}