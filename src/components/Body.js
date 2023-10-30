import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useResturantList from "../utils/useResturantList";

const Body = () => {
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchTextText] = useState("");

  const listofResturants = useResturantList();
  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    setFilteredResturants(listofResturants);
  }, [listofResturants]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Your are offline !! Please check your internet Connection</h1>;

  return !listofResturants || listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchTextText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn px-4 py-2  bg-green-200 m-4 rounded-lg"
            onClick={() => {
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="filter-btn px-6 py-1 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              let filteredListResturants = listofResturants.filter(
                (res) => res.info.avgRating > 4.0
              );

              setFilteredResturants(filteredListResturants);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {filteredResturants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/resturants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <ResturantCardPromoted resData={restaurant} />
            ) : (
              <ResturantCard resData={restaurant} />
            )}
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
