import {
    TOGGLE_INPUT_MODE,
    SET_INPUT_FILTER,
    RESET_INPUT_FILTER
} from "../../constants/actions";

export function toggleAppMode(mode) {
    return {
        type: TOGGLE_INPUT_MODE,
        mode
    };
}

export function setInputFilter(filter) {
    return {
        type: SET_INPUT_FILTER,
        filter
    };
}

export function resetInputFilter() {
    return {
        type: RESET_INPUT_FILTER,
        filter: ""
    };
}
