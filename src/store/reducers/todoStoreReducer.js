import {
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    SELECT_TODO_ITEM,
    DESELECT_TODO_ITEM
} from "../../constants";
import { objectCloner, deleteFromArray } from "../../helpers";

const initialState = {
    todos: [],
    selectedItem: null
};

export default function todoStoreReducer(state = initialState, action) {
    let _state;
    const cloner = objectCloner(state);
    switch (action.type) {
        case ADD_TODO_ITEM:
            _state = cloner({ todos: [...state.todos, action.item] });
            break;
        case DELETE_TODO_ITEM:
            _state = cloner({
                todos: deleteFromArray(state.todos, action.item)
            });
            break;
        case SELECT_TODO_ITEM:
        case DESELECT_TODO_ITEM:
            _state = cloner({ selectedItem: action.selectedItem });
            break;
        default:
            _state = state;
    }

    return _state;
}
