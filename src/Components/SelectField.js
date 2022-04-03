import { useState } from "react";
import { Form, FloatingLabel } from "react-bootstrap";

const SelectField = (props) => {
    const { label, options } = props;
    const [value, setValue] = useState();
    const dynamicOptionsList = options.map((option) => {
        return (
            <option key={option.id} value={option.id}>
                {option.name}
            </option>
        );
    });

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <FloatingLabel label={label}>
            <Form.Select className="m-3" onChange={handleChange}>
                <option>Choose one</option>
                {dynamicOptionsList}
            </Form.Select>
        </FloatingLabel>
    );
};

export default SelectField;
