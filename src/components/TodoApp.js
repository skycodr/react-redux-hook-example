import React from "react";

import { Provider } from "react-redux";
import { store } from "../store";

import TodoInputSection from "./TodoInputSection";
import TodoList from "./TodoList";
import TodoTitleBar from "./TodoTitleBar";

function TodoApp() {
    return (
        <Provider store={store}>
            <TodoTitleBar />
            <TodoInputSection />
            <TodoList />
        </Provider>
    );
}

export default TodoApp;
