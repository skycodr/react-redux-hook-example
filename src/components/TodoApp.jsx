import React from "react";

import { Provider } from "react-redux";
import { store } from "../store";

import { TodoInputSelector, TodoList, TodoTitleBar } from "./";

export default function TodoApp() {
    return (
        <Provider store={store}>
            <TodoTitleBar />
            <TodoInputSelector />
            <TodoList />
        </Provider>
    );
}
