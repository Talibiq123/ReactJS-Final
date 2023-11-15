import React, { useState } from "react";

function StateWithObjects() {
    let [count, setCount] = useState({bronze: 0, silver: 0, gold: 0});

    function increaseGold() {
        setCount( {...count, gold: count.gold +1});
    }

    function increaseSilver() {
        setCount( {...count, silver: count.silver + 1} );
    }

    function increaseBronze() {
        setCount( {...count, bronze: count.bronze + 1} );
    }

    return (
        <div>
            <h1>Gold : {count.gold}  Silver : {count.silver}  Bronze: {count.bronze}</h1>

            <button onClick={increaseGold}>Increase Gold</button>

            <button onClick={increaseSilver}>Increase Silver</button>

            <button onClick={increaseBronze}>Increase Bronze</button>
        </div>
    );
}

export default StateWithObjects;