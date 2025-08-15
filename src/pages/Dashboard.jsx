import React, { useCallback } from "react";



import TodoForm from "../features/Todo/components/TodoForm";
import AllTodos from "../features/Todo/components/AllTodos";
import MainLayout from "../layout/MainLayout";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

function Dashboard() {
  const handleAddTodo = useCallback((data) => {
    // dispatch Redux or call API
    console.log("Todo to save:", data);
  }, []);
  return (
    <>
     <div className="flex justify-between px-5">
      <Breadcrumbs/>
      <TodoForm onSubmit={handleAddTodo} />
     </div>
      <AllTodos/>
      </>
      
   
  );
}

export default Dashboard;