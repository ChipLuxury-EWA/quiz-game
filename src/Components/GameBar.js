import React from "react";
import { ProgressBar } from "react-bootstrap";
import useTimer from "../hooks/useTimer";

const GameBar = ({ questionIndex, totalQuestions }) => {
    const { isActive, seconds, done, toggle } = useTimer(5);
    return (
        <>
        <h6> seconds: {seconds}</h6>
        <h6> isActive: {isActive ? "true -timer is active" : "false - timer is NOT active"}</h6>
        <h6> done? {done ? "true -DONE counting" : "false - STILL counting"}</h6>
            <ProgressBar
                className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                now={((questionIndex + 1) / totalQuestions) * 100}
                label={`${questionIndex + 1}/${totalQuestions}`}
            />
        </>
    );
};

export default GameBar;
