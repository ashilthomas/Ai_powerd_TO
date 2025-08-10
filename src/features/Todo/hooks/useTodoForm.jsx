//make a hook that will handle the form logic for the todo form

import { useState } from "react";

export const useTodoForm = ({initialData}) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
    tags: [],
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({    
      ...prev,
      [name]: value,
    }));
  };
 

  return { todo, handleChange, };
};
