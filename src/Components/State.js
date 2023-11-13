import React, { useState } from "react";

function State() {
    let [count, setCount] = useState(0);

    function increase() {
        count = count + 1;
        console.log(count);
        setCount(count);
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increase}>Increase</button>
        </div>
    );
}

export default State;