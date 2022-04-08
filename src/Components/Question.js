import { useState, useEffect } from "react";
import { Row, Alert, ButtonGroup, Container } from "react-bootstrap";
import { decode } from "html-entities";

import { insertCorrectAnswer } from "../Services/question.service";
import Helpers from "./Helpers";
import Answer from "./Answer";

const Question = ({
    question,
    wrongAnswers,
    trueAnswer,
    questionIndex,
    setQuestionIndex,
    resetTimer,
    toggle,
    isActive,
    score,
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

    const delete2 = () => {
        if (answers.length > 2) {
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] !== trueAnswer) {
                    answers.splice(i, 1);
                }
            }
        }
    };

    return (
        <Container>
            <Row>
                <Alert className="alert alert-dismissible alert-primary">
                    <h2 className="alert-heading">
                        <strong>{decode(question.question)}</strong>
                    </h2>
                    <h6>Category: {question.category}</h6>
                </Alert>
            </Row>
            <Row>
                <ButtonGroup className="btn-group-vertical">
                    {dynamicButtonsList}
                </ButtonGroup>
            </Row>
            <br />
            <Row>
                <Helpers
                    delete2={delete2}
                    isActive={isActive}
                    toggle={toggle}
                    trueAnswer={trueAnswer}
                    score={score}
                />
            </Row>
            <br />
        </Container>
    );
};

Question.defaultProps = {
    wrongAnswers: [],
    trueAnswer: "",
};

export default Question;
