import React from "react";
import { useDispatch } from "react-redux";

import keyboardEvent from "../helpers/keyboardUtils";

import * as creators from "../store/creators/appActionCreator";

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