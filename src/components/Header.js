import { useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const isOnline = useOnlineStatus(); // ✅ Correct usage of the hook

  return (
    <div className="header-container">
      <div className="header-img">
        <h2 className="header-title">QuickBite</h2>
        
        {/* Online/Offline Status Icon */}
        <span
          title={isOnline ? "You're Online" : "You're Offline"}
          style={{ fontSize: "18px", marginLeft: "10px" }}
        >
          {isOnline ? "🟢" : "🔴"}
        </span>
      </div>

      <div className="navbar-items">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Menu
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
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
