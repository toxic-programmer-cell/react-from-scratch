import reactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About";

const FoodApp = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
