import { RES_URL } from "../util/constant";

const RestorentCard = ({ resData }) => {
  // console.log(resData);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData.info;
  return (
    <div className="card-container bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
      <div className="card-image w-full h-[200px]">
        <img
          className="w-full h-40 object-cover"
          src={RES_URL + cloudinaryImageId}
          // src={image}
          alt="food"
        />
      </div>
      <div className="card-content p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          <strong>{name}</strong>
        </h3>

        <p className="text-sm text-gray-600"> {cuisines.join(", ")} </p>
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>⭐ {avgRating} </span>
          <span>Deliver: {sla?.slaString} </span>
        </div>
        <p>
          <strong className="text-red-600"> {costForTwo} </strong>
        </p>
      </div>
    </div>
  );
};

export default RestorentCard;
