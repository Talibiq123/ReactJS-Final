import React, {useState} from "react";
import CricketContext from "./CricketContext.js";

function CricketProvider(props) {
    let [cricketer, setCricketer] = useState({
        name: "M. S. Dhoni",
        age: 42,
        runs: 6484,
        wickets: 46
    })
    // let count = 0;

    return (
        <CricketContext.Provider value={{
            cricketer: cricketer, 
            setCricketer: setCricketer,
        }}>
            {
                props.children 
            }
        </CricketContext.Provider>
    )
}

export default CricketProvider;