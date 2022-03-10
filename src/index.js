import ReactDOM from "react-dom";
import react from "react";
import "./main.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
  var darkModeStatus = localStorage.getItem("isDarkMode") === "true";
  const [isDarkMode, setIsDarkMode] = react.useState(darkModeStatus);

  const toggleDarkMode = () => {
    darkModeStatus = !darkModeStatus;
    localStorage.setItem("isDarkMode", darkModeStatus);

    setIsDarkMode(darkModeStatus);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <MainContent isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
