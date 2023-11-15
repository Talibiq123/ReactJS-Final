import React, { useState } from "react";

function SimpleFrom() {
    let [name, setName] = useState("");

    function manageName(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <br />
            <label for="name">Enter You Name :</label><br />
            <br />
            <input type="text" placeholder="Enter Your Name" onChange={manageName}/>
            <br />
            <h3>{name}</h3>
        </div>
    );
}

export default SimpleFrom;