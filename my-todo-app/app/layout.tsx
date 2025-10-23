import "./globals.css";
import { Inter } from "next/font/google";
import { TodoProvider } from "@/context/TodoContext";
import { ThemeProvider } from "@/context/ThemeProvider"; // Use your local wrapper
import { Sidebar } from "@/components/Sidebar"; // Import the sidebar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "3D Todo App",
  description: "Frontend technical task with React Three Fiber",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors`}>
        
        {/* ThemeProvider wraps everything */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main layout container */}
          <div className="flex">
            
            {/* The Sidebar is now part of the root layout */}
            <Sidebar />

            {/* The main content area */}
            <main className="flex-1 h-screen overflow-y-auto">
              
              {/* TodoProvider wraps only the page content */}
              <TodoProvider>{children}</TodoProvider>

            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}