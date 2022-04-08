import React from "react";
import { useState } from "react";
import { Button, ButtonGroup, Col, Row, Alert } from "react-bootstrap";

const Helpers = ({ delete2, toggle, trueAnswer, isActive, score }) => {
    const [class50, setClass50] = useState("btn-sm");
    const [classPauseTime, setClassPauseTime] = useState("btn-sm");
    const [classGetAns, setClassGetAns] = useState("btn-sm");
    const [getAnsValue, setGetAnsValue] = useState("Get Ans");

    const handle50 = () => {
        if (!isActive) {
            toggle();
        }
        delete2();
        setClass50("btn-sm disabled");
    };

    const pauseTime = () => {
        toggle();
        setClassPauseTime("btn-sm disabled");
    };

    const getAns = () => {
        setGetAnsValue(trueAnswer);
        setClassGetAns("btn-sm disabled");
    };

    return (
        <>
            <Row>
                <Col xs={10}>
                    <Row>
                        <ButtonGroup>
                            <Button className={class50} onClick={handle50}>
                                50/50
                            </Button>
                            <Button
                                className={classPauseTime}
                                onClick={pauseTime}
                            >
                                Pause time
                            </Button>
                            <Button className={classGetAns} onClick={getAns}>
                                {getAnsValue}
                            </Button>
                        </ButtonGroup>
                    </Row>
                </Col>
                <Col xs={2}>
                    <span class="badge bg-success">score: {score}</span>
                </Col>
            </Row>
        </>
    );
};

export default Helpers;
