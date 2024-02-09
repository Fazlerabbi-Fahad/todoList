import React from "react";
import Banner from "../../../Components/UI/shared/Banner";
import Todo from "../Todo/Todo";

export default function Home() {
  return (
    <div className="carousel h-[100vh]">
      <div id="slide1" className="carousel-item relative w-full bg-[#696a6f]">
        <div className="w-[100vw]">
          <Banner />
        </div>
      </div>
      <div
        id="slide2"
        className="carousel-item relative w-full opacity-100 bg-gradient-to-r  from-indigo-500 to-pink-500 via-purple-500"
      >
        <div>
          <Todo />
        </div>
        {/* <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div> */}
      </div>
    </div>
  );
}
