import React, { useState } from "react";
import banner from "./../../../assets/images/banner.jpg";

export default function Banner() {
  return (
    <div
      className="hero w-[100vw] h-[99vh] m-auto"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-4xl font-bold max-[900px]:text-2xl max-[900px]:mb-2">
            Organize. Prioritize. Accomplish. Repeat
          </h1>
          <p className="mb-5 text-[#f8da69] text-xl max-[900px]:text-sm font-semibold">
            Want to start managing daily life activities?
            <a href="#slide2" className="btn btn-link text-[#f8da69]">
              <p className="mb-5 text-[#f8da69] text-2xl max-[900px]:text-sm font-bold">
                Let's go
              </p>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
