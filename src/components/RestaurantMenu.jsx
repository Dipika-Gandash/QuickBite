import useFetchMenuData from "../utils/useFetchMenuData";
import { useParams } from "react-router-dom";
import ShimmerCard1 from "./ShimmerCard1";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchMenuData(resId);

  if (!resInfo) {
    return <ShimmerCard1 />;
  }

  const restaurantData = resInfo?.cards?.[2]?.card?.card?.info;

  if (!restaurantData) {
    return <h2 className="text-center text-red-500">No restaurant data found 🚫</h2>;
  }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restaurantData;

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="bg-white shadow-2xl rounded-lg p-3 max-w-xl w-full text-left space-y-2">
        <h1 className="text-2xl font-bold font-sans">{name}</h1>
    
        <p className="font-semibold">
          ⭐ {avgRating} ({totalRatingsString}) | {costForTwoMessage}
        </p>
        <p className="text-red-600">🍽️ {cuisines?.join(", ")}</p>
        <p>
          📍<strong>Outlet</strong>: {areaName}
        </p>
        <p style={{ fontWeight: 600 }}>
          🕒 {sla?.minDeliveryTime} – {sla?.maxDeliveryTime} mins
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
