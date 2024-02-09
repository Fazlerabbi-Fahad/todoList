import React from "react";
import { useForm } from "react-hook-form";

export default function TodoForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <dialog id="my_modal_1" className="modal">
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
              {...register("name", { required: true })}
              type="name"
              name="name"
              placeholder="Tasks Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-2">
            <label className="label">
              <span className="label-text text-[#f8da69] font-medium">
                Priority Level
              </span>
            </label>
            <select
              {...register("priority", { required: true })}
              name="priority"
              className="select select-primary w-full border-0"
            >
              <option disabled selected>
                Priority Level
              </option>
              <option>Low</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="divider divider-[#f8da69]"></div>
          <div className="flex justify-end">
            <button
              className="btn btn-sm bg-[#f8da69] text-white border-[#f8da69] hover:text-black hover:bg-[#f8da69] hover:border-0 rounded-md mr-2"
              type="submit"
            >
              <p className="text-sm">Add</p>
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
