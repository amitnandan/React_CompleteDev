import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[0]?.card?.card?.info?.name);
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Biryani</li>
        <li>Biryani</li>
        <li>Biryani</li>
        <li>Biryani</li>
        <li>Biryani</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
