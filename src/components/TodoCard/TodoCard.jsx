import React from "react";

const TodoCard = ({ todo }) => {
  const priorityColors = {
    high: "bg-red-100 text-red-800 border-red-300",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-300",
    low: "bg-green-100 text-green-800 border-green-300",
  };

  return (
    <div className="  w-full themeCrdBg  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border borderColor ">
      <div className="flex  justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-[var(--color-dark-text-primary)]">{todo.title}</h3>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full border ${
            priorityColors[todo.priority]
          }`}
        >
          {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
        </span>
      </div>
      <p className="themeText text-sm mb-4">{todo.description}</p>
      <div className="mb-4">
        <span className="text-xs font-medium text-gray-500">Due: </span>
        <span className="text-sm text-gray-600 dark:text-[var(--color-dark-text-secondary)]">{todo.dueDate}</span>
      </div>
      <div className="flex flex-wrap  justify-between gap-2">
        <div className="">

     
        {todo.tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 mr-2  py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
           </div>
        <button className="">
            {todo.delete}
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
