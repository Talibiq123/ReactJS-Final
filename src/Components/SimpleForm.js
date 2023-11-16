import React, { useState } from "react";

function SimpleForm() {
    let [name, setName] = useState("");

    console.log("Name from useState", name);

    function manageName(event) {
        console.log("Your types input", event.target.value);
        setName(event.target.value.toUpperCase());
        
    }

    function clearData() {
        setName("");
    }

    return (
        <div>
            <label htmlFor="name">Enter You Name :</label><br />
            <input type="text" placeholder="Enter Your Name" onChange={manageName} value={name} /> {/*value={name} for delete name from input box */}
            <button type="text" onClick={clearData}>Clear</button>
            <h1>{name}</h1>
        </div>
    );
}

export default SimpleForm;