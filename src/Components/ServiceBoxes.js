import React from "react";
import ServiceBox from "./ServiceBox";
import designIcon from "../Assets/design.png";
import devIcon from "../Assets/dev.png";
import seoIcon from "../Assets/analytics-32.png";

function ServiceBoxes() {
  return (
    <>
      <div className="serviceBoxes bg-white py-5 px-10">
        <h5 className="text-orange-500 font-semibold tracking-widest">
          SERVICES
        </h5>
        <h2 className="text-4xl py-5 font-normal leading-10">
          How I Can Help You With
        </h2>
        <div className="lg:flex lg:justify-center lg:gap-5">
          <ServiceBox
            title="Design"
            image={designIcon}
            desc="Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
          />
          <div className="hidden lg:block">
            <ServiceBox
              title="Devlopment"
              image={devIcon}
              desc="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
            />
          </div>
          <div className="lg:hidden">
            <ServiceBox
              title="Web"
              image={devIcon}
              desc="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
            />
          </div>
          <ServiceBox
            title="SEO"
            image={seoIcon}
            desc="Hire to outsource your digital marketing efforts, instead of handling in-house can provide your business."
          />
        </div>
      </div>
    </>
  );
}

export default ServiceBoxes;
