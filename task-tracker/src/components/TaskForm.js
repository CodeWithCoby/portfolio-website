import React, { useState } from "react";
import "./TaskForm.scss";

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    onAddTask(newTask);
    setTaskText(""); // Clear the input after adding the task
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
