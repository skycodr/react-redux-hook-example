import React from "react";
import { useDispatch } from "react-redux";

import { appActionCreators as creators } from "../store/creators";

import { keyboardEvent } from "../helpers";

export default function TodoFilter(props) {
    const dispatch = useDispatch();

    const hanldeOnChange = (e) => {
        let { value } = keyboardEvent(e);
        dispatch(creators.setInputFilter(value));
    };

    return (
        <>
            <input placeholder="Type here to filter" onChange={hanldeOnChange} />
        </>
    );
}