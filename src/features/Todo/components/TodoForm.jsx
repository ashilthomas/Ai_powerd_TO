import { useState, useCallback } from "react";
import { useTodoForm } from "../hooks/useTodoForm";
import Model from "../../../components/Model/Model";
import ReusableInput from "../../../components/ReusableInput/ReusableInput";
import DropDown from "../../../components/DropDown/DropDown";
import { Plus } from "lucide-react";
import SegmentedControl from "../../../components/SegmentedControl/SegmentedControl";

function TodoForm({ onSubmit, initialData = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const { todo, handleChange, resetForm } = useTodoForm(initialData);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSubmit(todo);
      resetForm();
      closeModal(); // triggers fade-out
    },
    [onSubmit, todo, resetForm, closeModal]
  );

  return (
    <div>
      <button
        onClick={openModal}
        className=" flex items-center gap-2 cursor-pointermain mainDarkModeBtn text-white px-4 py-2 rounded hover:bg-[var(--color-light-accent-bright-cyan-hover)] transition duration-200  delay-150  ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
      >
        Add Todo <span><Plus size={20}/></span>
      </button>

      {/* Render Model only when open to avoid unnecessary work */}
      {isOpen && (
        <Model isOpen={isOpen} onClose={closeModal}>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 ">
            <h2 className="text-xl font-semibold mb-4">Add Todo</h2>

            <ReusableInput
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={todo.title}
              icon={Plus}
            />

            <ReusableInput
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={todo.description}
            />
            <ReusableInput
              type="text"
              name="tags"
              placeholder="addtags (comma separated)"
              onChange={handleChange}
              value={Array.isArray(todo.tags) ? todo.tags.join(", ") : (todo.tags || "")}
            />

            {/* //due date */}
            <SegmentedControl/>

            <ReusableInput
              type="date"
              name="dueDate"
              placeholder="Due Date"
              onChange={handleChange}
              value={todo.dueDate}
            />
            {/* tags */}
          </form>
        </Model>
      )}
    </div>
  );
}

export default TodoForm;

//3 hour project
//1 hour logic build using hackerrank
// 1 hour for problem solving
//1 hour for learing concept for interview
//nextjs
//gsap
//open source attempt
