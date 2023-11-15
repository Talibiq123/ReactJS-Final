import React, { useState } from "react";

function SimpleForm() {
    let [name, setName] = useState("");

    console.log("value after onClick", name);

    function manageName(event) {
        console.log("value before onClick", name);
        setName(event.target.value);
        
    }

    function clearData() {
        setName("");
    }

    return (
        <div>
            <label htmlFor="name">Enter You Name :</label><br />
            <input type="text" placeholder="Enter Your Name" onChange={manageName} value={name} />
            <button type="text" onClick={clearData}>Clear</button>
            <h1>{name.toUpperCase}</h1>
        </div>
    );
}

export default SimpleForm;