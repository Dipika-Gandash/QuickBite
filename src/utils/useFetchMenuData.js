import { useEffect, useState } from "react";

const useFetchMenuData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json.data);
    };

    fetchData();
  }, []);

  return resInfo;
};

export default useFetchMenuData;
