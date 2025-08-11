import React from "react";

function TodoNav() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold mb-4">Add Todo</h2>
      <button
        onClick={() => setIsOpen(true)}
        className=" flex items-center gap-2 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Add Todo{" "}
        <span>
          <Plus size={20} />
        </span>
      </button>
    </div>
  );
}

export default TodoNav;
