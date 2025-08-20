import { LOGO_URL } from "../util/constant";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
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

export default Header;
