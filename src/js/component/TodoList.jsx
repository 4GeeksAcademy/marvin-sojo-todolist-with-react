import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleKeyUp = (e) => {
    if (e.key.toLowerCase() === "enter" && newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      e.target.value = "";
    }
    setNewTask(e.target.value);
  };

  const handleDelete = (index) => {
    const newTaskList = tasks.filter((item, i) => i !== index);
    setTasks(newTaskList);
    
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <input
          className="task-in container form-control rounded-0"
          type="text"
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <ul className="container task-body px-1 m-0 justify-content-center">
          {tasks.map((task, index) => {
            return (
              <div className="container task-body-out d-flex justify-content-between align-items-center my-2 rounded" key={index}>
                <li className="form-label my-2 text-break">
                  {task}
                </li>
                <button
                  className="delete btn rounded-circle text-light border-light my-2"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </div>
            );
          })}
        </ul>
        <div className="efecto-pagina-2 mx-5 container"></div>
        <div className="efecto-pagina-3 mx-5 container"></div>
      </div>
    </>
  );
};

export default TodoList;
