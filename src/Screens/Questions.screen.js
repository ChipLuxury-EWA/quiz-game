import { useState, useEffect } from "react";
//Components:
import Loader from "../Components/Loader.js";
import Message from "../Components/Message.js";
import Question from "../Components/Question";

import { Container, Row, ProgressBar } from "react-bootstrap";
import useTrivia from "../hooks/useTrivia";

const QuestionsScreen = () => {
    // My hook to fetch question according to 'settings' to redux-state
    // this hook also return questions list because I have some problems render from redux
    // also this is my first hook!!!
    const { loading, error, questions } = useTrivia();
    // console.log(loading, questions);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [question, setQuestion] = useState({});
    useEffect(() => {
        if (questions) {
            setQuestion(questions[questionIndex]);
        }
    }, [questions, questionIndex]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message />
            ) : (
                <Container>
                    <Question
                        index={questionIndex}
                        question={question}
                        wrongAnswers={question.incorrect_answers}
                        trueAnswer={question.correct_answer}
                    />
                    <Row>
                        <ProgressBar
                            now="60"
                            label="6/10"
                            className="progress-bar progress-bar-striped progress-bar-animated"
                        />
                    </Row>
                </Container>
            )}
        </>
    );
};

export default QuestionsScreen;
