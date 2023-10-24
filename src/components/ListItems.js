import { CDN_URL } from "../utils/constants.js";

const ListItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" pb-4 mb-4 border-b border-gray-300 flex items-center "
        >
          <div className="w-8/12">
            <div className="mb-2">
              <span className="text-xl font-semibold">
                {item.card.info.name}
              </span>
              <span className="text-gray-500">
                - Rs.
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-sm text-gray-700">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-4/12 relative">
            <button className="p-2 bg-black text-white shadow-lg absolute top-0 left-0 rounded-md">
              Add +
            </button>
            <img
              className="w-full h-auto rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
