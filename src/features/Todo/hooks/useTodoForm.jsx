import { useState, useCallback, useMemo } from "react";

export const useTodoForm = ({initialData}) => {
  // Use useMemo for the initial state to avoid recreating on every render
  const initialState = useMemo(() => ({
    title: "",
    description: "",
    priority: "low",
    dueDate: "",
    tags: [],
    ...initialData,
  }), [initialData]);
  
  const [todo, setTodo] = useState(initialState);

  // Memoize the change handler
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({    
      ...prev,
      [name]: value,
    }));
  }, []);
 
  // Memoize the reset function
  const resetForm = useCallback(() => {
    setTodo({
      title: "",
      description: "",
      priority: "low",
      dueDate: "",
      tags: [],
      ...initialData,
    });
  }, [initialData]);

  return { todo, handleChange, resetForm };
};
