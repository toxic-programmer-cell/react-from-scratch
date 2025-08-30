import { useState, useEffect } from "react";
import MenuCard from "../component/MenuCard";
import { useParams } from "react-router";

const RestorentMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    const menuData = json?.data;
    // console.log(menuData);
    setResMenu(menuData);
  };

  if (resMenu.length === 0) return <h1>Loading...</h1>;
  // const resName = resMenu[0]?.card?.card.text;

  // const { name, avgRating, areaName, city, costForTwoMessage } =
  //   resMenu[2]?.card?.card?.info;
  const restaurantInfo = resMenu?.cards?.find((card) => card?.card?.card?.info)
    ?.card?.card?.info;

  // const { itemCards } =
  //   resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const regularCards =
    resMenu?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const menuItems = regularCards
    .filter((c) => c?.card?.card?.itemCards)
    .map((c) => c.card.card.itemCards)
    .flat();

  return (
    <div className="mx-[150px]">
      <h1>{restaurantInfo?.name}</h1>
      <p>Rating: {restaurantInfo?.avgRating} </p>
      <p>
        {restaurantInfo?.areaName}, {restaurantInfo?.city},{" "}
        {restaurantInfo?.costForTwoMessage}
      </p>
      <div>
        <h3>{menuItems?.title}</h3>
        {menuItems.map((item, index) => (
          <div
            key={`${item?.card?.info?.id}-${index}`}
            className="flex border-b-1  px-5 py-3"
          >
            <MenuCard menuData={item?.card?.info} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestorentMenu;
