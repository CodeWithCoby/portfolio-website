import React from "react";
import "./Task.scss";

const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.name}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
