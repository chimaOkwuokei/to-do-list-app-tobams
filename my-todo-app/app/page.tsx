// 1. Removed the Sidebar import
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";


export default function Home() {
  return (
    <section className="flex-1 flex flex-col h-full"> {/* Ensure it fills the parent main tag */}
      <Header />
      <div className="bg-white dark:bg-[#2A2B2F] flex-1 flex flex-col md:flex-row gap-6 p-6 overflow-y-auto"> {/* Made this part scrollable */}
        <div className="flex-1">
          <TodoList />
        </div>
      </div>
    </section>
  );
}