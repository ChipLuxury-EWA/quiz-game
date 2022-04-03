import {
    changeCategory,
    changeDifficulty,
    changeType,
    changeAmount,
    changeScore,
    changePlayerName,
} from "../Redux/actions/settings.actions";

import { CATEGORY, DIFFICULTY, TYPE } from "../Constants/settings.constants";

export const setSetting = (label, value) => {
    switch (label) {
        case CATEGORY:
            changeCategory(value);
            break;
        case DIFFICULTY:
            changeDifficulty(value);
            break;
        case TYPE:
            changeType(value);
            break;
        default:
            break;
    }
};
