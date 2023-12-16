import React, {useContext} from "react";
// import CricketContext from "./useContext/CricketContext.js"; // Method 1
import CricketContext from "./useContext/CricketContext.js";

const Cricket = () => {
    let [cricketer, setCricketer] = useContext(CricketContext);
    // console.log(useContext(CricketContext));

    function updateWicket() {
        setCricketer({...cricketer, wickets: 50})
    }

    return (
        <div>
        <h1>Cricketer is {cricketer.name}</h1>
        <h1>{cricketer.age}</h1>
        <h1>{cricketer.runs}</h1> 
        <button onClick={updateWicket}>Update Wicket</button>
        <p>{cricketer.wickets}</p>
        {/* <CricketContext.Consumer> // Method 1
            {
                (info) => ( // callback
                    // info: 10
                    // info != 10
                    <h1>The moment of Truth is {info} </h1>
                )
            }
        </CricketContext.Consumer> */}
    </div> 
    )
}

export default Cricket;