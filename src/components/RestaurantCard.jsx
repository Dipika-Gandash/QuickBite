import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    areaName,
    sla,
  } = resData.info;
  return (
    <div className="w-[260px] bg-white rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-full h-[200px] overflow-hidden">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className=" text-[1rem] md:text-[1.2rem] font-semibold text-black mb-2">{name}</h3>

        <div className="flex justify-between font-semibold text-sm text-gray-900 mb-2">
          <p>⭐ {avgRating}</p>
          <p>⏱️ {sla.slaString}</p>
        </div>
        <p className="text-sm text-gray-900 font-medium mt-1">{costForTwo}</p>

        <p className="text-sm text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </p>
        <p className="text-sm text-gray-800">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
