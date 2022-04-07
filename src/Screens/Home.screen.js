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
            <h5>Gameplay:</h5>
            <ul>
                <li>At each round, a new question is presented.</li>
                <li>You have limited time to answer each question!</li>
                <li>
                    There are multiple choice questions or True/False questions,
                    you can set this in settings.
                </li>
                <li>Only one answer is correct.</li>
                <li>For correct answer you get a point.</li>
                <li>You need at least 50% correct answers to pass!</li>
            </ul>
            <h5>INSTRUCTIONS:</h5>
            <h6>Quick start:</h6>
            <p>
                For a quick start you can choose 'quick start' from the
                navigation bar on top, if you haven't change the settings this
                will gave you 10 random questions from a couple of categories.
                you have 15 seconds to answer for each question.
            </p>
            <h6>Settings:</h6>
            <p>
                If you want some more specific question you can set specs on the
                settings page and then press start.
            </p>
            <h6>Features:</h6>
            <ul>
                <li>You can set the timer in the settings screen</li>
            </ul>
            <h5>ENJOY!</h5>
            <button
                type={"button"}
                className={"btn btn-secondary btn-sm"}
                data-bs-toggle={"tooltip"}
                data-bs-placement={"top"}
                title={"If u wanna cheat cheat, don't click."}
            >
                cheat?
            </button>
        </>
    );
};

export default HomeScreen;
