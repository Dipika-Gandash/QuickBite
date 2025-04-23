import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData;

  return (
    <div className="res-card-container">
      <div className="card-image-container">
        <img src={CDN_URL + cloudinaryImageId} alt={name} className="card-image" />
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>⭐ {avgRating}</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
