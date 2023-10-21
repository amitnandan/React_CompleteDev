import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Resturants_API } from "../utils/constants";
import ResturantList from "../utils/useResturantList";
import useResturantList from "../utils/useResturantList";

const Body = () => {
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchTextText] = useState("");

  const listofResturants = useResturantList();

  useEffect(() => {
    setFilteredResturants(listofResturants);
  }, [listofResturants]);

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

// const [listofResturants, setListOfResturants] = useState([]);
// useEffect(() => {
//   fetchData();
// }, []);
// const fetchData = async () => {
//   const data = await fetch({ Resturants_API });
//   const json = await data.json();
//   console.log(
//     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
//   setListOfResturants(
//     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
//   setFilteredResturants(
//     json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//   );
// };
