import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "LOGIN" ? setbtnName("LOGOUT") : setbtnName("LOGIN");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
