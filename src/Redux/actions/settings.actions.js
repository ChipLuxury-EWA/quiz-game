import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
} from "../constants/settings.constants.js";

export const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_REQUEST });

        const settings = {
            category: "Sports",
            difficulty: "hard",
            type: "boolen",
            amount: 50,
            score: 3,
        }

        dispatch({
            type: UPDATE_SUCCESS,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
