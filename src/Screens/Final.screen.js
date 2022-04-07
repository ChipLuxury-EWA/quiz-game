import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Row } from "react-bootstrap";
import { changeScore } from "../Redux/actions/settings.actions";
import Message from '../Components/Message'

const FinalScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [variant, setVariant] = useState("")
    const [message, setMessage] = useState("")

    const { questions } = useSelector((state) => state.questionsList);
    const { score } = useSelector((state) => state.settingsList);

    const handleHomeButton = () => {
        dispatch(changeScore(0))
        navigate("/");
    };
    
    const handleNewGame = () => {
        dispatch(changeScore(0))
        navigate("/questions");
    };
    
    const line = `You got ${score} answers correct from ${questions.length} questions.`

    useEffect(()=>{
        if(score/questions.length >= 0.5) {
            setVariant("success")
            setMessage(`~GREAT SUCCESS~ ` + line)
        } else {
            setVariant("danger")
            setMessage(`~NEXT TIME~ ` + line)
        }
        // eslint-disable-next-line
    },[]) //only render once
    return (
        <Container>
            <Row>
                <Message variant={variant} message={message} />
            </Row>
            <Row>
                <Button onClick={handleHomeButton}>Back to home page</Button>
            </Row>
                <br/>
            <Row>
                <Button onClick={handleNewGame}>Start a new game</Button>
            </Row>
            
        </Container>
    );
};

export default FinalScreen;
