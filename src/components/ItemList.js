import React from "react";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div key={items.info.id}>
      <h1>Hello</h1>
      {/* {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div>
            <span>{item?.card?.info?.name}</span>
            <span>{item?.card?.info?.price}</span>
          </div>
          <p>{item?.card?.info?.description}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ItemList;
