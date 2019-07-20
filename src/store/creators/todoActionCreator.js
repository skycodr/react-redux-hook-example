import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from "../../constants/actions";

export function createTodoItem(item) {
    return {
        type: ADD_TODO_ITEM,
        item
    };
}

export function deleteTodoItem(item) {
    return {
        type: DELETE_TODO_ITEM,
        item
    };
}
