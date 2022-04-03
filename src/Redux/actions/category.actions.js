import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAILED,
} from "../constants/category.constants.js";

import {
    fetchCategories,
} from "../../Services/category.service";

export const listCategories = () => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });

        const categories = await fetchCategories();

        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: categories.trivia_categories,
        });
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
