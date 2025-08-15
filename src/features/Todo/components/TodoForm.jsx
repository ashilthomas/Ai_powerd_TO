import { useState } from "react";
import { useTodoForm } from "../hooks/useTodoForm";
import Model from "../../../components/Model/Model";
import ReusableInput from "../../../components/ReusableInput/ReusableInput";
import DropDown from "../../../components/DropDown/DropDown";
import { Plus } from "lucide-react";
import SegmentedControl from "../../../components/SegmentedControl/SegmentedControl";

function TodoForm({ onSubmit, initialData = {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const { todo, handleChange, resetForm } = useTodoForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo);
    resetForm();
    setIsOpen(false); // triggers fade-out
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className=" flex items-center gap-2 cursor-pointermain mainDarkModeBtn text-white px-4 py-2 rounded hover:bg-[var(--color-light-accent-bright-cyan-hover)] transition duration-200  delay-150  ease-in-out hover:-translate-y-1 hover:scale-110 cursor-pointer"
      >
        Add Todo{" "}
        <span>
          <Plus size={20} />
        </span>
      </button>

      {/* Always render Model, animation controls mount/unmount */}
      <Model isOpen={isOpen} onClose={() => setIsOpen(false)}>
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
            placeholder="addtags"
            onChange={handleChange}
            value={todo.description}
          />

          {/* //due date */}

          <SegmentedControl />

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
    </div>
  );
}

export default TodoForm;

