import RestorentCard from "./RestorentCard";
import resList from "../util/dumyData";

const Body = () => {
  return (
    <div id="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restorent-container ml-5 mr-5">
        <div className="restorent-card flex gap-4 flex-wrap">
          {resList.map((restaurant) => (
            <RestorentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
