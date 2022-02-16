import ReactDOM from "react-dom";
import "./main.css";

const Navbar = () => {
    return (
        <nav className="navbar h-[100px] flex px-10 justify-between items-center bg-[#21222A] text-white">
            <div className="logo">
                <a href="/" className="text-[#61DAFB] font-bold text-[32px]">
                    ReactFacts
                </a>
            </div>
            <div className="project-1">
                <p className="text-lg font-semibold">
                    React Course - Project 1
                </p>
            </div>
        </nav>
    );
};

const MainContent = () => {
    return (
        <main className="main-content p-10">
            <h1 className="text-lg">React is awesome!</h1>
        </main>
    );
};

ReactDOM.render(
    <div className="font-inter">
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
);
