import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

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
  const [listofResturants, setListOfResturants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredlistofResturants = listofResturants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfResturants(filteredlistofResturants);
            //console.log(listofResturants);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listofResturants.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
