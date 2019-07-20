import React from "react";
import { useSelector } from "react-redux";
import TodoListItem, { TodoNoListItem } from "./TodoListItem";

export default function TodoList(props) {
    let todos = useSelector(({ todoStore }) => todoStore.todos);
    let filter = useSelector(({ appStore }) => appStore.filter);

    return (
        <ul>
            {
                todos.length > 0
                    ? todos
                        .filter(item => filter === "" || item.label.includes(filter))
                        .map(item => <TodoListItem key={item.id}>{item}</TodoListItem>)
                    : <TodoNoListItem />
            }
        </ul>
    );
}