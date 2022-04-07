import React from "react";
import { ProgressBar } from "react-bootstrap";

const GameBar = ({ questionIndex, totalQuestions }) => {
    return (
        <>
            <div className="progress">
                <ProgressBar
                    className="progress-bar "
                    style={{
                        width:
                            ((questionIndex + 1) / totalQuestions) * 100 + "%",
                    }}
                >{`${questionIndex + 1}/${totalQuestions}`}</ProgressBar>
            </div>
        </>
    );
};

export default GameBar;
