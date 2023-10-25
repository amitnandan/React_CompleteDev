import React, { useState } from "react";
import ListItems from "./ListItems";

const ResturantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(showItems);
  };
  return (
    <div>
      <div className="  w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ListItems items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
