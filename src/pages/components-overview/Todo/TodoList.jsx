import React, { useState } from "react";
import TodoEdit from "../../../Components/UI/modal/TodoEdit";
import { RxCross1 } from "react-icons/rx";

export default function TodoList({ tasks, setTasks, getPageTasks }) {
  const [id, setId] = useState();
  const handleDelete = (id) => {
    let updatedObjects = tasks.filter((obj) => obj.id !== id);
    setTasks(updatedObjects);
  };

  const handleEdit = (id) => {
    document.getElementById("my_modal_2").showModal();
    setId(id);
  };

  const handleStatus = (id, newStatus) => {
    const updated = tasks.findIndex((obj) => obj.id === id);

    if (updated !== -1) {
      tasks[updated].status = newStatus;

      const updatedTasks = [...tasks];
      setTasks(updatedTasks);
    }
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
          {getPageTasks().map((task, index) => (
            <tr key={index} className="text-white">
              <th>{index + 1}</th>
              <td>{task.name}</td>
              <td
                className={
                  task.priority === "Low"
                    ? "text-[#FF0000]"
                    : task.priority === "Medium"
                    ? "text-[#FFA500]"
                    : "text-[#008000]"
                }
              >
                {task.priority}
              </td>
              <td>
                <div className="form-control mt-2 ">
                  <select
                    name="status"
                    defaultValue={task?.status}
                    className="select w-full border-0 bg-transparent px-0"
                    onClick={(e) => handleStatus(task.id, e.target.value)}
                  >
                    <option value="Incomplete" className="text-black">
                      Incomplete
                    </option>
                    <option value="Complete" className="text-black">
                      Complete
                    </option>
                  </select>
                </div>
              </td>
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
                  <RxCross1 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
