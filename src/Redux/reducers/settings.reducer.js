import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
} from "../constants/settings.constants.js";

export const settingsReducer = (state = { settings: {} }, action) => {
    switch (action.type) {
        case UPDATE_REQUEST:
            return {
                loading: true,
                settings: {
                    category: "",
                    difficulty: "",
                    type: "",
                    amount: 10,
                    score: 0,
                },
            };
        case UPDATE_SUCCESS:
            return { loading: false, settings: action.payload };
        case UPDATE_FAILED:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
