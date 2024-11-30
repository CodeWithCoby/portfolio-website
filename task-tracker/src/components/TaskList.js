import React from "react";
import Task from "./Task";
import "./TaskList.scss";

const TaskList = ({ tasks, onToggleCompletion, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? "completed" : ""}>
          <span onClick={() => onToggleCompletion(task.id)}>{task.text}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
