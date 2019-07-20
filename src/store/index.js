import { createStore, combineReducers } from "redux";
import appStoreReducer from "./reducers/appStoreReducer";
import todoStoreReducer from "./reducers/todoStoreReducer";

export const store = createStore(
    combineReducers({
        appStore: appStoreReducer,
        todoStore: todoStoreReducer
    })
);
