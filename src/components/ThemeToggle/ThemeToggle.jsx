import React from 'react'
import { useTheme } from '../../context/ThemeContext';

function ThemeToggle() {
      const { theme, toggleTheme } = useTheme();
  return (
      <button
      onClick={toggleTheme}
      className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  )
}

export default ThemeToggle