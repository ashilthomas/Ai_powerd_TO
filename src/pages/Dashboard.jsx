import React, { useState, useCallback, useMemo } from "react";
import TodoForm from "../features/Todo/components/TodoForm";
import AllTodos from "../features/Todo/components/AllTodos";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import AiSuggestions from "../components/Ai/AiSuggestions";
import Dropdown from "../components/DropDown/DropDown";

const Dashboard = React.memo(function Dashboard() {
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("dueDate");

  // Memoize static arrays to prevent unnecessary recreations on re-renders
  const priorities = useMemo(
    () => [
      { id: "all", label: "All Tasks", tone: "text-gray-700" },
      { id: "high", label: "High Priority", tone: "text-red-600" },
      { id: "medium", label: "Medium Priority", tone: "text-yellow-600" },
      { id: "low", label: "Low Priority", tone: "text-green-600" },
    ],
    []
  );

  const sortOptions = useMemo(
    () => [
      { id: "dueDate", label: "Due Date" },
      { id: "priority", label: "Priority" },
      { id: "title", label: "Task Title" },
    ],
    []
  );

  // Use useCallback for event handlers to prevent unnecessary recreations
  const handleAddTodo = useCallback((data) => {
    // dispatch Redux or call API
    // Implementation will be added later
    console.log("Todo added:", data);
  }, []);

  // Memoize filter change handler
  const handleFilterChange = useCallback((value) => {
    setFilter(value);
  }, []);

  // Memoize sort change handler
  const handleSortChange = useCallback((value) => {
    setSort(value);
  }, []);
  return (
    <>
   
      <div className="flex justify-between px-5">
        <Breadcrumbs />
        <div className="flex gap-2">
          <AiSuggestions />

          <TodoForm onSubmit={handleAddTodo} />
        </div>
      </div>
      <div className="flex justify-between px-5 items-center mt-5">
        <h1>All todos</h1>
        <div className="flex gap-3 border border-gray-300 rounded-md px-5 py-3">
          <Dropdown
            label="Filter"
            options={priorities}
            value={filter}
            onChange={handleFilterChange}
          />
          <Dropdown
            label="Sort"
            options={sortOptions}
            value={sort}
            onChange={handleSortChange}
          />
        </div>
      </div>
      <AllTodos />
    </>
  );
});

export default Dashboard;
