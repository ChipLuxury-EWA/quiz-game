import { useEffect } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import SelectField from "../Components/SelectField";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../Redux/actions/category.actions";
import Loader from "../Components/Loader.js";
import Message from "../Components/Message.js";
import {
    DIFFICULTY_OPTIONS,
    TYPE_OPTIONS,
    CATEGORY,
    DIFFICULTY,
    TYPE,
} from "../Constants/settings.constants";

const SettingsScreen = () => {
    const dispatch = useDispatch();
    const { loading, error, categories } = useSelector(
        (state) => state.categoriesList
    );

    useEffect(() => {
        dispatch(listCategories());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message />
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <SelectField options={categories} label={CATEGORY} />
                        <SelectField
                            options={DIFFICULTY_OPTIONS}
                            label={DIFFICULTY}
                        />
                        <SelectField options={TYPE_OPTIONS} label={TYPE} />

                        <FloatingLabel
                            label="Amount of questions:"
                            className="m-3"
                        >
                            <Form.Range />
                        </FloatingLabel>

                        <Button type="submit">START</Button>
                    </Form.Group>
                </Form>
            )}
        </>
    );
};

export default SettingsScreen;
