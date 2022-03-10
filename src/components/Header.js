import reactLogo from "../svg/reactjs-icon.svg";
import iconLightMode from "../svg/icon-lightmode.svg";
import iconDarkMode from "../svg/icon-darkmode.svg";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header>
      <nav className={isDarkMode ? "dark" : ""}>
        <div className="brand">
          <img src={reactLogo} alt="react-logo" />
          <h1>ReactFacts</h1>
        </div>
        <ul className="nav-items" onClick={toggleDarkMode}>
          <p>Light</p>
          <img src={isDarkMode ? iconDarkMode : iconLightMode} alt="" />
          <p>Dark</p>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
