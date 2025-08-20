import react from "react";
import reactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";

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
