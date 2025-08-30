import React from "react";
import { MENU_IMG } from "../util/constant";

const MenuCard = ({ menuData }) => {
  console.log("menu data", menuData);
  const { name, defaultPrice, ratings, description, imageId, price } = menuData;
  return (
    <div className="flex justify-between w-full gap-10">
      <div>
        <p>
          <strong>{name}</strong>
        </p>
        <p>₹{defaultPrice / 100 || price / 100}</p>
        <p>
          Rating:{" "}
          <span className="text-blue-600 font-bold">
            {ratings?.aggregatedRating?.rating}{" "}
          </span>
          <span>({ratings.aggregatedRating.ratingCountV2})</span>
        </p>
        <p>{description} </p>
      </div>
      <div>
        <div className="w-[200px] h-[200px]">
          <img
            className="h-full w-full object-contain"
            src={MENU_IMG + imageId}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
