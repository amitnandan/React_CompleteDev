import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info; //optional chaining
  return (
    <div
      className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="res-logo rounded-md"
        src={CDN_URL + "/" + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg"> {name}</h3>
      <h4 className="py-2"> {cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>Rs.{costForTwo} for two</h4>
    </div>
  );
};

export default ResturantCard;
