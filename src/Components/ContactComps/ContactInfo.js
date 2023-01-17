import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

function ContactInfo() {
  return (
    <div className="contact-info px-5 py-10 lg:flex lg:justify-around">
      <a target="_blank" href="mailto:thavishanethma123@mail.com">
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded-md shadow-xl  cursor-pointer mt-10 hover:shadow-2xl duration-500 lg:flex-grow lg:w-96">
          <div
            href="mailto:thavishanethma123@mail.com"
            className=" bg-orange-500 rounded w-10 h-10 flex justify-center place-items-center cursor-pointer"
          >
            <AiOutlineMail
              className="icon"
              style={{}}
              size="30px"
              color="white"
            />
          </div>
          <h4 className="text-center pt-5 text-xl font-semibold">Email Us</h4>
          <p className="pt-5 text-lg cursor-pointer">
            thavishanethma123@mail.com
          </p>
        </div>
      </a>
      <a target="_blank" href="tel:+94777043313">
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded-md shadow-xl  cursor-pointer mt-10 hover:shadow-2xl duration-500 lg:flex-grow lg:w-96">
          <div
            href="mailto:thavishanethma123@mail.com"
            className=" bg-orange-500 rounded w-10 h-10 flex justify-center place-items-center cursor-pointer "
          >
            <FiPhone className="icon" style={{}} size="30px" color="white" />
          </div>
          <h4 className="text-center pt-5 text-xl font-semibold">Call Us</h4>
          <p className="pt-5 text-lg cursor-pointer">+94 777 04 3313</p>
        </div>
      </a>
      <a target="_blank" href="https://wa.me/94777043313">
        <div className="flex flex-col justify-center items-center px-10 py-10 rounded-md shadow-xl  cursor-pointer mt-10 hover:shadow-2xl duration-500 lg:flex-grow lg:w-96">
          <div
            href="mailto:thavishanethma123@mail.com"
            className=" bg-orange-500 rounded w-10 h-10 flex justify-center place-items-center cursor-pointer"
          >
            <BsWhatsapp className="icon" style={{}} size="30px" color="white" />
          </div>
          <h4 className="text-center pt-5 text-xl font-semibold">
            Whatsapp Us
          </h4>
          <p className="pt-5 text-lg cursor-pointer font-medium text-orange-500">
            Click here to Drop a Text
          </p>
        </div>
      </a>
    </div>
  );
}

export default ContactInfo;
