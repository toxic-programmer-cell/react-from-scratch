import react from "react";
import reactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="https://w7.pngwing.com/pngs/664/210/png-transparent-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo-uber-eats.png"
          alt="logo"
        />
      </div>
      <div className="nav-link">
        <ul>
          <li>About</li>
          <li>Menu</li>
          <li>Offers</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestorentCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo } = resData.info;
  return (
    <div className="card-container flex-1 hover:border rounded-2xl overflow-hidden min-w-[200px] md:max-w-[250px] cursor-pointer">
      <div className="card-image w-full">
        <img
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
          alt="food"
        />
      </div>
      <div className="card-content m-2">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>Rating: {avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "1003414",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
      locality: "Chhindwara",
      areaName: "Chhindwara City",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "172",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 13.1,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "13.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-19 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-c44b8889-6e0d-41b6-8ecf-3f6f467da5c1",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/pizza-hut-chhindwara-city-rest1003414",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div id="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restorent-container ml-5 mr-5">
        <div className="restorent-card flex gap-4 flex-wrap">
          {resObj.map((restaurant) => (
            <RestorentCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FoodApp = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
