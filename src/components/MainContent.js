import reactLogoLargeLightMode from "../svg/reactjs-icon-large-lightmode.svg";
import reactLogoLargeDarkMode from "../svg/reactjs-icon-large-darkmode.svg";

const MainContent = ({ isDarkMode }) => {
  return (
    <main className={isDarkMode ? "dark" : ""}>
      <h1>Fun facts about React</h1>

      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 180K stars on GitHub</li>
        <li>Is maintained by awesome people in Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img
        src={isDarkMode ? reactLogoLargeDarkMode : reactLogoLargeLightMode}
        alt="react-logo"
      />
    </main>
  );
};

export default MainContent;
