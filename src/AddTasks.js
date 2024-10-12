import { useState } from "react";

export default function AddTasks({ onAddTask }) {
  const [todo, setTodo] = useState("");
  return (
    <>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onAddTask(todo);
        }}
      >
        add
      </button>
    </>
  );
}
