import React from "react";
import aboutImg from "../../Assets/Illust/9713041_4169292-removebg-preview.png";

function AboutAbt() {
  return (
    <div className="px-5 lg:px-10 py-10 lg:flex lg:gap-10 flex flex-col-reverse lg:flex-row">
      <div className="flex justify-center lg:w-full">
        <img src={aboutImg} className="drop-shadow-2xl"></img>
      </div>
      <div className="pt-10 lg:w-auto">
        <h3 className="text-left text-orange-500 font-medium pb-5 text-xl lg:text-2xl">
          Gabriel Pires
        </h3>
        <h2 className="text-left text-5xl text-black leading-18 font-semibold lg:text-7xl">
          Full Stack<br></br>Web Developer
        </h2>
        <p className="text-lg text-left pt-5 text-gray-800 leading-7 lg:text-lg">
          Ability to put themselves in the merchant's shoes. It is meant to
          partner on the long run, and work as an extension of the merchant's
          team.<br></br>
          <br></br>A digital agency is a business you hire to outsource your
          digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you.
        </p>
      </div>
    </div>
  );
}

export default AboutAbt;
