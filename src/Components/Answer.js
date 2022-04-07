import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decode } from "html-entities";

import { changeScore } from "../Redux/actions/settings.actions";

const Answer = ({ value, id, questionIndex, setQuestionIndex , resetTimer}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questions } = useSelector((state) => state.questionsList);
    const { score } = useSelector((state) => state.settingsList);

    const handleOnClick = () => {
        if (value === questions[questionIndex].correct_answer) {
            dispatch(changeScore(score + 1));
        }
        if (questionIndex + 1 < questions.length) {
            resetTimer()
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate("/score");
        }
    };

    return (
        <Button key={id + 123} onClick={handleOnClick}>
            {decode(value)}
        </Button>
    );
};

export default Answer;
