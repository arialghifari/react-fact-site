import reactLogo from "../reactjs-icon.svg";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="brand">
                    <img src={reactLogo} alt="react-logo" />
                    <h1>ReactFacts</h1>
                </div>
                <ul className="nav-items">
                    <p>React JS - Project</p>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
