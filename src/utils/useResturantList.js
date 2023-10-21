import { useState, useEffect } from "react";
import { Resturants_API } from "./constants";
const useResturantList = () => {
  const [resturantList, setResturantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Resturants_API);
    const json = await data.json();
    setResturantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resturantList;
};

export default useResturantList;
