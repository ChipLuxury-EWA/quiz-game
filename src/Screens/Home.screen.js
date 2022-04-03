import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
//Redux:
import { useDispatch, useSelector } from "react-redux";
import { listQuestions } from "../Redux/actions/question.actions";
//Components:
import Loader from "../Components/Loader.js";
import Message from "../Components/Message.js";


const HomeScreen = () => {
    const dispatch = useDispatch();

    const questionsList = useSelector((state) => state.questionsList);
    const { loading, error, questions } = questionsList;

    useEffect(() => {
        dispatch(listQuestions());
    }, [dispatch]);

    return (
        <>
            <h1>Show me what you got</h1>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message />
            ) : (
                <Row>
                <h1>Main screen</h1>
                    {/* {questions.map((question) => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))} */}
                </Row>
            )}

        </>
    );
};

export default HomeScreen;
