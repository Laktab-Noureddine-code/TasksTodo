import "./App.css";
import AddTasks from "./AddTasks.js";
import TaksList from "./TaksList.js";
import { useState } from "react";

const arrayOfTasks = [
  { id: 1, title: "Start project", done: false },
  { id: 2, title: "Doing my home work", done: true },
];

function App() {
  const [todos, setTodos] = useState(arrayOfTasks);

  function handleAddTaks(task) {
    setTodos([...todos, { id: Date.now(), title: task, done: false }]);
  }
  function handleDeleteTaks(taskId) {
    setTodos(todos.filter((todo)=>{
      return todo.id != taskId
    }))
  }
  function handleEditTaks(task) {
    setTodos(
      todos.map((todo)=>{
        if(todo.id === task.id){
          return task
        }else{
          return todo
        }
      })
    )
  }
  return (
    <>
      <AddTasks onAddTask={handleAddTaks} />
      <TaksList
        todos={todos}
        onChangeTodo={handleEditTaks}
        onDeleteTodo={handleDeleteTaks}
      />
    </>
  );
}

export default App;
