import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
    const { score } = useSelector((state) => state.settingsList);
    const { seconds, isActive, countTime, resetTimer, toggle } = useTimer(15);
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
                <>
                    <Container>
                        <GameBar
                            questionIndex={questionIndex}
                            totalQuestions={questions.length}
                        />
                        <Question
                            index={questionIndex}
                            question={question}
                            questions={questions}
                            wrongAnswers={question.incorrect_answers}
                            trueAnswer={question.correct_answer}
                            // TODO: add question Index to redux (setQuestion -> dispatch)
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                            resetTimer={resetTimer}
                            toggle={toggle}
                            isActive={isActive}
                            score={score}
                        />
                        <TimerBar
                            // TODO: add question Index to redux (setQuestion -> dispatch)
                            questionIndex={questionIndex}
                            setQuestionIndex={setQuestionIndex}
                            seconds={seconds}
                            countTime={countTime}
                        />
                    </Container>
                </>
            )}
        </>
    );
};

export default QuestionsScreen;
