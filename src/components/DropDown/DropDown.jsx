import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const priorities = [
  { id: "all", label: "All Tasks", tone: "text-gray-700" },
  { id: "high", label: "High Priority", tone: "text-red-600" },
  { id: "medium", label: "Medium Priority", tone: "text-yellow-600" },
  { id: "low", label: "Low Priority", tone: "text-green-600" },
];

const sorts = [
  { id: "dueDate", label: "Due Date" },
  { id: "priority", label: "Priority" },
  { id: "title", label: "Task Title" },
  { id: "assignee", label: "Assignee" },
];

function Dropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      <button
        className="flex items-center gap-2 border rounded-md px-3 py-1 bg-white text-sm"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute mt-1 w-40 bg-white border rounded-md shadow-md z-10">
          {options.map((opt) => (
            <button
              key={opt.id}
              className={`flex justify-between w-full px-3 py-1 text-sm hover:bg-gray-100 ${opt.tone || ""}`}
              onClick={() => {
                onChange(opt.id);
                setOpen(false);
              }}
            >
              {opt.label}
              {value === opt.id && <Check className="w-4 h-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


export default Dropdown