import React from "react";
import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <header className="text-gray-600 bg-[#FAFAFE]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} className="w-10 h-10 text-white bg-indigo-500" />
          <span className="ml-3 text-xl font-bold">Estatery</span>
        </a>
        <nav className="md:ml-auto text-base pl-16 justify-center items-center">
          <a className="mr-10 px-5 py-3 rounded-md font-semibold hover:text-gray-900 bg-indigo-200 text-indigo-500">
            Rent
          </a>
          <a className="mr-10 px-5 py-3 rounded-md font-semibold hover:bg-indigo-200 hover:text-indigo-500">
            Buy
          </a>
          <a className="mr-10 px-5 py-3 rounded-md font-semibold hover:bg-indigo-200 hover:text-indigo-500">
            Sell
          </a>
          <a className="mr-10 px-5 py-3 rounded-md font-semibold hover:bg-indigo-200 hover:text-indigo-500">
            Manage Property
          </a>
          <a className="mr-10 px-5 py-3 rounded-md font-semibold hover:bg-indigo-200 hover:text-indigo-500">
            Resources
          </a>
        </nav>
        <div className="flex flex-1 items-end justify-end space-x-5">
          <button className="border rounded py-2 px-5 text-indigo-500 hover:bg-indigo-200 text-base mt-4 md:mt-0">
            Login
          </button>
          <button className="border rounded py-2 px-5 text-white bg-indigo-500 hover:bg-indigo-200 text-base mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
