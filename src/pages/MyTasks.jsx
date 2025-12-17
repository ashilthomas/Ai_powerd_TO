import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function MyTasks() {
  return (
    <div className="px-5">
      <div className="flex justify-between items-center">
        <Breadcrumbs />
        <h1 className="text-xl font-semibold">My Tasks</h1>
      </div>
      <div className="mt-6 text-gray-600 dark:text-gray-300">
        Coming soon: your assigned tasks, filters, and progress tracking.
      </div>
    </div>
  )
}

export default MyTasks


