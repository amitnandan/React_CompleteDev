import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // let listofR = [
  //   {
  //     info: {
  //       id: "4087",
  //       name: "Aroma's Hyderabad House",
  //       cloudinaryImageId: "syu9rjepkqsw5agjbbd9",
  //       locality: "Erandwane",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
  //       avgRating: 4.2,
  //       sla: {
  //         deliveryTime: 21,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "4088",
  //       name: "Aroma's  House",
  //       cloudinaryImageId: "syu9rjepkqsw5agjbbd9",
  //       locality: "Erand",
  //       costForTwo: "₹500 for two",
  //       cuisines: ["Mughlai", "North Indian", "Chinese"],
  //       avgRating: 3.5,
  //       sla: {
  //         deliveryTime: 25,
  //       },
  //     },
  //   },
  // ];
  const [listofResturants, setListOfResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchTextText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5561306&lng=73.7769077&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResturants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Your are offline !! Please check your internet Connection</h1>;

  return listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchTextText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              //on Click filter and update UI
              //search Text
              console.log(searchText);

              const filterRes = listofResturants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResturants(filterRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            let filteredListResturants = listofResturants.filter(
              (res) => res.info.avgRating > 4.0
            );
            console.log(filteredListResturants);
            setFilteredResturants(filteredListResturants);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
