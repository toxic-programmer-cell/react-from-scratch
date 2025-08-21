import RestorentCard from "./RestorentCard";
import resList from "../util/dumyData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  return (
    <div id="body-container">
      <div className="search-container">
        <button
          className="p-2 border m-1.5 rounded-md bg-amber-500 font-bold cursor-pointer"
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
            <RestorentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
