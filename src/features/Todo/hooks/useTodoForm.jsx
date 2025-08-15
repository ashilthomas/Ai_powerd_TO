//make a hook that will handle the form logic for the todo form

import { useState, useCallback, useMemo, useEffect } from "react";

export const useTodoForm = (initialData = {}) => {
  const initial = useMemo(
    () => ({
      title: "",
      description: "",
      priority: "low",
      dueDate: "",
      tags: [],
      ...initialData,
    }),
    [initialData]
  );

  const [todo, setTodo] = useState(initial);

  useEffect(() => {
    setTodo(initial);
  }, [initial]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({
      ...prev,
      [name]: name === "tags"
        ? value
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setTodo(initial);
  }, [initial]);

  return { todo, handleChange, resetForm };
};
