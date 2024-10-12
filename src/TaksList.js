import { useState } from "react";
export default function TaksList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.title}
          onChange={(e) => {
            onChange({ ...task, title: e.target.value });
          }}
        />
        <button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({ ...task, done: e.target.checked });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </>
  );
}
