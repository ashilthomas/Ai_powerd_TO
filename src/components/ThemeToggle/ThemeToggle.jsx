import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button
        onClick={toggleTheme}
        className=" items-center rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
      >
        {theme === "dark" ? (
         <Moon  className="w-6 h-6 text-[#7D7BFF] fill-[#7D7BFF]"/>
        ) : (
         <Sun className="w-6 h-6 file:bg-yellow-500 text-yellow-500" />
        )}
      </button>
    </>
  );
}

export default ThemeToggle;
