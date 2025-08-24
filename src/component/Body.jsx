import RestorentCard from "./RestorentCard";
import resList from "../util/dumyData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
    const data = await fetch(proxyUrl + url);

    const json = await data.json();
    // console.log(json?.data?.cards[9]?.card?.card?.info);

    const restaurantsData =
      json?.data?.cards
        ?.filter((card) => card?.card?.card?.info)
        .map((card) => card?.card?.card?.info) || [];

    // ------Remove duplicate restaurants based on their ID------
    // const uniqueRestaurants = Array.from(
    //   new Map(restaurantsData.map((item) => [item.id, item])).values()
    // );

    // console.log(restaurantsData);
    setRestaurants(restaurantsData);
  };
  return (
    <div id="body-container">
      <div className="filter-container">
        <button
          className="p-2 border m-1.5 rounded-md bg-amber-500 font-bold cursor-pointer hover:bg-amber-300"
          onClick={() => {
            const filteredResturents = resList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurants(filteredResturents);
          }}
        >
          Top Rated Restorent
        </button>
      </div>
      <div className="restorent-container ml-5 mr-5">
        <div className="restorent-card flex gap-4 flex-wrap">
          {restaurants.map((restaurant) => (
            <RestorentCard key={restaurant?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
