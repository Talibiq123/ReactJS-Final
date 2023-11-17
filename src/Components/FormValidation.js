 import React, { useState } from "react";
 import './formvalidation.css';

 function FormValidation() {
    // let [name, setName] = useState("");
    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");
    // let [confirmPassword, setConformPassword] = useState("");

    let [user, setUser] = useState({name: "", email: "", password: "", confirmPassword: ""});
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");


    function validateForm(event) {
        event.preventDefault();
        if (user.name.length < 3 || user.email.length > 30) {
            setSuccess("");
            return setError("Name should be min 3 char and max 30 charf");
        } else if (user.email.includes('@' && user.email.includes('.'))) {
            setSuccess("");
            return setError("Email should contain @ and . ");
        } else if (user.password.length < 8 || user.password.length > 15) {
            setSuccess("");
            return setError("password must be at least 8 characters long and maximum length is 15")
        } else if (user.password !== user.confirmPassword) {
            setSuccess("");
            return setError("password does not match");
        }
        setError("");
        setSuccess("User registered successfully !")
    }


    return (
        <div>
            {
                error && <h1>{error}</h1>
            }
            {
                success && <h1>{success}</h1>
            }
            <form onSubmit={validateForm}>
                <input type="text" placeholder="Enter Name" 
                onChange={(event) => setUser({...user, name: event.target.value})}
                />
                <input type="email" placeholder="Enter email" 
                onChange={(event) => setUser({...user, email: event.target.value})}
                />
                <input type="password" placeholder="Enter password" 
                onChange={(event) => setUser({...user, password: event.target.value})}
                />
                <input type="password" placeholder="Enter password again" 
                onChange={(event) => setUser({...user, confirmPassword: event.target.value})}
                />
                <button>Submit</button>
            </form>
        </div>
    );
 }

 export default FormValidation;