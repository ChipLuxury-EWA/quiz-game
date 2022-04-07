import { useState, useEffect } from "react";
import { Row, Alert, ButtonGroup, Button } from "react-bootstrap";

import { insertCorrectAnswer } from "../Services/question.service";
import { decode } from "html-entities";
import Answer from "./Answer";

const Question = ({
    question,
    index,
    wrongAnswers,
    trueAnswer,
    questionIndex,
    setQuestionIndex,
    resetTimer
}) => {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setAnswers(insertCorrectAnswer(wrongAnswers, trueAnswer));
    }, [question, wrongAnswers, trueAnswer]);

    const dynamicButtonsList = answers.map((answer, id) => {
        return (
            <Answer
                key={answer}
                value={answer}
                id={id}
                questionIndex={questionIndex}
                setQuestionIndex={setQuestionIndex}
                resetTimer={resetTimer}
            />
        );
    });
    return (
        <>
            <Row>
                <Alert className="alert alert-dismissible alert-primary">
                    <h2 className="alert-heading">Question #{index + 1}</h2>
                    <h6>Category: {question.category}</h6>
                    <p>
                        <strong>{decode(question.question)}</strong>
                    </p>
                </Alert>
            </Row>
            <Row>
                <ButtonGroup className="btn-group-vertical">
                    {dynamicButtonsList}
                </ButtonGroup>
            </Row>
            <br />
        </>
    );
};

Question.defaultProps = {
    wrongAnswers: [],
    trueAnswer: "",
};

export default Question;
