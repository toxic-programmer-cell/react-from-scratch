import React from "react";
import { MENU_IMG } from "../util/constant";

const MenuCard = ({ menuData }) => {
  console.log("menu data", menuData);
  const { name, defaultPrice, ratings, description, imageId, price } = menuData;
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 w-full p-6 rounded-lg shadow-smhover:shadow-md transition-shadow duration-300 bg-white">
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">
          <strong>{name}</strong>
        </h3>
        <p className="text-base text-gray-700">
          ₹{defaultPrice / 100 || price / 100}
        </p>
        {ratings?.aggregatedRating?.rating && (
          <p className="text-sm text-gray-600">
            Rating:{" "}
            <span className="text-blue-600 font-semibold">
              {ratings.aggregatedRating.rating}
            </span>{" "}
            <span className="text-gray-500">
              ({ratings.aggregatedRating.ratingCountV2 || 0})
            </span>
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        )}
      </div>
      {imageId && (
        <div className="w-full md:w-[160px] h-[160px] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-md border"
            src={MENU_IMG + imageId}
            alt={name}
          />
        </div>
      )}
    </div>
  );
};

export default MenuCard;
