import { Plus, Trash } from "lucide-react";
import TodoCard from "../../../components/TodoCard/TodoCard";
import { useState } from "react";

const todoData = [
  {
    title: "Complete Project Proposal",
    description: "Draft and finalize the project proposal for client meeting",
    priority: "high",
    dueDate: "2025-08-15",
    tags: ["work", "urgent", "client"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Grocery Shopping",
    description: "Buy groceries for the week, including vegetables, milk, and snacks",
    priority: "medium",
    dueDate: "2025-08-12",
    tags: ["personal", "errands"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Schedule Team Meeting",
    description: "Organize a team sync to discuss project milestones",
    priority: "medium",
    dueDate: "2025-08-14",
    tags: ["work", "team", "planning"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Morning Workout",
    description: "Complete 30-minute cardio session at the gym",
    priority: "low",
    dueDate: "2025-08-11",
    tags: ["health", "fitness"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Read Research Paper",
    description: "Review AI ethics paper for upcoming discussion",
    priority: "high",
    dueDate: "2025-08-13",
    tags: ["study", "research", "urgent"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Plan Weekend Trip",
    description: "Research destinations and book accommodations",
    priority: "low",
    dueDate: "2025-08-20",
    tags: ["personal", "travel", "leisure"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Update Portfolio Website",
    description: "Add recent projects and fix responsive design issues",
    priority: "medium",
    dueDate: "2025-08-18",
    tags: ["work", "portfolio", "web"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Doctor Appointment",
    description: "Annual check-up with Dr. Smith",
    priority: "high",
    dueDate: "2025-08-16",
    tags: ["health", "appointment"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Complete Project Proposal",
    description: "Draft and finalize the project proposal for client meeting",
    priority: "high",
    dueDate: "2025-08-15",
    tags: ["work", "urgent", "client"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Grocery Shopping",
    description: "Buy groceries for the week, including vegetables, milk, and snacks",
    priority: "medium",
    dueDate: "2025-08-12",
    tags: ["personal", "errands"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Schedule Team Meeting",
    description: "Organize a team sync to discuss project milestones",
    priority: "medium",
    dueDate: "2025-08-14",
    tags: ["work", "team", "planning"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Morning Workout",
    description: "Complete 30-minute cardio session at the gym",
    priority: "low",
    dueDate: "2025-08-11",
    tags: ["health", "fitness"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Read Research Paper",
    description: "Review AI ethics paper for upcoming discussion",
    priority: "high",
    dueDate: "2025-08-13",
    tags: ["study", "research", "urgent"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Plan Weekend Trip",
    description: "Research destinations and book accommodations",
    priority: "low",
    dueDate: "2025-08-20",
    tags: ["personal", "travel", "leisure"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Update Portfolio Website",
    description: "Add recent projects and fix responsive design issues",
    priority: "medium",
    dueDate: "2025-08-18",
    tags: ["work", "portfolio", "web"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
  {
    title: "Doctor Appointment",
    description: "Annual check-up with Dr. Smith",
    priority: "high",
    dueDate: "2025-08-16",
    tags: ["health", "appointment"],
    delete: <Trash className="cursor-pointer text-red-500" size={20} />,
  },
];

function AllTodos() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  const totalPages = Math.ceil(todoData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = todoData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="w-full mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((todo, index) => (
          <TodoCard key={index} todo={todo} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          onClick={() => setCurrentPage((p) => p + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllTodos;
