import React from "react";

import { TodoModeToggle } from "./";

export default function TodoTitleBar(props) {
    return (
        <div>
            Todo Application&nbsp;<TodoModeToggle />
        </div>
    );
}