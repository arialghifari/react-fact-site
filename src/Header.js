import reactLogo from "./reactjs-icon.svg";
import "./main.css";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img className="react-logo" src={reactLogo} alt="react-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
