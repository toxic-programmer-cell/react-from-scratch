import { LOGO_URL } from "../util/constant";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-link">
        <ul>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink>Menu</NavLink>
          </li>
          <li>
            <NavLink>Offers</NavLink>
          </li>
          <li>
            <NavLink>cart</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
