import reactLogo from "../svg/reactjs-icon.svg";
import iconLightMode from "../svg/icon-lightmode.svg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="brand">
          <img src={reactLogo} alt="react-logo" />
          <h1>ReactFacts</h1>
        </div>
        <ul className="nav-items">
          <p>Light</p>
          <img src={iconLightMode} alt="" />
          <p>Dark</p>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
