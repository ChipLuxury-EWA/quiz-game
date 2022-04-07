import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TimerBar = ({ questionIndex, setQuestionIndex, seconds, countTime }) => {
    const navigate = useNavigate();
    const { questions } = useSelector((state) => state.questionsList);

    useEffect(() => {
        if (seconds === 0) {
            if (questionIndex + 1 < questions.length) {
                setQuestionIndex(questionIndex + 1);
            } else {
                navigate("/score");
            }
        }
        // eslint-disable-next-line
    }, [seconds, questionIndex]);

    return (
        <>
            <div className="progress">
                <ProgressBar
                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                    style={{
                        width: (seconds / countTime) * 100 + "%",
                    }}
                >
                    {seconds}
                </ProgressBar>
            </div>
        </>
    );
};

export default TimerBar;
