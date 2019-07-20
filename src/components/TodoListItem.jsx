import React from 'react';
import { useDispatch } from 'react-redux';
import * as creators from '../store/creators/todoActionCreator';

export default function TodoListItem(props) {
    const dispatch = useDispatch();
    let { children: item } = props;
    return (
        <li>
            {item.label}
            <button onClick={() => dispatch(creators.deleteTodoItem(item))}>del</button>
        </li>
    );
}

export function TodoNoListItem() {
    return <li>No items to show.</li>;
}
