import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      `https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&submitAction=ENTER`
    );

    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

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
    </div>
  );
};

export default RestaurantMenu;
