import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Helpers = ({ delete2, toggle, trueAnswer }) => {
    const [class50, setClass50] = useState("btn-sm");
    const [classPauseTime, setClassPauseTime] = useState("btn-sm");
    const [classGetAns, setClassGetAns] = useState("btn-sm");
    const [getAnsValue, setGetAnsValue] = useState("Get Ans");

    const handle50 = () => {
        delete2();
        setClass50("btn-sm disabled");
    };

    const pauseTime = () => {
        toggle();
        setClassPauseTime("btn-sm disabled");
    };

    const getAns = () => {
        setGetAnsValue(trueAnswer)
        setClassGetAns("btn-sm disabled");
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Button className={class50} onClick={handle50}>
                        50/50
                    </Button>
                </Col>
                <Col>
                    <Button className={classPauseTime} onClick={pauseTime}>
                        Pause time
                    </Button>
                </Col>
                <Col>
                    <Button className={classGetAns} onClick={getAns}>
                        {getAnsValue}
                    </Button>
                </Col>
            </Row>
            <br />
        </Container>
    );
};

export default Helpers;
