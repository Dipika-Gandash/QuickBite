const Header = () => {
  return (
    <div className="header-container">
      <div className="header-img">
        <h2 className="header-title">QuickBite</h2>
      </div>

      <div className="navbar-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Menu</li>
          <li>Contact</li>
          <button className="login-btn">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
