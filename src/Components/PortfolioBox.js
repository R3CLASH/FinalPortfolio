import React from "react";
// import ceylonayur from "../Assets/ceylonayur.png";
import { BsArrowDownRight } from "react-icons/bs";
function PortfolioBox(props) {
  return (
    <div className="bg-gray-700 pb-5 rounded mb-10">
      <img className="h-298" src={props.image} />
      <h4 className="pt-5 text-left pl-5 text-white text-xl">{props.title}</h4>
      <p className="text-orange-100 pl-5 pr-5 pt-2 text-left">{props.desc}</p>
      <a
        target="_blank"
        href={props.url}
        className="text-left flex justify-end"
      >
        <BsArrowDownRight
          style={{
            color: "orange",
            fontSize: "32px",
            // display: "flex",
            // justifyContent: "end",
            textAlign: "right",
            position: "relative",
            top: "15px",
            // left: "380px",
          }}
        />
      </a>
    </div>
  );
}

export default PortfolioBox;
