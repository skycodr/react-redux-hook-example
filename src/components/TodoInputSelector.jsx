import React from "react";
import { useSelector } from 'react-redux';

import { TodoInput, TodoFilter } from "./";

export default function TodoInputSelector(props) {
    const { value } = useSelector(({ appStore }) => appStore.appMode);
    return (
        <div>
            {
                value === 0 ? <TodoInput /> : <TodoFilter />
            }
        </div>
    );
}
