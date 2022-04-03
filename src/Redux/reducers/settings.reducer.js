import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_AMOUNT,
    CHANGE_SCORE,
    CHANGE_PLAYER_NAME,
    CHANGE_CATEGORY_FAILED,
    CHANGE_DIFFICULTY_FAILED,
    CHANGE_TYPE_FAILED,
    CHANGE_AMOUNT_FAILED,
    CHANGE_SCORE_FAILED,
    CHANGE_PLAYER_NAME_FAILED,
} from "../constants/settings.constants.js";
//TODO: move score and player name too separate reducer
const initialState = {
    category: "",
    difficulty: "",
    type: "",
    amount: 10,
    score: 0,
    playerName: "",
};

export const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CATEGORY:
            return { ...state, category: action.payload };
        case CHANGE_CATEGORY_FAILED:
            return { error: action.payload };

        case CHANGE_DIFFICULTY:
            return { ...state, difficulty: action.payload };
        case CHANGE_DIFFICULTY_FAILED:
            return { error: action.payload };

        case CHANGE_TYPE:
            return { ...state, type: action.payload };
        case CHANGE_TYPE_FAILED:
            return { error: action.payload };

        case CHANGE_AMOUNT:
            return { ...state, amount: action.payload };
        case CHANGE_AMOUNT_FAILED:
            return { error: action.payload };

        case CHANGE_SCORE:
            return { ...state, score: action.payload };
        case CHANGE_SCORE_FAILED:
            return { error: action.payload };

        case CHANGE_PLAYER_NAME:
            return { ...state, playerName: action.payload };
        case CHANGE_PLAYER_NAME_FAILED:
            return { error: action.payload };

        default:
            return state;
    }
};
