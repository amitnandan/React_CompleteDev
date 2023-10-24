import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  if (
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      .itemCards == null
  ) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" text-center p-4">
      <h1 className="text-3xl font-bold mb-2">{name}</h1>
      <p className=" font-bold text-lg text-gray-600 mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category) => (
        <ResturantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}

      <ul className="menu-ul ">
        {itemCards.map((item) => {
          return (
            <li
              key={item.card.info.id}
              className="item-li flex items-center justify-between"
            >
              {item.card.info.name}
              {"Rs"}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
