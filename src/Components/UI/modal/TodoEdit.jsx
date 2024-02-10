import React from "react";
import { useForm } from "react-hook-form";

export default function TodoEdit({ id, tasks, setTasks }) {
  const { register, handleSubmit, reset } = useForm();
  const task = tasks.find((obj) => obj.id === id);

  const onSubmit = (data) => {
    const updated = tasks.findIndex((obj) => obj.id === id);

    if (updated !== -1) {
      tasks[updated].name = data.name;
      tasks[updated].priority = data.priority;

      const updatedTasks = [...tasks];
      setTasks(updatedTasks);
      reset();
    }
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box bg-gradient-to-r  from-indigo-500 to-pink-500 via-purple-500">
        <h3 className="font-bold text-2xl text-[#f8da69]">Add Tasks</h3>
        <div className="divider mt-0 divider-[#f8da69]"></div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="mt-[-10px]"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#f8da69] font-medium">
                Tasks Name
              </span>
            </label>
            <input
              {...register("name", { required: false })}
              type="name"
              name="name"
              defaultValue={task?.name}
              placeholder="Tasks Name"
              className="input input-bordered text-black"
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text text-[#f8da69] font-medium">
                Priority Level
              </span>
            </label>
            <select
              {...register("priority", { required: false })}
              name="priority"
              defaultValue={task?.priority}
              className="select select-primary w-full border-0 text-black"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div className="divider divider-[#f8da69]"></div>
          <div className="flex justify-end">
            <button
              className="btn btn-sm bg-[#f8da69] text-white border-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 rounded-md mr-2"
              type="submit"
            >
              <p className="text-sm">Edit</p>
            </button>
            <form method="dialog">
              <button className="btn btn-outline btn-sm text-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 rounded-md">
                <p className="text-sm">Cancel</p>
              </button>
            </form>
          </div>
        </form>
      </div>
    </dialog>
  );
}
