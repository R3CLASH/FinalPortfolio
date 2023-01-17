import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);
  const dropdownHandler = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="navbar">
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 lg:px-20">
          <Link to="/">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
              </svg>
              <span className="font-semibold text-xl tracking-tight cursor-pointer">
                PolkaDevz
              </span>
            </div>
          </Link>
          <div className="desk-nav mr-36 lg:justify-end lg:flex lg:mr-0">
            <ul className="lg:flex hidden justify-center gap-10">
              <Link to="/">
                <li>
                  <a className="text-white">Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a className="text-white">About</a>
                </li>
              </Link>
              <Link to="/services">
                <li>
                  <a className="text-white">Blog</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a className="text-white">Contact</a>
                </li>
              </Link>
              <li>
                <a
                  className="bg-white py-2 px-5 rounded font-semibold border hover:bg-transparent hover:border-white hover:text-white hover:border-solid hover:border cursor-pointer"
                  href="https://www.upwork.com/freelancers/~01d6b56b9f8e1487a7"
                  target="_blank"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={dropdownHandler}
              className="flex items-center px-3 py-2 border rounded text-white border-white-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          {/* {Mobile Menu} */}
          <ul
            className={
              "lg:hidden bg-white relative w-full h-auto pb-10 duration-500 ease-in-out " +
              (open ? "top-2" : "hidden")
            }
          >
            <Link
              to="/"
              className="px-3"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>
                <a className="text-black">Home</a>
              </li>
            </Link>
            <Link
              to="/about"
              className="px-3"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>
                <a className="text-black">About</a>
              </li>
            </Link>
            <Link
              to="/services"
              className="px-3"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>
                <a className="text-black">Blog</a>
              </li>
            </Link>
            <Link
              to="/contact"
              className="px-3"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>
                <a className="text-black">Contact</a>
              </li>
            </Link>
            <li>
              <a className="bg-orange-500 text-white py-2 px-5 rounded font-semibold border hover:bg-transparent hover:border-black hover:text-black hover:border-solid hover:border cursor-pointer">
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
