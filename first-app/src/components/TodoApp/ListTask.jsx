import React from "react";

function ListTask({ tasks, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 && <p>No tasks added</p>}
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTask;
