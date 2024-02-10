import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TodoForm from "../../../Components/UI/modal/TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <div className="w-[100vw] text-center">
        <h1 className="text-[#f8da69] font-bold mt-5">Todo List</h1>
      </div>
      <div className="w-[100vw] text-center mt-3">
        <button
          className="btn btn-outline text-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <FaPlus />
          <p className="text-xl">Add Tasks</p>
        </button>
      </div>
      <div className="my-5 mx-20">
        <TodoList tasks={tasks} setTasks={setTasks} />
      </div>
      <TodoForm setTasks={setTasks} tasks={tasks} />
    </div>
  );
}
