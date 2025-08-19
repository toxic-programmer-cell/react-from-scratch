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
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div className="card-container flex-1 hover:border rounded-2xl overflow-hidden min-w-[200px] md:max-w-[250px] cursor-pointer h-auto">
      <div className="card-image w-full h-[200px]">
        <img
          className="w-full h-full object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
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

const resList = [
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["Biryani", "Tandoor"],
      avgRating: 4.4,
      parentId: "27123",
      avgRatingString: "4.4",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-20 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
  },

  {
    info: {
      id: "151515",
      name: "Gupta Bhojnalay",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "fulwara chowk",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Indian", "Beverages"],
      avgRating: 4.1,
      veg: true,
      parentId: "91635",
      avgRatingString: "4.1",
      totalRatingsString: "452",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-19 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
      context: "seo-data-7f04b67b-4452-4705-9c4c-6cb751e9094d",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "395453",
      avgRatingString: "4.1",
      totalRatingsString: "357",
      sla: {
        deliveryTime: 46,
        lastMileTravel: 11.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-19 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
  },
  {
    info: {
      id: "522144",
      name: "Blue Chilli Restaurant",
      cloudinaryImageId: "je6qlse8csxgcfpuoybe",
      locality: "Ambedkar Nagar",
      areaName: "Prasia Road",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Indian", "Fast Food"],
      avgRating: 4,
      veg: true,
      parentId: "311804",
      avgRatingString: "4.0",
      totalRatingsString: "227",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 10.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "10.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-19 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
  },
  {
    info: {
      id: "625927",
      name: "Kathi Junction",
      cloudinaryImageId: "nigqvxgzvyxtfjuqasgg",
      locality: "Bunglow Madhuvan Colony",
      areaName: "Prasia Road",
      costForTwo: "₹200 for two",
      cuisines: ["rolls", "Burgers", "Pizzas", "Fast Food"],
      avgRating: 4.3,
      parentId: "1935",
      avgRatingString: "4.3",
      totalRatingsString: "390",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 12.2,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "12.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-19 23:15:00",
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
        header: "15% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
  },
  {
    info: {
      id: "184424",
      name: "Sab Ghar Tak Foods",
      cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
      locality: "Sanchar Colony",
      areaName: "Parsia Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "173932",
      avgRatingString: "4.1",
      totalRatingsString: "617",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 14.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "14.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-08-19 23:00:00",
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
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
          {resList.map((restaurant) => (
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
