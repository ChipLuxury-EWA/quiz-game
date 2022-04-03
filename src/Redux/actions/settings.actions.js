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

export const changeCategory = (settings) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_CATEGORY,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: CHANGE_CATEGORY_FAILED,
            payload: "Failed to change category"
        });
    }
};
export const changeDifficulty = (settings) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_DIFFICULTY,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: CHANGE_DIFFICULTY_FAILED,
            payload: "Failed to change difficulty"
        });
    }
};
export const changeType = (settings) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_TYPE,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: CHANGE_TYPE_FAILED,
            payload: "Failed to change type"
        });
    }
};
export const changeAmount = (settings) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_AMOUNT,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: CHANGE_AMOUNT_FAILED,
            payload: "Failed to change amount"
        });
    }
};
export const changeScore = (settings) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_SCORE,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: CHANGE_SCORE_FAILED,
            payload: "Failed to change score"
        });
    }
};
export const changePlayerName = (settings) => async (dispatch) => {
    try {
        dispatch({
            type: CHANGE_PLAYER_NAME,
            payload: settings,
        });
    } catch (error) {
        dispatch({
            type: CHANGE_PLAYER_NAME_FAILED,
            payload: "Failed to change player name"
        });
    }
};
