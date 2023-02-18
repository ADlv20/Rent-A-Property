import React from "react";

const PropertyCard = ({
  propertyName,
  price,
  address,
  beds,
  baths,
  space,
  spaceunit,
  image,
}) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-2">
      <div className="rounded-lg bg-white">
        <img
          className="min-w-full rounded object-cover object-center"
          src={image}
          alt="property"
        />
        <div className="pt-6 px-2 space-y-2">
          <h3 className="text-indigo-500 text-xl font-bold">
            ${price}
            <span className="text-gray-400 text-xs font-normal">/month</span>
          </h3>
          <h2 className="text-lg text-gray-900 font-bold">{propertyName}</h2>
          <p className="leading-relaxed text-gray-500 text-base">{address}</p>
        </div>
        <div className="flex justify-center items-center  space-x-8 py-4">
          <div>{beds} Beds</div>
          <div>{baths} Bathrooms</div>
          <div>
            {space} {spaceunit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
