import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import TodoForm from "../../../Components/UI/modal/TodoForm";
import TodoList from "./TodoList";

export default function Todo() {
  const pageSize = 5;
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tasks.length / pageSize);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const markCompleted = () => {
    const updatedTasks = tasks.map((task) => ({
      ...task,
      status: "Complete",
    }));
    setTasks(updatedTasks);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageTasks = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return tasks.slice(startIndex, endIndex);
  };

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
      <div className="flex justify-end">
        <button
          className="btn btn-outline text-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 mr-3"
          onClick={deleteAllTasks}
        >
          <p className="text-sm">Delete All Tasks</p>
        </button>
        <button
          className="btn btn-outline text-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 mr-3"
          onClick={markCompleted}
        >
          <p className="text-sm">Complete All Tasks</p>
        </button>
      </div>

      <div className="my-5 mx-20">
        <TodoList
          tasks={tasks}
          setTasks={setTasks}
          getPageTasks={getPageTasks}
        />
      </div>

      <div className="w-[100vw] text-center mt-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn btn-outline text-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 mr-2 ${
              currentPage === index + 1 ? "font-bold" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <TodoForm setTasks={setTasks} tasks={tasks} />
    </div>
  );
}
