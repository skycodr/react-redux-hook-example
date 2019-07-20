import React from "react";
import { useDispatch, useSelector } from 'react-redux';

import * as modes from "../constants/modes";
import * as creators from "../store/creators/appActionCreator";

export default function TodoModeToggle(props) {
    const { value, label } = useSelector(({ appStore }) => appStore.appMode);
    const dispatch = useDispatch();

    const toggleMode = () => {
        let mode = value ? modes.MODE_ADD : modes.MODE_FILTER;
        if (mode.value === modes.MODE_ADD.value) dispatch(creators.resetInputFilter());
        dispatch(creators.toggleAppMode(mode))
    };

    return (
        <button onClick={() => toggleMode()}>{label}</button>
    );
}
