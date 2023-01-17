import React from "react";
import PortfolioBox from "./PortfolioBox";
import ceylonAyurImg from "../Assets/ceylonayur.png";
import amtsImg from "../Assets/amts.png";
import zuvdImg from "../Assets/zuvd.png";

function Portfolio() {
  return (
    <div className="bg-gray-800 py-20 px-10">
      <div className="port-info-col">
        <h3 className="text-left text-orange-500 font-medium pb-5 text-lg tracking-widest lg:text-center lg:text-2xl">
          PORTFOLIO
        </h3>
        <h2 className="text-left text-5xl text-white leading-18 font-semibold lg:text-center lg:text-6xl">
          Latest Work
        </h2>
        <p className="text-left pt-5 text-white leading-7 lg:text-center lg:text-xl lg:font-light">
          Agency provides a full service range including<br></br>technical
          skills, design, business<br></br>understanding.
        </p>
        <p className="text-left mt-9 mb-10 lg:text-center">
          <a className="bg- bg-orange-500 py-3 px-5 rounded text-white cursor-pointer ">
            SEE MY WORK
          </a>
        </p>
      </div>
      <div className="lg:flex lg:justify-center lg:gap-10">
        <PortfolioBox
          image={ceylonAyurImg}
          title="Ceylon Ayurveda"
          desc="This is a E-Commerce website for a Ayurvedic Company to sell their
        products online. PayHere payment gateway is used for online payments."
          url="https://ceylonayurveda.shop/"
        />
        <div className="amts">
          <PortfolioBox
            image={amtsImg}
            title="AMTS Technologies"
            desc="This is a E-Commerce website for a Ayurvedic Company to sell their
        products online. PayHere payment gateway is used for online payments."
            url="https://amtslk.com"
          />
        </div>
        <PortfolioBox
          image={zuvdImg}
          title="Zuv Diligence"
          desc="This is a E-Commerce website for a Ayurvedic Company to sell their
        products online. PayHere payment gateway is used for online payments."
          url="https://zuvdiligence.com/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
