import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row } from "react-bootstrap";
import { changeScore } from "../Redux/actions/settings.actions";
import Message from '../Components/Message'

const FinalScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { questions } = useSelector((state) => state.questionsList);
    const { score } = useSelector((state) => state.settingsList);

    const handleHomeButton = () => {
        dispatch(changeScore(0))
        navigate("/");
    };

    const message = ` GREAT SUCCESS!! Final score: ${score}`
    return (
        <Container>
            <Row>
                <Message variant={"success"} message={message} />
            </Row>
            <Row>
                <Button onClick={handleHomeButton}>Back to home page</Button>
            </Row>
            
        </Container>
    );
};

export default FinalScreen;
