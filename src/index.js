import ReactDOM from "react-dom";
import "./main.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
