import React, { useEffect } from "react";
//Redux:
import { useDispatch, useSelector } from "react-redux";
import { listQuestions } from "../Redux/actions/question.actions";
//Components:
import Loader from "../Components/Loader.js";
import Message from "../Components/Message.js";

import {
    Container,
    Row,
    Col,
    ProgressBar,
    Alert,
    Card,
    Button,
    ButtonGroup,
} from "react-bootstrap";
import useTrivia from "../hooks/useTrivia";


const QuestionsScreen = () => {
    const dispatch = useDispatch();

    const questionsList = useSelector((state) => state.questionsList);
    const { loading, error, questions } = questionsList;
    
    //My 'useEffect' hook to fetch question according to redux settings state
    // also this is my first hook!!!
    
    useTrivia()
    console.log(questions)
    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message />
            ) : (
                <Container>
                    <Row>
                        <Alert className="alert alert-dismissible alert-primary">
                            <h4 className="alert-heading">Question #1</h4>
                            <p>
                                <strong>
                                    The theme for the popular science fiction
                                    series &quot;Doctor Who&quot; was composed
                                    by who?
                                </strong>
                            </p>
                        </Alert>
                    </Row>

                    <Row>
                        <ButtonGroup className="btn-group-vertical">
                            <Button className="btn btn-primary">
                                answer 1
                            </Button>
                            <Button className="btn btn-primary">
                                answer 2
                            </Button>
                            <Button className="btn btn-primary">
                                answer 3
                            </Button>
                            <Button className="btn btn-primary">
                                answer 4
                            </Button>
                        </ButtonGroup>
                    </Row>
                    <br />

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
