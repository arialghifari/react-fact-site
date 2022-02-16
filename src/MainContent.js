import reactLogoLarge from "./reactjs-icon-large.svg";

const MainContent = () => {
    return (
        <main>
            <h1>Reasons why i'm exited to learn React</h1>

            <ol>
                <li>
                    It could boost my career opportunity as a frontend developer
                </li>
                <li>Its the most popular library & also a big community</li>
            </ol>
            <img className="react-logo-large" src={reactLogoLarge} alt="react-logo" />
        </main>
    );
};

export default MainContent;
