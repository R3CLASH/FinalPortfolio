import React from "react";
import designIcon from "../Assets/design.png";
function ServiceBox(props) {
  return (
    <div className=" px-10 border py-10 my-10 border-orange-300 shadow-white drop-shadow-xl	">
      <div className="icon-and-text flex justify-start gap-10 pb-10">
        <div className="bg-orange-500 px-7 py-7 rounded-full">
          <img src={props.image} />
        </div>
        <p className="text-gray-600 text-3xl pt-7">{props.title}</p>
      </div>
      <div>
        <p className="text-left leading-7">{props.desc}</p>
      </div>
    </div>
  );
}

export default ServiceBox;
