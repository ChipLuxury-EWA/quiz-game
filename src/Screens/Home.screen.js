import { useState } from "react";

const HomeScreen = () => {
    const [cheat, setCheatb] = useState("If u wanna cheat cheat, don't click.");
    const [showCheat, setShowCheat] = useState(false);

    const toggle = () => {
        setShowCheat(!showCheat);
    };
    return (
        <>
            <h3>INFO ABOUT THE GAME:</h3>
            <p>
                Hello and welcome to Trivia game made with questions from{" "}
                <a href="https://opentdb.com/" target="_blank" rel="noreferrer">
                    OPEN TRIVIA DB
                </a>
                .<br />
                This game is a part of home assignment for monday-u fullstack
                course, you can review the code on{" "}
                <a
                    href="https://github.com/ChipLuxury-EWA/quiz-game"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                .
            </p>
            <h5>Gameplay:</h5>
            <ul>
                <li>At each round, a new question will be presented.</li>
                <li>You have limited time to answer each question!</li>
                <li>
                    There are multiple choice questions or True/False questions,
                    you can set that in settings.
                </li>
                <li>Only one answer is correct.</li>
                <li>For each correct answer you will get a point.</li>
                <li>You need at least 50% correct answers to pass!</li>
                <li>
                    You have 3 lifelines:{" "}
                    <ul>
                        <li>50/50 - delete 2 possible answers.</li>
                        <li>Pause time - stop the timer until next question.</li>
                        <li>Get answer - get the right answer.</li>
                        <ul>
                            <li>
                                If you pause the time and then take the 50/50
                                lifeline the timer will continue to count.
                            </li>
                        </ul>
                    </ul>
                </li>
            </ul>
            <h5>INSTRUCTIONS:</h5>
            <h6>Quick start:</h6>
            <p>
                For a quick start you can choose 'quick start' from the
                navigation bar on top, if you haven't change the settings this
                will gave you 10 random questions from a couple of categories.
                you have 15 seconds to answer each question.
            </p>
            <h6>Settings:</h6>
            <p>
                If you want some more specific question you can set specs on the
                settings page and then press start.
            </p>
            <h6>Features:</h6>
            <ul>
                <li>You can set the timer in the settings screen.</li>
            </ul>
            <h5>ENJOY!</h5>
            <button
                type={"button"}
                className={"btn btn-dark btn-sm"}
                onClick={toggle}
            >
                cheat?
            </button>
            {showCheat ? cheat : ""}
        </>
    );
};

export default HomeScreen;
