import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { API_URL } from "../utils/constants";
import ShimmerCard from "../components/ShimmerCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    if (restaurants) {
      setRestaurantList(restaurants);
      setFilteredList(restaurants);
    } else {
      console.warn("Restaurant data not found in API response");
    }
  };

  return (
    <div className="overflow-x-hidden">
    <div className="mx-6 md:mx-20 mt-9">
      <div className="flex flex-col md:flex-row items-center md:justify-around gap-4 md:gap-6 mb-6 w-full">
        <div className="flex sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5722] w-64"
          />
          <button
            className="bg-[#FF5722] text-white px-5 py-2 rounded-md font-semibold text-[1rem] hover:bg-[#e64a19] transition-colors duration-300 cursor-pointer"
            onClick={() => {
              const filteredList = restaurantList.filter((res) => {
                const nameMatch = res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                const cuisineMatch = res?.info?.cuisines?.some(
                  (cuisine) =>
                    cuisine.toLowerCase().includes(searchText.toLowerCase())
                )

                return nameMatch || cuisineMatch;
              });
              setFilteredList(filteredList)
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-row items-center gap-3 w-full sm:w-auto">
        <button
          className="bg-[#FF5722] text-white px-5 py-2 rounded-md font-semibold text-[1rem] hover:bg-[#e64a19] transition-colors duration-300 w-full sm:w-auto cursor-pointer"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button  className="bg-gray-300 text-black px-5 py-2 rounded-md font-semibold text-[1rem] hover:bg-gray-400 transition-colors duration-300 w-full sm:w-auto cursor-pointer" onClick={() => {
          setFilteredList(restaurantList)
        }}>Reset</button>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 px-4 md:px-20 mt-6 md:mt-10 justify-center">
        {filteredList.length === 0
          ? Array.from({ length: 8 }).map((_, index) => (
              <ShimmerCard key={index} />
            ))
          : filteredList.map((res) => (
              <RestaurantCard key={res.info.id} resData={res} />
            ))}
      </div>
    </div>
    </div>
  );
};

export default Body;
