import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from "../../constants/actions";
import { setObjectProperties } from "../../helpers/objectUtils";
import { deleteFromArray } from "../../helpers/arrayUtils";

const initialState = {
    todos: []
};

export default function todoStoreReducer(state = initialState, action) {
    let _state;
    const cloner = setObjectProperties(state);
    switch (action.type) {
        case ADD_TODO_ITEM:
            _state = cloner({ todos: [...state.todos, action.item] });
            break;
        case DELETE_TODO_ITEM:
            let _todos = deleteFromArray(state.todos, action.item);
            _state = cloner({ todos: _todos });
            break;
        default:
            _state = state;
    }

    return _state;
}
