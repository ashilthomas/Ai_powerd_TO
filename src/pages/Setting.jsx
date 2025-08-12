import React from 'react'
import ThemeToggle from '../components/ThemeToggle/ThemeToggle'

function Setting() {
  return (
      <div className="h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Big App Dark Mode</h1>
        <ThemeToggle />
      </div>
  )
}

export default Setting