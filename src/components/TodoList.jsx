import React from "react";
import { useSelector } from "react-redux";
import { TodoListItem, TodoNoListItem } from "./";

export default function TodoList(props) {
    const { todos, selectedItem } = useSelector(store => store.todoStore);
    const filter = useSelector(({ appStore }) => appStore.filter);

    const _noTodos = <TodoNoListItem />;
    const _todos = todos
        .filter(item => filter === "" || item.label.includes(filter))
        .map(item => <TodoListItem key={item.id} isSelected={item.id === (selectedItem && selectedItem.id)} >{item}</TodoListItem>);

    return <ul>{_todos.length > 0 ? _todos : _noTodos }</ul>;
}