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

const RestorentCard = () => {
  return (
    <div className="card-container">
      <div className="card-image"></div>
      <div className="card-content">
        <h3>Restorent Name</h3>
        <p>Restorent Type</p>
        <p>Rating: 4.5</p>
        <p>Delivery Time: 30 mins</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div id="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restorent-container">
        <div className="restorent-card">
          <RestorentCard />
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
