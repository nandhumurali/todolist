import React, { useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <h2>Todo App</h2>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default Todo;