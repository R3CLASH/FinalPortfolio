import React, { Image } from "react";
import heroImage from "../Assets/Bitmap.png";

function hero() {
  return (
    <>
      <div className="hero-section py-5 px-10 bg-gray-800 lg:flex lg:justify-between lg:px-20">
        <div className="hero-info-col">
          <h3 className="text-left text-orange-500 font-medium pb-5 text-lg lg:text-2xl">
            Thavisha Mudunkotuwa
          </h3>
          <h2 className="text-left text-5xl text-white leading-18 font-semibold lg:text-7xl">
            The Simple,<br></br>Clean Design
          </h2>
          <p className="text-left pt-5 text-white leading-7 lg:text-lg">
            Agency provides a full service range including<br></br>technical
            skills, design, business<br></br>understanding.
          </p>
          <p className="text-left mt-9 mb-10">
            <a className="bg- bg-orange-500 py-3 px-5 rounded text-white cursor-pointer lg:py-5 lg:px-8 lg:text-lg font-semibold">
              SEE MY WORK
            </a>
          </p>
        </div>
        <div className="hero-img-col  lg:w-100">
          <img src={heroImage} className="w-440" />
        </div>
      </div>
    </>
  );
}

export default hero;
