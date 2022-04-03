import {
    QUESTION_LIST_REQUEST,
    QUESTION_LIST_SUCCESS,
    QUESTION_LIST_FAILED,
} from "../constants/question.constants.js";

export const listQuestions = (questions) => async (dispatch) => {
    try {
        dispatch({ type: QUESTION_LIST_REQUEST });
        
        dispatch({
            type: QUESTION_LIST_SUCCESS,
            payload: await questions,
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
