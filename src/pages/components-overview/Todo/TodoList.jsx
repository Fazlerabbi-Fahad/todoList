import React, { useState } from "react";
import TodoEdit from "../../../Components/UI/modal/TodoEdit";

export default function TodoList({ tasks, setTasks }) {
  const [id, setId] = useState();
  const handleDelete = (id) => {
    let updatedObjects = tasks.filter((obj) => obj.id !== id);
    setTasks(updatedObjects);
  };

  const handleEdit = (id) => {
    document.getElementById("my_modal_2").showModal();
    setId(id);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr className="text-[#f8da69]">
            <th></th>
            <th>Task</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="text-white">
              <th>{index + 1}</th>
              <td>{task.name}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>
                <button
                  className="btn btn-sm bg-[#f8da69] text-white border-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 rounded-md mr-2"
                  onClick={() => handleEdit(task.id)}
                >
                  <p className="text-sm">Edit</p>
                </button>
                <TodoEdit id={id} tasks={tasks} setTasks={setTasks} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="btn btn-outline btn-sm text-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 rounded-md"
                >
                  <p className="text-sm">Delete</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
