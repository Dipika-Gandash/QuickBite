import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = props.resData;
  return (
    <div className="res-card-container">
      <div className="card-image-container">
        <img src={CDN_URL + cloudinaryImageId} alt="card-image" className="card-image" />
      </div>

      <div className="card-content">
          <h3>{name}</h3>
          <h4>{cuisines}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating}</h4>
          <h4>{sla.deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
