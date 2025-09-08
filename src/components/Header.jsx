import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [btnName, setBtnName] = useState("Login");
  const [showOfflineMsg, setShowOfflineMsg] = useState(false);
  const isOnline = useOnlineStatus();

useEffect(() => {
    let timeoutId;
    if (!isOnline) {
      timeoutId = setTimeout(() => {
        setShowOfflineMsg(true);
      }, 5000);
    } else {
      setShowOfflineMsg(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isOnline]);

  const navLinkClass = ({ isActive }) =>
    `py-[13px] px-5 cursor-pointer font-semibold italic text-[1.2rem] montserrat transition-colors duration-300 ${
      isActive ? "text-[#FF5722]" : "text-[#333]"
    }`;

  return (
    <header className="flex items-center justify-between p-6 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex space-x-5 items-center">
        <p className=" text-[#FF5722] pacifico text-4xl md:text-5xl text-center md:text-left w-full">
          QuickBite
        </p>
          <span title={isOnline ? "You are Online" : "You are Offline"} className="text-xl"> {isOnline ? "🟢" : "🔴"}</span>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[#FF5722]"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-[80px] left-0 w-full bg-white shadow-md md:shadow-none md:static md:flex md:items-center md:justify-between md:w-auto md:bg-transparent`}
      >
        
        <div className="md:flex md:items-center md:space-x-4">
          <ul className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/orders" className={navLinkClass}>
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="px-4 pb-4 md:pb-0 md:px-0">
          <button className="w-full md:w-auto px-[15px] py-2 text-white bg-[#ff6347] rounded-[5px] font-bold cursor-pointer text-[1.1rem] transition-colors duration-300 hover:bg-[#e53e3e]"
         onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}
         >
           {btnName}
          </button>
        </div>
      </nav>
       {showOfflineMsg && (
        <div className="offline-msg fixed top-0 left-0 w-full bg-red-600 text-white text-center py-2 animate-fade-in">
          <p>You are offline! Please check your internet connection.</p>
        </div>
      )}
    </header>
  );
};

export default Header;
