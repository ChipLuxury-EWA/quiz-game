import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAILED,
} from "../constants/question.constants.js";

export const questionsListReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
        case QUESTION_LIST_REQUEST:
            return { loading: true, questions: [] };
        case QUESTION_LIST_SUCCESS:
            return { loading: false, questions: action.payload };
        case QUESTION_LIST_FAILED:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
