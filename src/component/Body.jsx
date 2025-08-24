import RestorentCard from "./RestorentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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

  //Conditional Rendering
  if (restaurants.length == 0) {
    return (
      <div className="flex flex-wrap gap-6 mx-[66px] mt-[20px]">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <Shimmer key={index} />
          ))}
      </div>
    );
  }

  return (
    <div id="body-container">
      <div className="filter-container">
        <button
          className="p-2 border m-1.5 rounded-md bg-amber-500 font-bold cursor-pointer hover:bg-amber-300"
          onClick={() => {
            const filteredResturents = restaurants.filter(
              (res) => res.avgRating > 4
            );
            setRestaurants(filteredResturents);
          }}
        >
          Top Rated Restorent
        </button>
      </div>
      <div className="restorent-container mx-16 flex justify-center">
        <div className="restorent-card flex gap-2 flex-wrap mx-auto">
          {restaurants.map((restaurant) => (
            <RestorentCard key={restaurant?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
