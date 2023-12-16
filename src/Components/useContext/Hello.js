import React, { useContext } from "react";
import CricketContext from "./CricketContext.js";

function Hello() {
    let {cricketer} = useContext(CricketContext);
    return (
        <div>
            <p>{cricketer.name}</p>
            <p>{cricketer.age}</p>
        </div>
    );
}

export default Hello;