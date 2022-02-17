import ReactDOM from "react-dom";
import "./main.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="font-inter">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
