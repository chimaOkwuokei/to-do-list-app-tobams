"use client";
import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { Task } from "@/types/todo";

type TodoContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
};

const TodoContext = createContext<TodoContextType | null>(null);

const dummyTasks: Task[] = [
  // === TO DO ===
  {
    id: "1",
    title: "Design new UI presentation",
    subtitle: "Dribbble marketing",
    status: "todo",
    progress: 7,
    date: "24 Aug 2022",
    comments: 7,
    attachments: 2,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },
  {
    id: "2",
    title: "Add more UI/UX mockups",
    subtitle: "Pinterest promotion",
    status: "todo",
    progress: 4,
    date: "25 Aug 2022",
    comments: 0,
    attachments: 0,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },
  {
    id: "3",
    title: "Design few mobile screens",
    subtitle: "Dropbox mobile app",
    status: "todo",
    progress: 3,
    date: "26 Aug 2022",
    comments: 6,
    attachments: 4,
    assignees: [],
  },
  {
    id: "4",
    title: "Create a tweet and promote",
    subtitle: "Twitter marketing",
    status: "todo",
    progress: 2,
    date: "27 Aug 2022",
    comments: 0,
    attachments: 0,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },

  // === IN PROGRESS ===
  {
    id: "5",
    title: "Design system update",
    subtitle: "Oreo website project",
    status: "inprogress",
    progress: 3,
    date: "12 Nov 2022",
    comments: 0,
    attachments: 0,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },
  {
    id: "6",
    title: "Create brand guideline",
    subtitle: "Oreo branding project",
    status: "inprogress",
    progress: 7,
    date: "13 Nov 2022",
    comments: 2,
    attachments: 13,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },
  {
    id: "7",
    title: "Create wireframe for iOS app",
    subtitle: "Oreo iOS app project",
    status: "inprogress",
    progress: 4,
    date: "14 Nov 2022",
    comments: 0,
    attachments: 0,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },
  {
    id: "8",
    title: "Create UI kit for layout",
    subtitle: "Crypto mobile app",
    status: "inprogress",
    progress: 3,
    date: "15 Nov 2022",
    comments: 23,
    attachments: 12,
    assignees: [],
  },

  // === DONE ===
  {
    id: "9",
    title: "Add product to the market",
    subtitle: "Ui8 marketplace",
    status: "done",
    progress: 10,
    date: "6 Jan 2022",
    comments: 1,
    attachments: 5,
    assignees: [],
  },
  {
    id: "10",
    title: "Launch product promotion",
    subtitle: "Kickstarter campaign",
    status: "done",
    progress: 10,
    date: "7 Jan 2022",
    comments: 17,
    attachments: 3,
    assignees: [],
  },
  {
    id: "11",
    title: "Make twitter banner",
    subtitle: "Twitter marketing",
    status: "done",
    progress: 10,
    date: "8 Jan 2022",
    comments: 0,
    attachments: 0,
    assignees: [
      "/profile.jpg",
      "/profile.jpg"
    ]
  },
];

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);
  const updateTask = (id: string, updates: Partial<Task>) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );

  const value = useMemo(() => ({ tasks, addTask, updateTask }), [tasks]);

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodos = () => useContext(TodoContext)!;
