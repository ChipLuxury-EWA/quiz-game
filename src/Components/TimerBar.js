import { useSelector } from "react-redux";
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const TimerBar = ({
    questionIndex,
    setQuestionIndex,
    seconds,
    done,
    countTime,
}) => {
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

    }, [seconds]);

    return (
        <>
            <Row>
                <Col xs={"auto"}>{seconds}</Col>
                <Col xs>
                    <div className="progress">
                        <ProgressBar
                            className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                            style={{
                                width: ((seconds + 0) / countTime) * 100 + "%",
                            }}
                        ></ProgressBar>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TimerBar;
