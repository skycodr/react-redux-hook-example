import React from 'react';
import { useDispatch } from 'react-redux';
import { todoActionCreator as creators } from '../store/creators';

export default function TodoListItem(props) {
    const dispatch = useDispatch();
    const { children: item, isSelected } = props;

    const handleOnSelect = () => dispatch(creators.selectTodoItem(item));

    const handleOnClick = e => {
        e.stopPropagation();
        if (isSelected) dispatch(creators.deselectTodoItem());
        dispatch(creators.deleteTodoItem(item));
    };

    return (
        <li onClick={handleOnSelect}>
            {item.label}
            <button onClick={handleOnClick}>X</button>
        </li>
    );
}

export function TodoNoListItem() {
    return <li>No items to show.</li>;
}
