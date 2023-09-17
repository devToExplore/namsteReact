import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("LogIn");
  const handleClick = () => {
    btn === "LogIn" ? setBtn("LogOut") : setBtn("LogIn");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
