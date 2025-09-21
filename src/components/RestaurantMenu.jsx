import useFetchMenuData from "../utils/useFetchMenuData";
import { useParams } from "react-router-dom";
import ShimmerCard1 from "./ShimmerCard1";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchMenuData(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) {
    return <ShimmerCard1 />;
  }

  const restaurantData = resInfo?.cards?.[2]?.card?.card?.info;

  if (!restaurantData) {
    return (
      <h2 className="text-center text-red-500">No restaurant data found 🚫</h2>
    );
  }

  const allCategories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const itemCategories = allCategories
    .filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    .map((c) => c.card.card);

  const NestedItemCategories = allCategories
    .filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    )
    .map((c) => c.card.card);

  const menuCategories = [...itemCategories, ...NestedItemCategories];

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
    <div className="flex flex-col items-center mt-10 px-4">
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
      <div className="w-full max-w-2xl mt-8">
        {menuCategories.map((category, index) => (
          <RestaurantCategory
            key={category.title + index}
            data={category}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
