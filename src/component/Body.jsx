import RestorentCard from "./RestorentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredResturents, setFilteredResturents] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const corsProxy = "https://corsproxy.io/";
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const data = await fetch(corsProxy + url);

    const json = await data.json();
    // console.log(json?.data?.cards[9]?.card?.card?.info);

    const restaurantsData =
      json?.data?.cards[4]?.card?.card.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurantsData);
    // ------Remove duplicate restaurants based on their ID------
    // const uniqueRestaurants = Array.from(
    //   new Map(restaurantsData.map((item) => [item.id, item])).values()
    // );

    // console.log(restaurants);
    setRestaurants(restaurantsData);
    setFilteredResturents(restaurantsData);
  };

  return restaurants.length === 0 ? (
    <div className="flex flex-wrap gap-6 mx-[66px] mt-[20px]">
      {Array(8) //creates an array of 8 undefined elements
        .fill("") //fills the array with empty strings
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <div id="body-container">
      <div className="filter-container flex justify-between m-4 mx-[30px] align-center">
        <div className="flex align-center my-2 ">
          <input
            className="border rounded-l-md px-2 outline-0 "
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border border-l-0 rounded-r-md px-2 bg-amber-300 font-bold cursor-pointer"
            onClick={() => {
              const filterData = restaurants.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResturents(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="p-2 border m-1.5 rounded-md bg-amber-500 font-bold cursor-pointer hover:bg-amber-300"
          onClick={() => {
            const topRetedResturents = restaurants.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredResturents(topRetedResturents);
          }}
        >
          Top Rated Restorent
        </button>
      </div>
      <div className="restorent-container mx-16 flex justify-center">
        <div className="restorent-card flex gap-2 flex-wrap mx-auto">
          {filteredResturents.map((restaurant) => (
            <RestorentCard key={restaurant?.info?.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
