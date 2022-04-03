import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAILED,
} from "../constants/question.constants.js";

import {
    fetchQuestions,
} from "../../Services/question.service";

export const listQuestions = () => async (dispatch) => {
    try {
        dispatch({ type: QUESTION_LIST_REQUEST });

        const questions = await fetchQuestions();

        dispatch({
            type: QUESTION_LIST_SUCCESS,
            payload: questions,
        });
    } catch (error) {
        dispatch({
            type: QUESTION_LIST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
