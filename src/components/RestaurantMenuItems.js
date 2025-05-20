import useFetchMenuData from "../utils/useFetchMenuData";
import { CDN_URL } from "../utils/constant";

const RestaurantMenuItems = ({ resId }) => {
  const resInfo = useFetchMenuData(resId);
  console.log(resInfo);
  const menuItems =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;
  console.log(menuItems);
  return (
    <div className="restaurant-menu-items">
      <h2>Recommended...</h2>
      {menuItems?.map((item) => {
        const info = item.card.info;
        return (
          <div key={info.id} className="menu-items">
          <div className="menu-body">
            <h3>{info.name}</h3>
            <p>{info.price / 100}</p>⭐{" "}
            {info.ratings?.aggregatedRating?.rating || "No rating"} (
            {info.ratings?.aggregatedRating?.ratingCount || "N/A"})
            <p>{info.description}</p>
          </div>
          <div className="menu-image">
            <img src={CDN_URL + info.imageId} />
            <button>ADD</button>
          </div>
        </div>
        )
        
})}
    </div>
  );
};

export default RestaurantMenuItems;
