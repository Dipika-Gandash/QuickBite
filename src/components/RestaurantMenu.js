import { useParams } from "react-router-dom";
import useFetchMenuData from "../utils/useFetchMenuData"
import RestaurantMenuItems from "./RestaurantMenuItems";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchMenuData(resId);

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }
  const restaurantInfo = resInfo?.cards?.[2]?.card?.card?.info;
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = restaurantInfo;

  return (
    <div className="res-info">
      <div className="res-info-header">
        <h1>{restaurantInfo.name}</h1>
      </div>

      <div className="res-info-body">
        <p style={{ fontWeight: "bold" }}>
          ⭐ {avgRating} ({totalRatingsString}) | {costForTwoMessage}
        </p>
        <p style={{ fontWeight: 500 }}>🍽️ {cuisines?.join(", ")}</p>
        <p>
          📍<strong>Outlet</strong>: {areaName}
        </p>
        <p style={{ fontWeight: 600 }}>
          🕒 {sla?.minDeliveryTime} – {sla?.maxDeliveryTime} mins
        </p>
      </div>
    <RestaurantMenuItems resId = {resId}/>

    </div>
  );
};

export default RestaurantMenu;
