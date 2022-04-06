const HomeScreen = () => {
    return (
        <>
            <h3>INFO ABOUT THE GAME:</h3>
            <p>
                Hello and welcome to Trivia game made with question from{" "}
                <a href="https://opentdb.com/">OPEN TRIVIA DB</a>,<br />
                this game is a part of home assignment for monday-u fullstack
                course, you can review the code on{" "}
                <a href="https://github.com/ChipLuxury-EWA/quiz-game">GitHub</a>
                .
            </p>
            <h3>INSTRUCTIONS:</h3>
            <h6>Quick start:</h6>
            <p>
                For a quick start you can choose 'quick start' from the
                navigation bar on top, this will gave you 10 random question
                from couple of categories.
            </p>
            <h6>Settings:</h6>
            <p>
                If you want some more specific question you can set specs on the
                settings page and then press start.
            </p>
            <h5>ENJOY</h5>
        </>
    );
};

export default HomeScreen;
