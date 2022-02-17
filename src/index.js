import ReactDOM from "react-dom";
import "./main.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

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
