import React from "react";
import { Header, PropertyCard } from "./components";

const App = () => {
  return (
    <div className="bg-[#F7F7FD]">
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-row pt-14 pb-6 items-center">
          <div className="flex-1 text-3xl font-bold ">
            Search properties to rent
          </div>
          <input
            className="h-12 w-64 border rounded-lg"
            placeholder="       Search with Search Bar"
          />
        </div>
        <div className="bg-white py-4 px-8 flex justify-center items-center xl:space-x-32 lg:space-x-16 md:space-x-5">
          <div>
            <div className="text-gray-400 text-base md:text-sm">Location</div>
            <div className="text-gray-900 text-lg md:text-base font-bold">
              New York, USA
            </div>
          </div>
          <div>
            <div className="text-gray-400">When</div>
            <div className="text-gray-900 text-lg font-bold">
              Select Move -in Date
            </div>
          </div>
          <div>
            <div className="text-gray-400">Price</div>
            <select
              name="price"
              id="price"
              className="text-gray-900 text-lg font-bold"
            >
              <option value="500">$0-$500</option>
              <option value="2500">$500-$2,500</option>
              <option value="5000">$2,500-$5,000</option>
              <option value="100000">$5000+</option>
            </select>
          </div>
          <div>
            <div className="text-gray-400">Property Type</div>
            <select
              name="propertytype"
              id="propertytype"
              className="text-gray-900 text-lg font-bold"
            >
              <option value="houses">Houses</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="bungalow">Bungalow</option>
            </select>
          </div>
          <button className="border rounded py-3 px-7 text-white bg-indigo-500 hover:bg-indigo-200 text-base">
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </div>
  );
};

export default App;
