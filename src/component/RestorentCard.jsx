import { RES_URL } from "../util/constant";

const RestorentCard = ({ resData }) => {
  // console.log(resData);
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = resData;
  return (
    <div className="card-container flex-1 hover:border rounded-2xl overflow-hidden min-w-[200px] md:max-w-[250px] cursor-pointer h-auto shadow-md">
      <div className="card-image w-full h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={RES_URL + cloudinaryImageId}
          // src={image}
          alt="food"
        />
      </div>
      <div className="card-content m-2">
        <h3>{name}</h3>
        <p> {cuisines.join(", ")} </p>
        <p>Rating: {avgRating} </p>
        <p>
          <strong> {costForTwo} s</strong>
        </p>
      </div>
    </div>
  );
};

export default RestorentCard;
