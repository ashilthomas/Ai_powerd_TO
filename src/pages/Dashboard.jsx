import React from "react";



import TodoForm from "../features/Todo/components/TodoForm";
import AllTodos from "../features/Todo/components/AllTodos";
import MainLayout from "../layout/MainLayout";

function Dashboard() {
  const handleAddTodo = (data) => {
    // dispatch Redux or call API
    console.log("Todo to save:", data);
  };
  return (
    <>
     <div className="flex justify-between px-5">
      <h2 className="text-2xl font-semibold mb-4">All Todos</h2>
      <TodoForm onSubmit={handleAddTodo} />
     </div>
      <AllTodos/>
      </>
      
   
  );
}

export default Dashboard;