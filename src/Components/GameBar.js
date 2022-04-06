import React from "react";
import { ProgressBar } from "react-bootstrap";

import useTimer from 'first'

const GameBar = ({ questionIndex, totalQuestions }) => {
    return (
        <>
        const {}
            <ProgressBar
                className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                now={((questionIndex + 1) / totalQuestions) * 100}
                label={`${questionIndex + 1}/${totalQuestions}`}
            />
        </>
    );
};

export default GameBar;
