import "./App.css";
import AddTasks from "./AddTasks.js";
import TaksList from "./TaksList.js";
import TodoHeader from "./TodoHeader.js";
import Timers from "./PomoTimes/Timers.js";
import { useState } from "react";



function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTaks(task) {
    setTodos([...todos, { id: Date.now(), title: task, done: false }]);
  }
  function handleDeleteTaks(taskId) {
    setTodos(todos.filter((todo)=>{
      return todo.id !== taskId
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
    <div className="App">
      <div className="header">
        <TodoHeader />
      </div>
      <div className="main">
        <Timers />
      </div>
      <div className="container">
        <TaksList
          todos={todos}
          onChangeTodo={handleEditTaks}
          onDeleteTodo={handleDeleteTaks}
        />
        <AddTasks onAddTask={handleAddTaks} />
      </div>
    </div>
  );
}

export default App;
