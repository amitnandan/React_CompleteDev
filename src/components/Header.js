import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("LOGIN");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-4 bg-pink-200 shadow-lg m-2 sm : bg-yellow-100">
      <div className="logo-container">
        <img alt="Logo" className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li className="px-4"> onlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
