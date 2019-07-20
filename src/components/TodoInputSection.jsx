import React from "react";
import { useSelector } from 'react-redux';

import TodoInput from "./TodoInput";
import TodoFilter from "./TodoFilter";

export default function TodoInputSection(props) {
    const { value } = useSelector(({ appStore }) => appStore.appMode);
    return (
        <div>
            {
                value === 0 ? <TodoInput /> : <TodoFilter />
            }
        </div>
    );
}
