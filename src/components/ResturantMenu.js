import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";
import useResturantMenu from "../utils/useResturantMenu";

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

  return (
    <div className="menu ResturantMenu">
      <h1 className="menu-heading">{name}</h1>
      <p className="menu-description">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul className="menu-ul">
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id} className="item-li">
              {item.card.info.name} -- {"Rs"}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
