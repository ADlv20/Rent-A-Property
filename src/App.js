import React, { useState } from "react";
import { Header, PropertyCard } from "./components";
import ReactDatePicker from "react-datepicker";
import { db } from "./assets/db";
import "react-datepicker/dist/react-datepicker.css";
import { Autocomplete, TextField } from "@mui/material";

const App = () => {
  const states = [
    { label: "Maharashtra", value: "maharashtra" },
    { label: "New York", value: "newyork" },
    { label: "California", value: "california" },
    { label: "Los Angeles", value: "la" },
  ];

  const [location, setLocation] = useState(states[0].label);
  const [price, setPrice] = useState(0);
  const [propertyType, setPropertyType] = useState("House");
  const [startDate, setStartDate] = useState(new Date());
  const dbData = db.properties;

  const [isSearchClicked, setIsSearchClicked] = useState(false);

  return (
    <div className="bg-[#F7F7FD]">
      <Header />
      <div className="mx-auto container">
        <div className="flex flex-row pt-14 pb-6 items-center">
          <div className="flex-1 text-3xl font-bold ">
            Search properties to rent
          </div>
          <Autocomplete
            disablePortal
            value={location}
            onChange={(event, newValue) => {
              setLocation(newValue.label);
            }}
            id="combo-box"
            options={states}
            sx={{ width: 300, backgroundColor: "white" }}
            renderInput={(params) => (
              <TextField {...params} label="Search with Search Bar" />
            )}
          />
        </div>
        <div className="bg-white mb-10 py-4 px-8 flex justify-center items-center xl:space-x-28 lg:space-x-16 md:space-x-5">
          <div>
            <div className="text-gray-400 text-base md:text-sm">Location</div>
            <div className="text-gray-900 lg:text-xl md:text-base font-bold">
              {location}
            </div>
          </div>
          <div>
            <div className="text-gray-400">When</div>
            <div className="text-gray-900 text-lg font-bold">
              <ReactDatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="Select Move-in Date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div>
            <div className="text-gray-400">Price</div>
            <select
              name="price"
              id="price"
              className="text-gray-900 text-lg font-bold"
              onChange={(event) => {
                setPrice(event.target.value);
                console.log(event.target.value);
              }}
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
              onChange={(event) => {
                setPropertyType(event.target.value);
              }}
            >
              <option value="House">House</option>
              <option value="Villa">Villa</option>
              <option value="Apartment">Apartment</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <button
            className="border rounded py-3 px-7 text-white bg-indigo-500 hover:bg-indigo-200 text-base"
            onClick={(e) => setIsSearchClicked(true)}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          {isSearchClicked === true
            ? dbData
                .filter(
                  (item) =>
                    item.location === location &&
                    parseInt(item.price) <= price &&
                    item.property_type === propertyType &&
                    item.when <= startDate.toDateString()
                )
                .map((item) => (
                  <PropertyCard
                    key={item.id}
                    propertyName={item.location}
                    address={item.address}
                    price={item.price}
                    beds={item.beds}
                    baths={item.baths}
                    space={item.area}
                    spaceunit={"sqm"}
                    image={item.photo}
                  />
                ))
            : dbData.map((item) => (
                <PropertyCard
                  key={item.id}
                  propertyName={item.location}
                  address={item.address}
                  price={item.price}
                  beds={item.beds}
                  baths={item.baths}
                  space={item.area}
                  spaceunit={"sqm"}
                  image={item.photo}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default App;
