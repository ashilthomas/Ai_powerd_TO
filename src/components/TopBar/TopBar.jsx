import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import ThemeToggle from "../ThemeToggle/ThemeToggle";


export default function Topbar({ setSidebarOpen }) {
  return (
    <header className="flex items-center border-b borderColor themeBg text-black dark:text-white justify-between bg-white px-4 py-3 shadow-sm">

      <div className="flex items-center gap-3">
        <button className="md:hidden cusror-pointer" onClick={() => setSidebarOpen(true)}>
          <Menu className="w-6 h-6 text-gray-600 cusror-pointer" />
        </button>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border borderColor pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-4">
          <ThemeToggle/>
        <button className="relative text-gray-600 dark:text-white hover:text-gray-800">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden sm:inline text-sm font-medium dark:text-white text-gray-700">
            John Doe
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-white" />
        </div>
       
      </div>
     
    </header>
  );
}
