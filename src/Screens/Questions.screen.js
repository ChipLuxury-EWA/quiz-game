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
    // console.log(loading, questions); //nice example to see what is rendering

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
                <Message message={error} variant={"danger"}/>
            ) : (
                <Container>
                    <Question
                        index={questionIndex}
                        question={question}
                        wrongAnswers={question.incorrect_answers}
                        trueAnswer={question.correct_answer}
                        // TODO: add question Index to redux (setQuestion -> dispatch)
                        questionIndex={questionIndex}
                        setQuestionIndex={setQuestionIndex}
                    />
                    <Row>
                        <ProgressBar
                            now={((questionIndex + 1)/questions.length) * 100}
                            label={`${questionIndex + 1}/${questions.length}`}
                            className="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                        />
                    </Row>
                </Container>
            )}
        </>
    );
};

export default QuestionsScreen;
