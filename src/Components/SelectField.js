import { useDispatch } from "react-redux";
import { Form, FloatingLabel } from "react-bootstrap";
import { CATEGORY, DIFFICULTY, TYPE } from "../Constants/settings.constants";
import {
    changeCategory,
    changeDifficulty,
    changeType,
} from "../Redux/actions/settings.actions";

// import { setSetting } from "../Services/settings.service";

const SelectField = (props) => {
    const { label, options } = props;

    const dispatch = useDispatch();

    const dynamicOptionsList = options.map((option) => {
        return (
            <option key={option.id} value={option.id}>
                {option.name}
            </option>
        );
    });

    const handleChange = (e) => {
        // TODO: Move this to services:
        // dispatch(setSetting(label, e.target.value));
        switch (label) {
            case CATEGORY:
                dispatch(changeCategory(e.target.value));
                break;
            case DIFFICULTY:
                dispatch(changeDifficulty(e.target.value));
                break;
            case TYPE:
                dispatch(changeType(e.target.value));
                break;
            default:
                break;
        }
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
