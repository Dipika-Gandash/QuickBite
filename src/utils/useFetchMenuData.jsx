import { useEffect, useState } from "react";

const useFetchMenuData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json.data);
    };
    fetchData();
  }, [resId]);
  return resInfo;
};

export default useFetchMenuData;
