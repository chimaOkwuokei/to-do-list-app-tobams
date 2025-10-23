export type Task = {
  id: string;
  title: string;
  status: "todo" | "inprogress" | "done";
  progress: number;
  subtitle: string;
  date: string;
  comments: number;
  attachments: number;
  assignees: string[];
};
