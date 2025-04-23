import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    const data = await fetch("https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    const restaurants = json?.data.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants)
    if(restaurants){
      setRestaurantList(restaurants);
    }
  }
 
  return (
    <div className="body-container">

      <div className="filter-search-container">
        <div className="filter-container">
          <button className="filter-btn">Top Rated Restaurants</button>
        </div>

        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for dishes or cuisines..."
          />
        </div>
      </div>

      <div className="card-container">
      {restaurantList.map((restaurant) => {
       return <RestaurantCard 
        key={restaurant.info.id}
        resData = {restaurant.info}
        />
      })}
      </div>
    </div>
  );
};

export default Body;
