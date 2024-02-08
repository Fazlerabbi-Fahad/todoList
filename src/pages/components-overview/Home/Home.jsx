import React from "react";
import Banner from "../../../Components/UI/shared/Banner";

export default function Home() {
  return (
    <div className="carousel h-[100vh]  bg-[#696a6f]">
      <div id="slide1" className="carousel-item relative w-full">
        <Banner />
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
