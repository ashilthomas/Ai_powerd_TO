import React from "react";
import TodoForm from "../../features/Todo/components/TodoForm";
import MainLayout from "../../layout/MainLayout";
import AllTodos from "../../features/Todo/components/AllTodos";

function Dashbaord() {
  const handleAddTodo = (data) => {
    // dispatch Redux or call API
    console.log("Todo to save:", data);
  };
  return (
    <MainLayout>
     <div className="flex justify-between px-5">
      <h2 className="text-2xl font-semibold mb-4">All Todos</h2>
      <TodoForm onSubmit={handleAddTodo} />
     </div>
      <AllTodos/>
      
    </MainLayout>
  );
}

export default Dashbaord;
