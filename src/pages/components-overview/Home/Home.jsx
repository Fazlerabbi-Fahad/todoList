import React from "react";
import Todo from "../Todo/Todo";

export default function Home() {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-r  from-indigo-500 to-pink-500 via-purple-500 overflow-hidden max-[600px]:overflow-x-scroll">
      <div>
        <Todo />
      </div>
    </div>
  );
}
