import { MODE_ADD } from "../../constants/modes";
import {
    TOGGLE_INPUT_MODE,
    SET_INPUT_FILTER,
    RESET_INPUT_FILTER
} from "../../constants/actions";
import { setObjectProperties } from "../../helpers/objectUtils";

const initialState = {
    appMode: MODE_ADD,
    filter: ""
};

export default function appStoreReducer(state = initialState, action) {
    let _state;
    let cloner = setObjectProperties(state);
    switch (action.type) {
        case TOGGLE_INPUT_MODE:
            _state = cloner({ appMode: action.mode });
            break;
        case SET_INPUT_FILTER:
            _state = cloner({ filter: action.filter });
            break;
        case RESET_INPUT_FILTER:
            _state = cloner({ filter: "" });
            break;
        default:
            _state = state;
            break;
    }
    return _state;
}
