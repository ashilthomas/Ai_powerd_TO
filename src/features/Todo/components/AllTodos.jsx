import { Plus, Trash } from "lucide-react";
import React from "react";
import TodoCard from "../../../components/TodoCard/TodoCard";

const todoData = [
  {
    id: "proposal",
    title: "Complete Project Proposal",
    description: "Draft and finalize the project proposal for client meeting",
    priority: "high",
    dueDate: "2025-08-15",
    tags: ["work", "urgent", "client"],
     delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "grocery",
    title: "Grocery Shopping",
    description: "Buy groceries for the week, including vegetables, milk, and snacks",
    priority: "medium",
    dueDate: "2025-08-12",
    tags: ["personal", "errands"],
   delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "team-meeting",
    title: "Schedule Team Meeting",
    description: "Organize a team sync to discuss project milestones",
    priority: "medium",
    dueDate: "2025-08-14",
    tags: ["work", "team", "planning"],
    delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "workout",
    title: "Morning Workout",
    description: "Complete 30-minute cardio session at the gym",
    priority: "low",
    dueDate: "2025-08-11",
    tags: ["health", "fitness"],
    delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "paper",
    title: "Read Research Paper",
    description: "Review AI ethics paper for upcoming discussion",
    priority: "high",
    dueDate: "2025-08-13",
    tags: ["study", "research", "urgent"],
    delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "trip",
    title: "Plan Weekend Trip",
    description: "Research destinations and book accommodations",
    priority: "low",
    dueDate: "2025-08-20",
    tags: ["personal", "travel", "leisure"],
     delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "portfolio",
    title: "Update Portfolio Website",
    description: "Add recent projects and fix responsive design issues",
    priority: "medium",
    dueDate: "2025-08-18",
    tags: ["work", "portfolio", "web"],
    delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  },
  {
    id: "doctor",
    title: "Doctor Appointment",
    description: "Annual check-up with Dr. Smith",
    priority: "high",
    dueDate: "2025-08-16",
    tags: ["health", "appointment"],
   delete:<Trash className="cursor-pointer text-red-500" size={20}/>
  }
];
function AllTodos() {
  return (
    <div>
        
        <div className="w-full mx-auto mt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {todoData.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
        
    </div>
  )
}

export default React.memo(AllTodos)