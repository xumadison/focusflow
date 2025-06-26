import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>📘 FocusFlow</h1>
      <p>Stay focused. Stay productive.</p>

      <input
        type="text"
        placeholder="What do you need to do?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={task.done ? "done" : ""}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
