import React, { useEffect, useState } from "react";

function EffectBasics() {
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    let [c, setC] = useState(0);

    useEffect(() => {
        console.log("useEffect called");
        document.title = `A: ${a}, B: ${b}, C:${c}`;
        console.log("useEffect ended");
    }, [a, b])

    // document.title = `A: ${a}, B: ${b}`;
    // console.log("document.title was loaded... ");

    return (
        <div>
            <h1>A: {a} | B: {b} | C: {c}</h1>
            <button onClick={() => setA(a+1)}>Increase A</button>
            <button onClick={() => setB(b+1)}>Increase B</button>
            <button onClick={() => setC(c+1)}>Increase C</button>
        </div>
    );
}

export default EffectBasics;