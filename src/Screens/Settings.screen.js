import { useEffect } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SelectField from "../Components/SelectField";
import { listCategories } from "../Redux/actions/category.actions";
import Loader from "../Components/Loader.js";
import Message from "../Components/Message.js";
import {
    DIFFICULTY_OPTIONS,
    TYPE_OPTIONS,
    AMOUNT_OPTIONS,
    TIMER_OPTIONS,
    CATEGORY,
    DIFFICULTY,
    TYPE,
    AMOUNT,
    TIMER,
} from "../Constants/settings.constants";

const SettingsScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, categories } = useSelector(
        (state) => state.categoriesList
    );

    useEffect(() => {
        dispatch(listCategories());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/questions");
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message />
            ) : (
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Row>
                                <SelectField
                                    options={categories}
                                    label={CATEGORY}
                                />
                            </Row>
                            <Row>
                                <SelectField
                                    options={DIFFICULTY_OPTIONS}
                                    label={DIFFICULTY}
                                />
                            </Row>
                            <Row>
                                <SelectField
                                    options={TYPE_OPTIONS}
                                    label={TYPE}
                                />
                            </Row>
                            <Row>
                                <SelectField
                                    options={AMOUNT_OPTIONS}
                                    label={AMOUNT}
                                />
                            </Row>
                            <Row>
                                <SelectField
                                    options={TIMER_OPTIONS}
                                    label={TIMER}
                                />
                            </Row>
                            <Row>
                                <Button
                                    className="btn btn-lg btn-primary"
                                    type="submit"
                                >
                                    START
                                </Button>
                            </Row>
                        </Form.Group>
                    </Form>
                </Container>
            )}
        </>
    );
};

export default SettingsScreen;
