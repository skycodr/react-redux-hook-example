import { ADD_TODO_ITEM, DELETE_TODO_ITEM, SELECT_TODO_ITEM } from "../../constants";

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

export function selectTodoItem(item) {
    return {
        type: SELECT_TODO_ITEM,
        selectedItem: item
    };
}

export function deselectTodoItem() {
    return {
        type: SELECT_TODO_ITEM,
        selectedItem: null
    };
}
