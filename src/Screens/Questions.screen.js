import { useState, useEffect } from "react";
//Components:
import Loader from "../Components/Loader.js";
import Message from "../Components/Message.js";
import Question from "../Components/Question";
import GameBar from "../Components/GameBar.js";
import useTimer from "../hooks/useTimer.js";

import { Container } from "react-bootstrap";
import useTrivia from "../hooks/useTrivia";
import TimerBar from "../Components/TimerBar.js";

const QuestionsScreen = () => {
    const {seconds, done, countTime, resetTimer } = useTimer(10)
    const [questionIndex, setQuestionIndex] = useState(0);
    const [question, setQuestion] = useState({});
    const { loading, error, questions } = useTrivia();
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
                <Message message={error} variant={"danger"} />
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
                        resetTimer={resetTimer}
                    />
                    <TimerBar
                        // TODO: add question Index to redux (setQuestion -> dispatch)
                        questionIndex={questionIndex}
                        setQuestionIndex={setQuestionIndex}
                        seconds={seconds}
                        done={done}
                        countTime={countTime}
                    />
                </Container>
            )}
        </>
    );
};

export default QuestionsScreen;
