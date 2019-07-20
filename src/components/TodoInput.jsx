import React from 'react';
import { useDispatch } from "react-redux";
import * as creators from "../store/creators/todoActionCreator";
import keyboardEvent from '../helpers/keyboardUtils';

import TodoJso from '../models/TodoJso';

export default function TodoInput(props) {
    const dispatch = useDispatch();

    const handleOnKeyUp = (e) => {
        let { key, value, element } = keyboardEvent(e);

        if (element && key === 13 && value !== "") {
            dispatch(creators.createTodoItem(TodoJso(value)));
            element.value = "";
        }
    };

    return (
        <>
            <input onKeyUp={handleOnKeyUp} placeholder="Type and enter to add new item" />
        </>
    );
}