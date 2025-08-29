import { useState, useEffect } from "react";
import MenuCard from "../component/MenuCard";

const RestorentMenu = () => {
  const [resMenu, setResMenu] = useState([]);
  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const url =
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=55473&catalog_qa=undefined&submitAction=ENTER";
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    const menuData = json?.data?.cards;
    // console.log(menuData);
    setResMenu(menuData);
  };

  if (resMenu.length === 0) return <h1>Loading...</h1>;
  // const resName = resMenu[0]?.card?.card.text;
  const { name, avgRating, areaName, city, costForTwoMessage } =
    resMenu[2]?.card?.card?.info;
  const recomendedCard =
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(recomendedCard.itemCards);
  // const menuData = recomendedCard.itemCards.map((item) => item?.card?.info);
  // console.log("menu data", menuData);
  return (
    <div>
      <h1>{name}</h1>
      <p>Rating: {avgRating} </p>
      <p>
        {areaName}, {city}, {costForTwoMessage}
      </p>
      <div className="mx-[150px]">
        <h3>{recomendedCard.title}</h3>
        {recomendedCard.itemCards.map((item) => (
          <div
            key={item?.card?.info?.id}
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
